if (module.hot) {
  module.hot.accept();
}

import { checkValidDateRange } from './helpers';
import DaysDifference from './DaysDifference';

// Handler when the DOM is fully loaded
const callback = function () {
  document.getElementById('btnCalculateDays').addEventListener('click', () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (checkValidDateRange(startDate, endDate)) {

      const calcDays = new DaysDifference(startDate, endDate);

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


