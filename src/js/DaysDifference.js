export default class DaysDifference {

  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalMonths = 12;
  }

  get daysInMonth() {
    // Each index represents month.
    const daysinMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysinMonths;
  }
  getRemainingDaysFromStartMonth(day, month, year) {
    let months = this.leapYear(year);
    // Returns the day inclusive by adding 1
    return (months[month-1] - day) + 1;
  }

  getRemainingDaysFromEndMonth(day, month, year) {
    let months = this.leapYear(year);
    // Returns the day inclusive by adding 1
    return (day - 1) + 1;
  }

  adjustDaysInMonths(daysInMonthsArray) {
    if(this.startDate.year == this.endDate.year && this.startDate.month == this.endDate.month) {
      // Will return just one index if same month in same start and end year.
      return [(this.endDate.day - this.startDate.day) + 1];
    }
    let daysFromStartMonth = this.getRemainingDaysFromStartMonth(this.startDate.day, this.startDate.month, this.startDate.year);
    let daysFromEndMonth = this.getRemainingDaysFromEndMonth(this.endDate.day, this.endDate.month, this.endDate.year);

    daysInMonthsArray[this.startDate.month - 1] = daysFromStartMonth;
    daysInMonthsArray[this.endDate.month - 1] = daysFromEndMonth;

    return daysInMonthsArray;

  }

  get daysfromSameYear() {
    let months = this.leapYear(this.startDate.year);
    let remainingMonths;

    let daysInMonthsArrayAdjusted = this.adjustDaysInMonths(months);

    if(daysInMonthsArrayAdjusted.length == 1) {
      return daysInMonthsArrayAdjusted[0];
    }

    if(this.startDate.month == 1 && this.endDate.month == 12 || this.startDate.month > 1 && this.endDate.month == 12) {
      remainingMonths = months.slice(this.startDate.month - 1);
    }

    if(this.startDate.month > 1 && this.endDate.month < 12) {
      remainingMonths = months.slice(this.startDate.month - 1, this.endDate.month + 1);
    }

    return remainingMonths.reduce((prev, curr) => prev + curr);
  }

  leapYear(year) {
    if (year % 4 == 0) {
      let months = this.daysInMonth;
      months[1] = 29;
      return months;
    }
    return this.daysInMonth;
  }

  get daysFromStartDate() {
    let totalMonths = (this.totalMonths - this.startDate.month) + 1
  }


}