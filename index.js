var jsonfile = require('jsonfile');

module.exports = jsonfile.readFileSync(__dirname + '/data/srd-monsters.json');
