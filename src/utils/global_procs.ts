/* Original Uniface Logic:
 * - If character at position 4 is "S"
 *   - If character at position 3 is "B"
 *     - Build form name as "MCBH" + characters 5-8
 * - Otherwise use original form name
 * - Extract form number as "MC" + characters 5-8 of the form name
 */

/**
 * Converts and processes form name according to business rules
 * @param {string} formName - Original form name to process
 * @returns {Object} Object containing converted form_name and form_number
 */
function gp_trg_fgf(formName: string) {
  let convertedFormName = '';
  let formNumber = '';

  // Check if character at position 4 (0-indexed position 3) is "S"
  if (formName.charAt(3) === 'S') {
    // Check if character at position 3 (0-indexed position 2) is "B"
    if (formName.charAt(2) === 'B') {
      // Extract characters 5-8 (0-indexed: substring from position 4, length 4)
      const suffix = formName.substring(4, 8);
      convertedFormName = `MCBH${suffix}`;
    } else {
      // If position 3 is not "B", use original form name
      convertedFormName = formName;
    }
  } else {
    // If position 4 is not "S", use original form name
    convertedFormName = formName;
  }

  // Extract form number: "MC" + characters 5-8 of the converted form name
  const numberSuffix = convertedFormName.substring(4, 8);
  formNumber = `MC${numberSuffix}`;

  return {
    form_name: convertedFormName,
    form_number: formNumber,
    original_name: formName
  };
}

function gp_header(options = {}) {
  const {
    formname = '',
    p_access_drive = '',
    p_insti = '',
    studyYearMap = {}, // e.g. { '0641': '2024/2025' }
    p_study_year = '',
    p_basad = false,
    p_heb_date = false,
    p_system_year = '',
    user_name = '',
    v_ksafim2000 = '',
    print_logo_flag = 'no',
    p_print_trailer_text = '',
    textLookup = k => k // fallback identity translator
  } = options;

  // helpers -----------------------------------------------------------------
  const now = new Date();

  // $date -> current date in ISO (or you can change format)
  const getCurrentDate = () => now;

  // $text -> translation/lookup function
  const $text = key => textLookup(key);

  // $logical("print_logo") -> checks a "yes" value
  const $logical = val => {
    if (typeof val === 'string') return val.toLowerCase() === 'yes';
    return Boolean(val);
  };

  // getitem/id $$s1,$$study_year,$$p_study_year
  // We'll implement: if studyYearMap has a key for s1 return that else p_study_year
  const getItemIdStudyYear = s1 => {
    if (s1 && studyYearMap && studyYearMap[s1] !== undefined) {
      return studyYearMap[s1];
    }
    return p_study_year || '';
  };

  // gp_date_to_heb (best-effort): try Intl.DateTimeFormat with hebrew calendar,
  // otherwise fall back to a readable Hebrew-like string (this is a fallback).
  const gpDateToHeb = dateObj => {
    try {
      // Some JS engines support calendar: 'hebrew' in Intl (not universal).
      // If supported, this will generate a Hebrew calendar date.
      const fmt = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      return fmt.format(dateObj);
    } catch (e) {
      // Fallback: produce a simple dd/mm/yyyy string as placeholder
      const dd = String(dateObj.getDate()).padStart(2, '0');
      const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
      const yyyy = dateObj.getFullYear();
      return `${dd}/${mm}/${yyyy}`; // not actual hebrew calendar but a safe fallback
    }
  };

  // gp_set_monic_nam: in original it probably sets some global/monic values.
  // We will leave it as a no-op placeholder.
  const gpSetMonicNam = () => {
    // placeholder: in your system this might set $$monic or window captions etc.
  };

  // Begin conversion --------------------------------------------------------
  const header = {};
  const trailer = {};

  // report_date.header = $date
  header.report_date = getCurrentDate();

  // system_name.header = $text(v_ksafim2000)
  header.system_name = $text(v_ksafim2000);

  // if ($logical("print_logo")="yes") school_logo.header = "@...gif"
  if ($logical(print_logo_flag)) {
    // Reconstruct path similar to Uniface: "@<drive>\project\image\<insti>.gif"
    // Use forward slashes or backslashes as you prefer for target environment
    const drive = p_access_drive || '';
    const sep = drive.endsWith(':') ? '\\' : '\\'; // keep backslash for Windows-like path
    header.school_logo = `@${drive}${sep}project${sep}image${sep}${p_insti}.gif`;
  }

  // $$s1 = $formname[5:8]  -> for "mcfs0641" we expect "0641"
  // Uniface indexing is 1-based; JS is 0-based. So substring from index 4 length 4.
  const s1 = formname && formname.length >= 8 ? formname.substr(4, 4) : '';

  // $$form_number = "%%$formname[1:2]%%$formname[5:4]"
  // interpret: first two chars + the 4-char block starting at position 5.
  const formNumberPrefix = formname.substr(0, 2) || '';
  const formNumberSuffix = formname.substr(4, 4) || '';
  const form_number = `${formNumberPrefix}${formNumberSuffix}`;

  // $$n1 = $number($$s1)
  const n1 = Number(s1) || 0;

  // $$window_number = "%%$$n1"
  const window_number = String(n1);

  // getitem/id $$s1,$$study_year,$$p_study_year
  // Resolve study_year for this s1 using provided map or fallback
  const study_year = getItemIdStudyYear(s1);

  // $$s4 = "%%$$window_number - %%$text("t_%%$formname") - %%$$s1"
  // That is: "<window_number> - <translated text for t_<formname>> - <s1>"
  const translatedFormName = $text(`t_${formname}`);
  let s4 = `${window_number} - ${translatedFormName} - ${s1}`;

  // call gp_set_monic_nam
  gpSetMonicNam();

  // $$s4 = "%%$$s4 - %%$text(l_finance_year) %%$$p_system_year"
  s4 = `${s4} - ${$text('l_finance_year')} ${p_system_year}`;

  header.report_name = s4;

  // if ($$p_basad) heb_name.header = "בס'ד"
  if (p_basad) {
    header.heb_name = "בס'ד";
  }

  // if ($$p_heb_date) call gp_date_to_heb ; heb_date.header = $$hebrew_date
  if (p_heb_date) {
    const loazi_date = getCurrentDate();
    const hebrew_date = gpDateToHeb(loazi_date);
    header.heb_date = hebrew_date;
  }

  // printed_by.trailer = $$user_name
  trailer.printed_by = user_name;

  // print_trailer.trailer = $text(v_print_trailer)
  trailer.print_trailer = $text(p_print_trailer_text);

  // Also include some of the derived values if you want them returned
  return {
    header,
    trailer,
    meta: {
      s1,
      form_number,
      n1,
      window_number,
      study_year
    }
  };
}

export { gp_trg_fgf, gp_header };
