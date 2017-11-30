let api = require('marvel-api');
 
let marvel = api.createClient({
	publicKey: 'd0f799f9821d97611264ea2c614e0c0c' 
	,privateKey: '3322e9ebb79a3b84b986898319ce105b983e8dc7'
})

marvel.characters.findAll(function(err, results) {
  if (err) {
    return console.error(err);
  }
 
  console.log(results);
});
