// Check if dateEnd is not before dateStart
function checkValidDateRange(startDate, endDate) {
  if(Date.parse(endDate) < Date.parse(startDate)) {
    return false;
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
