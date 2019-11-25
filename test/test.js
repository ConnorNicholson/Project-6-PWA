// Chai is an assertion library. It provides multiple assertions that can be used for unit testing
const expect = require('chai').expect;
// The request module allows an easy way to make HTTP calls
const request = require('request');


// Test #1 - requests the products endpoint and expects the Status Code to equal 200, meaning 'OK'.
it('should return a status code of 200', function(done) {
    request('http://localhost:3001/api/products', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
});

// Test #2 - requests the contacts endpoint and expects the response to be an object.
it('should return an object', function(done) {
    request ('http://localhost:3001/api/contacts', function(err, res, body) {
        expect(res).to.be.a('object');
        done();
    });
});

// Test #3 - requests the productprice/lowprice endpoint and expects the error parameter to return 'null'.
it('should be null', function(done) {
    request ('http://localhost:3001/api/productprice/lowprice', function(err, res, body) {
        expect(err).to.be.a('null');
        done();
    });
});

// Test #4 - requests the productfilter/telescopes endpoint and expects the body to not be an array.
it('should not be a array', function(done) {
    request ('http://localhost:3001/api/productfilter/telescopes', function(err, res, body) {
        expect(body).to.not.be.a('array');
        done();
    });
});