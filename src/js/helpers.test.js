var expect = require('chai').expect;

var validateDate = require('./helpers').validateDate;
var checkValidDateRange = require('./helpers').checkValidDateRange;


describe('Test helpers checkValidDateRange()', function () {

  it('should return "Please provide Start Date in dd-mm-yyyy or dd/mm/yyyy format" for start date 02/02*2010 and end date 02/03/2010', function () {
    expect(checkValidDateRange('2010*02/02', '2010/03/02')).to.equal('Please provide Start Date in dd-mm-yyyy or dd/mm/yyyy format');
  });

  it('should return "Please provide End Date in dd-mm-yyyy or dd/mm/yyyy format" for start date 02/02/2010 and end date 02/03*2010', function () {
    expect(checkValidDateRange('2010/02/02', '2010*03/02')).to.equal('Please provide End Date in dd-mm-yyyy or dd/mm/yyyy format');
  });

  it('should return true for start date 02/02/2010 and end date 02/03/2010', function () {
    expect(checkValidDateRange('2010/02/02', '2010/03/02')).to.equal(true);
  });

  it('should return "Date End should be after Date Start" for start date 02/05/2010 and end date 02/02/2010', function () {
    expect(checkValidDateRange('2010/05/02', '2010/02/02')).to.equal('Date End should be after Date Start');
  });

  it('should return true for start date 02/02/2010 and end date 02/03/2010', function () {
    expect(checkValidDateRange('02/02/2010', '02/03/2010')).to.equal(true);
  });
  it('should return "Date End should be after Date Start" for start date 02/05/2010 and end date 02/02/2010', function () {
    expect(checkValidDateRange('02/05/2010', '02/02/2010')).to.equal('Date End should be after Date Start');
  });
});

describe('Test helpers validateDate()', function () {

  it('should return false for date 29/02/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '02', '29')).to.equal(false);
  });

  it('should return false for date 51/10/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '10', '51')).to.equal(false);
  });

  it('should return false for date 0/10/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '10', '0')).to.equal(false);
  });

  it('should return false for date -1/10/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '10', '-1')).to.equal(false);
  });

  it('should return false for date 12/13/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '13', '12')).to.equal(false);
  });

  it('should return false for date 12/0/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '0', '12')).to.equal(false);
  });

  it('should return false for date 12/0/201 from validateDate() helper', function () {
    expect(validateDate('201', '0', '12')).to.equal(false);
  });

  it('should return false for date 12/0/0201 from validateDate() helper', function () {
    expect(validateDate('0201', '0', '12')).to.equal(false);
  });

  it('should return 20101212 for date 12/12/2010 from validateDate() helper', function () {
    expect(validateDate('2010', '12', '12')).to.equal(20101212);
  });

  it('should return 2016229 for date 29/02/2016 from validateDate() helper', function () {
    expect(validateDate('2016', '02', '29')).to.equal(2016229);
  });

});