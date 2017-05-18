var expect = require('chai').expect;

var DaysDifference = require('./DaysDifference').default;

describe('Test DaysDifference class', function () {

  it('should return 336 days from 15/1/2016 to 15/12/2016', function () {
    var daysDiff = new DaysDifference('2016-01-15', '2016-12-15');
    expect(daysDiff.daysfromSameYear).to.equal(336);
  });

  it('should return 366 days from 1/1/2016 to 31/12/2016', function () {
    var daysDiff = new DaysDifference('2016-01-01', '2016-12-31');
    expect(daysDiff.daysfromSameYear).to.equal(366);
  });

  it('should return 134 days from 4/8/2017 to 15/12/2017', function () {
    var daysDiff = new DaysDifference('2017-08-04', '2017-12-15');
    expect(daysDiff.daysfromSameYear).to.equal(134);
  });

  it('should return 17 days from 15/3/1900 to 31/3/1900 (same start and end month from same year)', function () {
    var calculateDays = new DaysDifference('1900-03-15', '1900-03-31');
    expect(calculateDays.daysfromSameYear).to.equal(17);
  });

  it('should return 81 days from 15/3/2016 to 3/6/2016', function () {
    var calculateDays = new DaysDifference('2016-3-15', '2016-06-3');
    expect(calculateDays.daysfromSameYear).to.equal(81);
  });


  it('should return 120 days from 1/11/2016 to 28/02/2017', function () {
    var calculateDays = new DaysDifference('2016-11-1', '2017-02-28');
    expect(calculateDays.daysDifferenceOverYears).to.equal(120);
  });

  it('should return 155 days from 13/9/2016 to 15/02/2017', function () {
    var calculateDays = new DaysDifference('2016-09-13', '2017-2-15');
    expect(calculateDays.daysDifferenceOverYears).to.equal(156);
  });

  it('should return 1461 days from 1/1/2014 to 31/12/2017', function () {
    var calculateDays = new DaysDifference('2014-01-01', '2017-12-31');
    expect(calculateDays.daysDifferenceOverYears).to.equal(1461);
  });

  it('should return 1402 days from 15/3/2014 to 31/12/2017', function () {
    var calculateDays = new DaysDifference('2014-3-15', '2017-12-31');
    expect(calculateDays.daysDifferenceOverYears).to.equal(1388);
  });


  it('should return 731 days between 15/3/2014 to 31/12/2017 but not including 2014 and 2017', function () {
    var calculateDays = new DaysDifference('2014-3-15', '2017-12-31');
    expect(calculateDays.allDaysBetweenYears()).to.equal(731);
  });

  it('should return remaining months array with adjusted days from 15/3/2016 to 3/6/2016', function () {
    var daysDiff = new DaysDifference('2016-3-15', '2016-06-3');
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 3]);
  });

  it('should return remaining months array with adjusted days from 15/1/2016 to 15/12/2016', function () {
    var daysDiff = new DaysDifference('2016-01-15', '2016-12-15');
    expect(daysDiff.monthsStartDate()).to.deep.equal([17, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 15]);
  });

  it('should return remaining months array with adjusted days from 8/3/2015 to 15/8/2017', function () {
    var daysDiff = new DaysDifference('2015-03-08', '2017-08-15');
    expect(daysDiff.monthsStartDate()).to.deep.equal([24, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    expect(daysDiff.monthsEndDate()).to.deep.equal([31, 28, 31, 30, 31, 30, 31, 15]);
  });

  it('should return 365 days from 1/1/2017 to 31/12/2017', function () {
    var calculateDays = new DaysDifference('2017-01-01', '2017-12-31');
    expect(calculateDays.calculateDays).to.equal(365);
  });

  it('should return 366 days in leap year from 1/1/2016 to 31/12/2016', function () {
    var calculateDays = new DaysDifference('2016-01-01', '2016-12-31');
    expect(calculateDays.calculateDays).to.equal(366);
  });

  it('should return 292 days from 15/3/2016 to 31/12/2016', function () {
    var calculateDays = new DaysDifference('2016-3-15', '2016-12-31');
    expect(calculateDays.calculateDays).to.equal(292);
  });

});