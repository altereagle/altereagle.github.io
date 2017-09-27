// Testing World Globals
// ---------------------
const {defineSupportCode: cucumber} = require(`cucumber`);

cucumber(({setWorldConstructor}) => {
  // Whats this?
  // -----------
  // All of the stuff in the world constructor is available
  // to all the step definitions throughout the test.
  
  setWorldConstructor(function(){
    // A place to remember numbers
    // ---------------------------
    this.numbers = [];
    
    // A place to remember totals
    // --------------------------
    this.total = 0;
    
  });
});