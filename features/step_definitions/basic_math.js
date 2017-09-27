/*eslint no-unused-vars: [0] no-console: ["error", { allow: ["info", "error"] }]*/
// Dependencies
// ------------
const chai         = require(`chai`);
const should       = chai.should();
const expect       = chai.expect;
const {defineSupportCode: cucumber} = require(`cucumber`);

// Request Actions
// ---------------
cucumber(({Given, When, Then}) => {

  Given(/^a person knows a number who's value is (.*)$/, function(number, done){
    const numberAsIntiger = parseInt(number, 10);
    expect(numberAsIntiger).to.be.a('number');
    
    // Add the number to the collection of numbers we want to remember
    this.numbers.push(numberAsIntiger);
    done();
  });
  
  Given(/^a person adds the numbers together$/, function(done){
    
    // This is a function that adds two numbers
    const add = (a, b) =>  a + b;
    
    // This gets the sum of all the numbers in the collection of numbers we remembered
    this.total = this.numbers.reduce(add, 0);
    
    done();
  });
  
  Given(/^the total should be (.*)$/, function(total, done){
    const totalAsIntiger = parseInt(total, 10);
    expect(this.total).to.equal(totalAsIntiger);
    done();
  });
  
});