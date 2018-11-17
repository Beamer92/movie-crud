const db = require('./db')

db('courses')
.then((data) => {
  console.log(data)
}).catch(() => {
  console.log(`ERROR! ERROR! ERROR!`)
}).finally(db.destroy)