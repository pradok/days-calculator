// Check if dateEnd is not before dateStart
function checkValidDateRange(startDate, endDate) {
  const reg = /^[0-9.\/-]+$/;
  // Allow only if string contains / or -
  if(!reg.test(startDate)) {
    return 'Please provide Start Date in dd-mm-yyyy or dd/mm/yyyy format';
  }
  if(!reg.test(endDate)) {
    return 'Please provide End Date in dd-mm-yyyy or dd/mm/yyyy format';
  }

  let start = cleanDateFormat(startDate);
  start = validateDate(start.year, start.month, start.day);

  let end = cleanDateFormat(endDate);
  end = validateDate(end.year, end.month, end.day);

  if(end < start) {
    return 'Date End should be after Date Start';
  }

  return true;
}

function cleanDateFormat(dateStr) {
  const date = splitStringToArray(dateStr);
  // Since date type field provides in yyyy-mm-dd format.
  // If dateStr was provided in dd/mm/yyyy or dd-mm-yyyy format.
  // Flip the array.
  if(dateStr.indexOf('/') === 2 || dateStr.indexOf('-') === 2) {
    date.reverse();
  }
  return {year: parseInt(date[0]), month: parseInt(date[1]), day: parseInt(date[2])};
}

function validateDate(yearStr, monthStr, dayStr) {

  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);

  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(year % 4 == 0) {
    // 2nd index (Feb) has 29 days.
    daysInMonths[1] = 29;
  }

  if(year.toString().length !== 4) {
    return false;
  }
  if(month < 1 || month > 12) {
    return false;
  }
  if(day < 1 || day > daysInMonths[month - 1]) {
    return false;
  }

  return parseInt(""+year+month+day);

}

function splitStringToArray(str) {
  let separators = [' ', '-', '/'];
  return str.split(new RegExp(separators.join('|'), 'g'));
}

function flattenArray (arr) {
  return arr.reduce(
    (acc, val) => acc.concat(
      Array.isArray(val) ? flattenArray(val) : val
    ),
    []
  );
}

export { cleanDateFormat, checkValidDateRange, splitStringToArray, flattenArray, validateDate};
