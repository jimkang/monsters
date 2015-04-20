var jsonfile = require('jsonfile');

var srdMonsters = jsonfile.readFileSync(__dirname + '/data/srd-monsters.json');
var lovecraftMonsters = jsonfile.readFileSync(__dirname + '/data/lovecraft.json');

module.exports = {
  srd: srdMonsters,
  lovecraft: lovecraftMonsters
};
