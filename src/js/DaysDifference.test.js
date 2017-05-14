var expect = require('chai').expect;

var DaysDifference = require('./DaysDifference').default;


describe('Testing DaysDifference class', function() {

  it('should return days 365 from 1/1/2017 to 31/12/2017', function() {
    var startDate = {day: 1, month: 1, year: 2017};
    var endDate = {day: 31, month: 12, year: 2017};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(365)
  });

  it('should return days 366 from leap year: 1/1/2016 to 31/12/2016', function() {
    var startDate = {day: 1, month: 1, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(366)
  });

  it('should return days 292 from 15/3/2016 to 31/12/2016', function() {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 12, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(292)
  });


  it('should return days 17 from 15/3/2016 to 31/3/2016 (same start and end month from same year)', function() {
    var startDate = {day: 15, month: 3, year: 2016};
    var endDate = {day: 31, month: 3, year: 2016};
    var calculateDays = new DaysDifference(startDate, endDate);
    return expect(calculateDays.daysfromSameYear).to.equal(17)
  });

});