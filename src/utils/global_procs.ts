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

export { gp_trg_fgf};
