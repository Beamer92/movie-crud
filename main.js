const db = require('./db')

db('courses')
.then((data) => {
  console.log(data)
}).catch(() => {
  console.log(`ERROR! Connection not found!`)
}).finally(db.destroy)