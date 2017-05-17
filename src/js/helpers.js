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

export { checkValidDateRange, splitStringToArray};
