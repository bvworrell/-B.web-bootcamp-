let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
   constructor() {

     this.marvel = api.createClient({
       publicKey: 'd0f799f9821d97611264ea2c614e0c0c',
       privateKey: '3322e9ebb79a3b84b986898319ce105b983e8dc7'
	 })
     this.url = 'mongodb://localhost:27017/Marvel'
 }


  getData(callback) {
    let obj = {}
    let arr = []

this.marvel.characters.findByName('x-men').then((heroes) => {
      heroes['data'].forEach((hero,index) => {
        obj = {
          name: hero.name, 
          description:  hero.description,
          image:  `${hero.thumbnail.path}.${hero.thumbnail.extension}`
        }

        hero.urls.forEach((urlItem) => {
          if(urlItem.type === 'detail') {
            obj.link = urlItem.url
          }
        })

        arr.push(obj)
      })
      callback(arr)

    })
    .fail(console.error)
    .done

    return arr

  }

  insertDocuments(docs) {
    MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        let collection = db.collection('testCollection')
        collection.insertMany(docs, (err,result) => {
          console.log(result)
        })
        db.close()
      }
      else {
        console.log(err)
      }

    })
  }

}

module.exports = Marvel
