const Park = function (name, ticketPrice, visitors) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
    this.species = []
    this.visitors = visitors
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.addSpecies = function (species) {
    this.species.push(species);
}

Park.prototype.getSpecies = function (nameOfSpecie) {
    const dinos = [];
    for (specie of this.species) {
        if (specie.specieName === nameOfSpecie) {
            dinos.push(specie.dinoName)
        }
    return dinos;
    }
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.favouriteDinosaur = function () {
    for (dino of this.dinosaurs) {
        if(dino === 'Trex') {
            return dino;
        }
    }
}

Park.prototype.dinospeciesSpecies = function () {
    for (specie of this.species) {
        if(specie === 'Tyrannosaurus') {
            return specie;
        }
    }
}

module.exports = Park;