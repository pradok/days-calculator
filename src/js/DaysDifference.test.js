var expect = require('chai').expect;
var assert = require('chai').assert;

var DaysDifference = require('./DaysDifference').default;

describe('Test DaysDifference class', function () {

  it('should return 365 days between 1/1/2017 and 31/12/2017', function () {
    var startDate = {day: 1, month: 1, year: 2017};
    var endDate = {day: 31, month: 12, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(365);
  });

  it('should return 366 days in leap year between 1/1/2016 and 31/12/2016', function () {
    var startDate = {day: 1, month: 1, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(366);
  });

  it('should return 292 days between 15/3/2016 and 31/12/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(292);
  });

  it('should return 336 days between 15/1/2016 and 15/12/2016', function () {
    var startDate = {day: 15, month: 1, year: 2016};
    var endDate = {day: 15, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(336);
  });

  it('should return 366 days between 1/1/2016 and 31/12/2016', function () {
    var startDate = {day: 1, month: 1, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(366);
  });

  it('should return 134 days between 1/1/2017 and 31/12/2017', function () {
    var startDate = {day: 4, month: 8, year: 2017};
    var endDate = {day: 15, month: 12, year: 2017};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.daysfromSameYear).to.equal(134);
  });

  it('should return 17 days between 15/3/2016 and 31/3/2016 (same start and end month from same year)', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 3, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(17);
  });

  it('should return 81 days between 15/3/2016 and 3/6/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 3, month: 6, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(81);
  });

  it('should return 120 days between 1/11/2016 and 28/02/2017', function () {
    var startDate = {day: 1, month: 11, year: 2016};
    var endDate = {day: 28, month: 2, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    expect(calculateDays.daysDifferenceOverYears).to.equal(120);
  });

  it('should return 155 days between 13/9/2016 and 15/02/2017', function () {
    var startDate = {day: 13, month: 9, year: 2016};
    var endDate = {day: 15, month: 2, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    expect(calculateDays.daysDifferenceOverYears).to.equal(156);
  });

  it('should return 1461 days between 1/1/2014 and 31/12/2017', function () {
    var startDate = {day: 1, month: 1, year: 2014};
    var endDate = {day: 31, month: 12, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    expect(calculateDays.daysDifferenceOverYears).to.equal(1461);
  });

  it('should return 1402 days between 15/3/2014 and 31/12/2017', function () {
    var startDate = {day: 15, month: 3, year: 2014};
    var endDate = {day: 31, month: 12, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    expect(calculateDays.daysDifferenceOverYears).to.equal(1388);
  });

  it('should return remaining months array with adjusted days between 15/3/2016 and 3/6/2016', function () {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 3, month: 6, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    return expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 3]);
  });

  it('should return remaining months array with adjusted days between 15/1/2016 and 15/12/2016', function () {
    var startDate = {day: 15, month: 1, year: 2016};
    var endDate = {day: 15, month: 12, year: 2016};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 15]);
  });

  it('should return remaining months array with adjusted days between 8/3/2015 and 15/8/2017', function () {
    var startDate = {day: 8, month: 3, year: 2015};
    var endDate = {day: 15, month: 8, year: 2017};
    var daysDiff = new DaysDifference(startDate, endDate);
    expect(daysDiff.monthsStartDate()).to.deep.equal([24, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 28, 31, 30, 31, 30, 31, 15]);
  });


});