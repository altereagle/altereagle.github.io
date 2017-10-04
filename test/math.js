/*eslint no-unused-vars: [0] no-console: ["error", { allow: ["info", "error"] }]*/
// Dependencies
// ------------
const chai         = require(`chai`);
const should       = chai.should();
const expect       = chai.expect;
const {defineSupportCode: cucumber} = require(`cucumber`);

describe(`Math`, function() {
  describe(`is math a thing`, function() {
    it('should mean that 1 equals 1', function() {
      expect(1).to.equal(2);
    });
  });
});