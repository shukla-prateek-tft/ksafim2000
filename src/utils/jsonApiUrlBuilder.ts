// src/utils/jsonApiUrlBuilder.ts

interface BuildJsonApiUrlParams {
  baseUrl: string;
  include?: string[];       // e.g., ['bank', 'city']
  filters?: Record<string, string | number | undefined | null>;
  sort?: string;            // e.g., "name" or "-id"
  pageSize?: number;
  pageNumber?: number;
}

/**
 * Builds a valid JSON:API URL dynamically.
 */
export function buildJsonApiUrl({
  // baseUrl,
  include = [],
  filters = {},
  sort,
  pageSize = 10,
  pageNumber = 1,
}: BuildJsonApiUrlParams): string {
  const params: string[] = [];

  // ✅ include
  if (include.length > 0) {
    params.push(`include=${include.join(',')}`);
  }

  // ✅ filters
  const filterExpressions = Object.entries(filters)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `equals(${key},'${value}')`);

  if (filterExpressions.length === 1) {
    params.push(`filter=${filterExpressions[0]}`);
  } else if (filterExpressions.length > 1) {
    params.push(`filter=and(${filterExpressions.join(',')})`);
  }

  // ✅ sort
  if (sort && sort.trim() !== '') {
    params.push(`sort=${encodeURIComponent(sort)}`);
  }

  // ✅ pagination
  params.push(`page[size]=${pageSize}`);
  params.push(`page[number]=${pageNumber}`);

  // ✅ join all
  const queryString = params.join('&');
  return `?${queryString}`;
}
