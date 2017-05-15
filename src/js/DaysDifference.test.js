var expect = require('chai').expect;
var assert = require('chai').assert;

var DaysDifference = require('./DaysDifference').default;

describe('Test DaysDifference class', function () {

  it('should return days 365 from 1/1/2017 to 31/12/2017', function () {
    var startDate = {day: 1, month: 1, year: 2017};
    var endDate = {day: 31, month: 12, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(365);
  });

  it('should return days 366 in leap year from 1/1/2016 to 31/12/2016', function () {
    var startDate = {day: 1, month: 1, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(366);
  });

  it('should return 292 days from 15/3/2016 to 31/12/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(292);
  });

  it('should return 336 days from 15/1/2016 to 15/12/2016', function () {
    var startDate = {day: 15, month: 1, year: 2016};
    var endDate = {day: 15, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(336);
  });

  it('should return 366 days from 1/1/2016 to 31/12/2016', function () {
    var startDate = {day: 1, month: 1, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(366);
  });

  it('should return 134 days from 1/1/2017 to 31/12/2017', function () {
    var startDate = {day: 4, month: 8, year: 2017};
    var endDate = {day: 15, month: 12, year: 2017};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(134);
  });

  it('should return days 17 from 15/3/2016 to 31/3/2016 (same start and end month from same year)', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 3, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(17);
  });

  it('should return days 81 from 15/3/2016 to 3/6/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 3, month: 6, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(81);
  });

  it('should return remaining months and adjusted days from start date 15/3/2016 and end date 3/6/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 3, month: 6, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    return expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 3]);
  });

  it('should return remaining months and adjusted days from start date 15/1/2016 and end date 15/12/2016', function () {
    var startDate = {day: 15, month: 1, year: 2016};
    var endDate = {day: 15, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 15]);
  });


});