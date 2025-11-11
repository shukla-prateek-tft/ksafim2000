import moment from 'moment';
import { toast } from 'react-toastify';
import AccountDocument from '../assets/help_accounts.pdf';

import { PLAN_NUM, REGEX } from '@/constants/appConstant';
import { convertTimeZone } from './dateHelper';
import secureLocalStorage from 'react-secure-storage';
import clsx from 'clsx';
// Utility to attach multiple classes

interface CaseOption {
  caseId: number;
  caseValue: string;
}
const canUseNewUI = () => {
  return import.meta.env.VITE_USE_NEW_UI === 'true' ? true : true;
};
function attachMultipleClasses(...args: (string | undefined | null | boolean)[]): string {
  return clsx(...args);
}

// Utility to truncate text
function truncateText(text: string, maxLength: number = 25): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

// Token validation
const isValidToken = (token: string | null): boolean => {
  if (!token) return true;

  try {
    const accessToken = token;
    const payload = JSON.parse(
      atob(accessToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
    );
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp && payload.exp < currentTime;
  } catch (error) {
    console.error('Invalid token:', (error as Error).message);
    return true;
  }
};

// Utility to get an item from localStorage
function getItemFromLocalStorage<T = unknown>(
  key: string,
  shouldParse: boolean = false
): T | undefined {
  const value = secureLocalStorage.getItem(key);
  if (value) {
    return shouldParse ? (JSON.parse(value) as T) : (value as unknown as T);
  }
  return undefined;
}

// Debounce utility
function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  timeout: number = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

// Generate a random number
const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random string
const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Build query parameters from an object
function buildQueryParams(
  params: Record<
    string,
    string | number | boolean | (string | number | boolean)[] | null | undefined
  >
): string {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== null && value !== undefined && value !== '')
    .flatMap(([key, value]) =>
      Array.isArray(value)
        ? value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`)
        : [`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`]
    )
    .join('&');

  return queryString;
}

// Generate random data
type RandomData = {
  id: string;
  supplierNumber: number;
  invoice: string;
  phone: string;
  amount: number;
  email: string;
  disabled: boolean;
  validityDeduction: number;
  openInvoices: number;
  balance: number;
  nhsCard: string;
  description: string;
  secondaryIssue: string;
};

const generateRandomData = (): RandomData => ({
  id: generateRandomString(10),
  supplierNumber: generateRandomNumber(1000, 9999),
  invoice: generateRandomString(12),
  phone: `+1${generateRandomNumber(1000000000, 9999999999)}`,
  amount: generateRandomNumber(1000, 9999),
  email: `${generateRandomString(5)}@example.com`,
  disabled: Math.random() > 0.5,
  validityDeduction: generateRandomNumber(0, 100),
  openInvoices: generateRandomNumber(0, 10),
  balance: generateRandomNumber(0, 10000),
  nhsCard: generateRandomString(10),
  description: generateRandomString(30),
  secondaryIssue: `${generateRandomString(10)} ${generateRandomString(
    10
  )} ${generateRandomString(10)}`
});
const getFormatedDate = (date?: Date | string, format?: string) => {
  return moment(date || new Date())
    .locale('he')
    .format(format || import.meta.env.VITE_DEFAULT_DATE_FORMAT);
};

function getFormatedNumber(input: number | string | null | undefined) {
  if (input === null || input === undefined || isNaN(Number(input))) {
    return '';
  }
  const number = Number(input);
  const parts = number.toFixed(2).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
function getDateChecker(instiYearStr: string) {
  const instiYear = parseInt(instiYearStr, 10);
  return new Date(`${instiYear}-01-01`);
}
function getDateCheckerOther(instiYearStr: string) {
  const instiYear = parseInt(instiYearStr, 10);
  return new Date(`${instiYear}-08-31`);
}
function getOneJanuaryDateChecker(instiYearStr: string) {
  const instiYear = parseInt(instiYearStr, 10);
  const previousYear = instiYear - 1;
  return new Date(`${previousYear}-12-31`);
}

const formatDateForInput = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Allow today OR yesterday OR any future date added becuase of date chnage issue
const isFutureDateAllowYesterday = (date: string | Date): boolean => {
  if (!date) return false;

  const given = new Date(date);
  const today = new Date();
  given.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Allow today OR yesterday OR any future date
  const oneDayMs = 24 * 60 * 60 * 1000;
  const result = given.getTime() >= today.getTime() - oneDayMs;
  return result;
};

type ErrorResponse = {
  errors?: Record<string, string[]>;
  message?: string;
};

const showToastErrors = (response: ErrorResponse) => {
  if (response?.errors && Object.keys(response.errors).length > 0) {
    const errorMessages = Object.values(response.errors)
      .flat()
      .map((message, index) => <div key={index}>{message}</div>);

    toast.error(<div>{errorMessages}</div>);
  } else if (response?.message) {
    toast.error(response.message);
  } else {
    toast.error('An unknown error occurred!');
  }
};
const dowloadHelpDocument = () => {
  const link = document.createElement('a');
  link.href = AccountDocument;
  link.download = 'help_accounts.pdf';
  link.click();
};

const dowloadDocumentByFileName = (file: string, fileName: string): void => {
  const link = document.createElement('a');
  link.href = file;
  link.download = fileName;
  link.click();
};

const viewDocumentByFileName = async (file: string): Promise<void> => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error('Failed to fetch document');
    }

    const fileBlob = await response.blob();
    const blobUrl = URL.createObjectURL(fileBlob);

    window.open(blobUrl, '_blank');
  } catch (error) {
    console.error('Error fetching document:', error);
  }
};

const safeDateISO = (dateStr: string | undefined): string => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? '' : date.toISOString();
};
function formatIntegerPart(integerPart: string): string {
  if (integerPart.length <= 3) {
    return integerPart;
  }

  const lastThree = integerPart.slice(-3);
  const otherNumbers = integerPart.slice(0, -3);
  const formattedOtherNumbers = otherNumbers.replace(REGEX.integer, ',');
  return formattedOtherNumbers + ',' + lastThree;
}
function formatToIndianNumbering(num: number | string): string {
  if (num === null || num === undefined || num === '') return '';

  const numStr = typeof num === 'number' ? num.toString() : num;
  const isNegative = numStr.startsWith('-');
  const cleanStr = numStr.replace(/,/g, '').replace('-', '');
  if (!REGEX.indianNumberString.test(cleanStr)) return num;

  const [integerPart, decimalPart] = cleanStr.split('.');
  const formattedInteger = formatIntegerPart(integerPart);

  const result =
    decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;

  return isNegative ? `-${result}` : result;
}
function formatToInternationalNumbering(num: number | string): string {
  if (num === null || num === undefined || num === '') return '';

  const numStr = typeof num === 'number' ? num.toString() : num;
  const hyphenIndex = numStr.indexOf('-');
  const cleanStr = numStr.replace(/,/g, '').replace('-', '');

  if (!REGEX.indianNumberString.test(cleanStr)) return num;

  const [integerPart, decimalPart] = cleanStr.split('.');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  let result =
    decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;

if (hyphenIndex !== -1) {
    let commasBefore = 0;
    let digitCount = 0;
    for (let i = 0; i < result.length && digitCount < hyphenIndex; i++) {
      if (result[i] !== ',') {
        digitCount++;
      } else {
        commasBefore++;
      }
    }
    const insertPos = hyphenIndex + commasBefore;
    result = result.slice(0, insertPos) + '-' + result.slice(insertPos);
  }

  return result;
}

export const parseDateInput = (inputValue: string): Date | null => {
  const trimmedValue = inputValue?.trim();
  if (!trimmedValue) return null;

  if (trimmedValue.length === 8 && REGEX['8digitDate'].test(trimmedValue)) {
    return formatDateFromEightDigits(trimmedValue);
  }

  if (trimmedValue.length === 6 && REGEX['6digitDate'].test(trimmedValue)) {
    return formatDateFromSixDigits(trimmedValue);
  }

  if (REGEX.dottedDate.test(trimmedValue)) {
    return formatDateFromDotted(trimmedValue);
  }

  return null;
};

const formatDateFromSixDigits = (value: string): Date | null => {
  const day = value.substring(0, 2);
  const month = value.substring(2, 4);
  const year = '20' + value.substring(4, 6);
  return createValidDate(day, month, year);
};
const formatDateFromEightDigits = (dateStr: string): Date | null => {
  const day = dateStr.substring(0, 2);
  const month = dateStr.substring(2, 4);
  const year = dateStr.substring(4, 8); // Full year
  return createValidDate(day, month, year);
};

const formatDateFromDotted = (value: string): Date | null => {
  const [day, month, year] = value.split('.');
  const normalizedYear = year.length === 2 ? '20' + year : year; // only prepend for YY
  return createValidDate(day, month, normalizedYear);
};

const createValidDate = (day: string, month: string, year: string): Date | null => {
  // strict parsing to avoid rollover (e.g., 32.01.2024)
  const m = moment(`${day}.${month}.${year}`, 'DD.MM.YYYY', true);
  return m.isValid() ? m.toDate() : null;
};
const isValidDateFormat = (dateString: string): boolean => {
  return REGEX.dateFormat.test(dateString);
};

const mapOptions = (data: CaseOption[] | undefined | null) => {
  return Array.isArray(data)
    ? data.map(elem => ({
        value: elem.caseId,
        label: elem.caseValue.trim()
      }))
    : [];
};

const regexEvaluator = (regex: RegExp, testString: string): boolean => {
  return regex.test(testString);
};

const extractInitialNumber = (text?: string) => {
  if (!text || typeof text !== 'string') return null;

  const match = text.match(/^\D*(\d+)/);
  return match ? match[1] : null;
};
const getITCDate = (selectedDate: Date | string) => {
  if (!selectedDate) {
    return;
  }
  const date = new Date(selectedDate);
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset).toISOString();
  return localDate;
};

function getInputPattern(maxLength: number, customPattern?: string): RegExp {
  const pattern = `^[a-zA-Z0-9\u0590-\u05FF]{1,${maxLength}}$`;
  return new RegExp(customPattern ? customPattern : pattern);
}
function getLengthPattern(maxLength: number) {
  const mainRegex = new RegExp(`^[\\d\u0590-\u05FF]{0,${maxLength}}(\\.\\d{0,2})?$`);
  return mainRegex;
}

const validateInPutForNumberAndLenght = (value, maxDigits) => {
  const sanitizedValue = value.replace(/[^0-9.]/g, '');
  const regex = new RegExp(`^\\d{0,${maxDigits}}(\\.\\d{0,2})?$`);
  return regex.test(sanitizedValue) ? sanitizedValue : null;
};

const formatToCommaAndDotZero = value => {
  if (!isNaN(Number(value)) && value.trim() !== '') {
    const numericValue = parseFloat(value.replace(/,/g, ''));
    return numericValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  return null;
};

const convertCommaToNumber = (value: number | null | undefined): number | null => {
  if (value == null || value == undefined) return null;
  const numericString = String(value).replace(/,/g, '');
  const num = parseFloat(numericString);
  return isNaN(num) ? null : num;
};
function calculateOutcome(taxDeduct: number = 0, totalSum: number): number {
  if (!taxDeduct) {
    return parseFloat(totalSum.toFixed(2));
  }
  const taxAmount = (taxDeduct / 100) * totalSum;
  const totalReturn = totalSum - taxAmount;
  return parseFloat(totalReturn.toFixed(2));
}
function calculateRemaining(remainingPercentage?: number = 0, totalSum: number): number {
  if (!totalSum) return;

  const remaining = (remainingPercentage / 100) * totalSum;
  return parseFloat(remaining.toFixed(2));
}
export const TAB_ID = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const triggerAuthChange = (userData: {}) => {
  const channel = new BroadcastChannel('auth');
  channel.postMessage({
    type: 'auth-changed',
    sender: TAB_ID,
    payload: userData // this can be a full user object
  });
  channel.close();
};
const isAnyCardHinuhHatvValid = (items: InvoiceDataItem[]): boolean => {
  const validNumbers = new Set(PLAN_NUM);
  return items.some(item => validNumbers.has(item.cardHinuhHatv));
};

const isAnyShortDescAutValid = (items: InvoiceDataItem[]): boolean => {
  const validNumbers = new Set(PLAN_NUM);
  return items.some(item => validNumbers.has(item.shortDescAut));
};

function hasEmptyCardHinuhHatv(data: InvoiceDataItem[]): boolean {
  return data.some(item => item.cardHinuhHatv === null || item.cardHinuhHatv === undefined);
}

const resetTime = (date?: Date | null) => {
  if (date) date.setHours(0, 0, 0, 0);
};
function isValidData(value: string | number | null | undefined): boolean {
  return value !== undefined && value !== null && value !== '';
}

function isValidAmount (amount: string | number)  {
  return !isNaN(Number(amount?.toString()?.replace('-', '')))
}

//Date validations common functions
function convertPrevYearAug31(instiYearStr: string): Date {
  const instiYear = parseInt(instiYearStr, 10);
  const previousYear = instiYear - 1;
  // Use year, monthIndex (7 = August), day
  return getDateOnly(new Date(previousYear, 7, 31))!;
}
function getInstiYearAug31(instiYearStr: string): Date {
  const instiYear = parseInt(instiYearStr, 10);
  return getDateOnly(new Date(instiYear, 7, 31))!;
}
function getDateOnly(date?: Date | null): Date | null {
  if (!date) return null;
  // your logic (e.g., strip time part)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Function to check and return d1 and d2 dates
function gp_check_date (accountYearTo?: string | null) {
  const currentYear = new Date().getFullYear();

  const d2 = new Date(currentYear, 0, 1); // 01 Jan current year

  let d1: Date;

  if (accountYearTo) {
    const parsed = new Date(accountYearTo);
    d1 = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
  } else {
    const future = new Date();
    future.setDate(future.getDate() + 180);
    d1 = new Date(future.getFullYear(), future.getMonth(), future.getDate());
  }

  return { d1, d2 };
}

function getKalendarYearDateRange(kalendarYear: string | number) {
  const year = Number(kalendarYear);

  const startDate = new Date(year, 0, 1);  // 01 Jan YYYY
  const endDate = new Date(year, 11, 31);  // 31 Dec YYYY

  return {
    kalendarYearStartDate: startDate,
    kalendarYearEndDate: endDate,
  };
}

function getPrevYearSeptemberFirst(instiYear: string | number): Date {
  const year = Number(instiYear) - 1;
  return new Date(year, 8, 1); // 8 = September (0-indexed) 01/09/PrevYear
}

export function getPrevYearAugust15(instiYear: string | number): Date {
  const year = Number(instiYear) - 1;
  return new Date(year, 7, 15); // Month index 7 = August
}

const isFutureDate = (date: string | Date): boolean => {
  const givenDate = new Date(date);
  const today = new Date();

  // Reset today's time to 00:00:00 for accurate comparison
  today.setHours(0, 0, 0, 0);
  givenDate.setHours(0, 0, 0, 0);

  return givenDate > today;
};

export {
  attachMultipleClasses,
  truncateText,
  getItemFromLocalStorage,
  isValidToken,
  debounce,
  generateRandomData,
  buildQueryParams,
  getFormatedDate,
  getFormatedNumber,
  formatDateForInput,
  showToastErrors,
  dowloadHelpDocument,
  dowloadDocumentByFileName,
  viewDocumentByFileName,
  safeDateISO,
  isFutureDate,
  convertPrevYearAug31,
  getInstiYearAug31,
  formatToIndianNumbering,
  formatToInternationalNumbering,
  gp_check_date,
  formatIntegerPart,
  isValidDateFormat,
  mapOptions,
  regexEvaluator,
  extractInitialNumber,
  getITCDate,
  getOneJanuaryDateChecker,
  getDateChecker,
  getDateCheckerOther,
  getInputPattern,
  getLengthPattern,
  validateInPutForNumberAndLenght,
  formatToCommaAndDotZero,
  convertCommaToNumber,
  convertTimeZone,
  calculateOutcome,
  calculateRemaining,
  getDateOnly,
  triggerAuthChange,
  isAnyCardHinuhHatvValid,
  hasEmptyCardHinuhHatv,
  resetTime,
  isAnyShortDescAutValid,
  isValidData,
  canUseNewUI,
  isFutureDateAllowYesterday,
  isValidAmount,
  getKalendarYearDateRange,
  getPrevYearSeptemberFirst
};
