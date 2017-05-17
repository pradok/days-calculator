if (module.hot) {
  module.hot.accept();
}

import { checkValidDateRange, splitStringToArray } from './helpers';
import DaysDifference from './DaysDifference';

const callback = function () {
  // Handler when the DOM is fully loaded
  document.getElementById('btnCalculateDays').addEventListener('click', () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (checkValidDateRange(startDate, endDate)) {
      const startDateArr = splitStringToArray(startDate);
      const endDateArr = splitStringToArray(endDate);
      const calcDays = new DaysDifference(
        {year: startDateArr[0], month: startDateArr[1], day: startDateArr[2]},
        {year: endDateArr[0], month: endDateArr[1], day: endDateArr[2]}
      );
      document.getElementById("days").innerHTML = calcDays.calculateDays;
    }
    else {
      alert('Date End should be after Date Start');
    }

  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}


