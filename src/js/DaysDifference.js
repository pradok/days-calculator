export default class DaysDifference {

  constructor (startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalMonths = 12;
  }

  daysInMonth (year) {
    // Each index represents month.
    const daysinMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Check if leap year.
    if (year % 4 == 0) {
      daysinMonths[1] = 29;
      return daysinMonths;
    }
    return daysinMonths;
  }

  getRemainingDaysFromStartMonth (day, month, year) {
    let months = this.daysInMonth(year);
    // Returns the day inclusive by adding 1
    return (months[month - 1] - day) + 1;
  }

  getRemainingDaysFromEndMonth (day, month, year) {
    let months = this.daysInMonth(year);
    // Returns the day inclusive by adding 1
    return (day - 1) + 1;
  }

  // Adjust number of days in case dates that are not the 1st of month.
  adjustDaysMonths (daysInMonthsArray, year, month, day, startOrEnd = 'start') {

    let daysMonth = [];

    if (startOrEnd === 'start') {
      daysMonth = this.getRemainingDaysFromStartMonth(day, month, year);
    } else {
      daysMonth = this.getRemainingDaysFromEndMonth(day, month, year);
    }

    daysInMonthsArray[month - 1] = daysMonth;

    return daysInMonthsArray;

  }

  // Months array with each element as no of days.
  monthsStartDate () {
    // In case we have middle of month date.
    let months = this.adjustDaysMonths(this.daysInMonth(this.startDate.year), this.startDate.year, this.startDate.month, this.startDate.day, 'start');
    // Includes any middle month, 1st or last.
    // Slice accordingly.
    return months.slice(this.startDate.month - 1);
  }

  // Months array with each element as no of days.
  monthsEndDate () {
    // In case we have middle of month date.
    let months = this.adjustDaysMonths(this.daysInMonth(this.endDate.year), this.endDate.year, this.endDate.month, this.endDate.day, 'end');
    // Includes any middle month, 1st or last.
    // Slice accordingly.
    return months.slice(0, this.endDate.month);
  }

  get daysfromSameYear () {
    let remainingMonths;
    if (this.startDate.year == this.endDate.year && this.startDate.month == this.endDate.month) {
      // Will return just one index if same month in same start and end year.
      return (this.endDate.day - this.startDate.day) + 1;
    }

    let daysInMonthsForStart = this.monthsStartDate();
    let daysInMonthsForEnd = this.monthsEndDate();

    // We already have sliced from start month.
    remainingMonths = daysInMonthsForStart.slice(0, (this.endDate.month - this.startDate.month) + 1);
    // Take the last month out which will be replaced with the last index of daysInMonthsForEnd.
    remainingMonths.pop();

    // the last element form daysInMonthsForEnd is the actual calculated days for the end date month.
    remainingMonths.push(daysInMonthsForEnd[daysInMonthsForEnd.length - 1]);

    console.log('remainingMonths:', remainingMonths);

    return remainingMonths.reduce((prev, curr) => prev + curr);

  }


}