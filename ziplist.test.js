/* eslint-env mocha, chai */
/* global zipList, zipListTheEasyWay,chai */

const testA = ['a', 'b', 'c'];
const testB = [1, 2, 3];
const output = ['a', 1, 'b', 2, 'c', 3];

describe('zipList', function () {
  describe('zipping two test arrays', function () {
    it('return an array with 6 elements', function () {
      chai.expect(zipList(testA, testB)).to.be.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(testA, testB)).to.deep.equal(output);
    });
  });
  describe('zipping two test arrays', function () {
    it('return an array with 6 elements', function () {
      chai.expect(zipListTheEasyWay(testA, testB)).to.be.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheEasyWay(testA, testB)).to.deep.equal(output);
    });
  });
});
