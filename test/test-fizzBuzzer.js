const should= require('chai').should();
const fizzBuzzer= require('../fizzBuzzer');

// "describe" is used to declare the entity to be tested, and a callback function that sets up the tests
describe('fizzBuzzer', function() {
    it('should divide two numbers and have no remainder', function(){
  
    const normalCases=[
        
        {a:15, b:5, expected:'buzz'},
        {a:15, b:3, expected:'fizz'},
        {a: 15, b:15, expected:'fizz-buzz'}
    ];

        normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a, input.b);
        answer.should.equal(input.expected);
      });
        });   
    }
    // indicate the behavior to be tested
    // typically the "it" statement will also include a callback that provides the test
   
);