const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;

describe('Park', function() {
  beforeEach(function () {
    park = new Park('Jurrasic', 3, 80);
  });
  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 3);
  });
describe('dinosaurs', function () {

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur('Trex');
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur('Trex');
    park.addDinosaur('Turkey');
    park.removeDinosaur('Turkey');
    const expected = ['Trex']
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur('Trex');
    park.addDinosaur('Turkey');
    const actual = park.favouriteDinosaur();
    const expected = 'Trex';
    assert.deepStrictEqual(actual, expected);
  });
  // it('should be able to find all dinosaurs of a particular species', function(){
  //   park.dinosaurSpecies({'Tyrannosaurus': 'Trex'});
  //   park.dinosaurSpecies({'Turkey' : 'Saurischian'});
  //   const actual = park.dinosaurSpecies();
  //   const expected = {'Trex' : 'Tyrannosaurus'};
  //   assert.deepStrictEqual(actual, expected);

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addSpecies({'specieName': 'Tyrannosaurus', 'dinoName': 'Trex'});
    park.addSpecies({'specieName':'saurischian', 'dinoName': 'Turkey'});
    const actual = park.getSpecies('Tyrannosaurus');
    const expected = ['Trex'];
    assert.deepStrictEqual(actual, expected);
  });
})
describe('visitors', function () {
  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.visitors;
    assert.strictEqual(actual, 80);   
  });

})

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
