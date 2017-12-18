
const fizzBuzzer= require('../fizzBuzzer');
const expect= require('chai').expect;

// "describe" is used to declare the entity to be tested, and a callback function that sets up the tests

describe('fizzBuzzer', function() {
    it('should return fizz if divisible by 3', function(){
		expect(fizzBuzzer(3)).to.equal('fizz');
	});

	it('should return buzz if / by 5', function(){
        expect(fizzBuzzer(5)).to.equal('buzz');
    })

	it('should be return fizz-buzz if / by 15', function(){
        expect(fizzBuzzer(15)).to.equal('fizz-buzz');
    });


});
    // indicate the behavior to be tested
    // typically the "it" statement will also include a callback that provides the test
   


// describe('#fizzbuzz', function() {
//     it('should returns fizz if its divisible by 5', function() {
//      expectedValue.forEach(function(item) {
//        expect(fizzbuzz(item.num)).to.equal(item.result);
//      });
//     });
//     it('should returns fizz if its divisible by 3', function() {
//       expect(fizbuzz(3)).to.equal('buzz')
//     });
//       it('should returns fizz if its divisible by 15', function() {
//       expect(fizbuzz(3)).to.equal('buzz')
//     });
//   });