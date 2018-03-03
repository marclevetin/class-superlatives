const Superlative = require('../models/Superlative');
const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
const expect = require("chai").expect;

describe("Database - Superlative", function() {
  describe('#save()', function() {
    it('should save without error with minimum information', function(done) {
      const newSuperlative = new Superlative({
        person: 'person',
        words: 'most likely to',
      });

      newSuperlative.save(function(err) {
        if (err) done(err);
        else done();
      });
      done();
    });

    it('should save without error with all information', function(done) {
      const newSuperlative = new Superlative({
        person: 'person',
        words: 'most likely to',
        count: 1
      });

      newSuperlative.save(function(err) {
        if (err) done(err);
        else done();
      });
      done();
    });
  })

  describe('#validations', function() {
    it('Field types are correct', function(done) {
      const newSuperlative = new Superlative({
        person: 'string',
        words: 'string',
        count: 1
      });

      newSuperlative.validate(function(err) {
        expect(err).to.equal(null)
        done();
      });

    });

    it('Check required fields', function(done) {
      const newSuperlative = new Superlative({});

      newSuperlative.validate(function(err) {
        expect(err.errors.person).to.exist;
        expect(err.errors.person.message).to.equal('Person is required');
        expect(err.errors.words).to.exist;
        expect(err.errors.words.message).to.equal('Words are required');
        done();
      });
    });

  });
});
