let program = require('commander')

program
	.commander( 'avengers')
	.action() => {
	console.log('avengers')
	marvel.characters.findAll()
  	.then(console.log)
 	 .fail(console.error)
 	 .done();
	})

program.parse(process.argv)

if(!program.args.length) {
	program.help()
}


