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

  if(Date.parse(endDate) < Date.parse(startDate)) {
    return 'Date End should be after Date Start';
  }

  return true;
}


function splitStringToArray(str) {
  let separators = [' ', '-', '/'];
  return str.split(new RegExp(separators.join('|'), 'g'));
}

function _flattenArray (arr) {
  return arr.reduce(
    (acc, val) => acc.concat(
      Array.isArray(val) ? _flattenArray(val) : val
    ),
    []
  );
}

export { checkValidDateRange, splitStringToArray, _flattenArray};
