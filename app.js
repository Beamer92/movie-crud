const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const Routes = require('./src/routes/route.js')
app.use('/', Routes)

return axios(`http://localhost:3000${path}`, {
  method: method,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data: body
})

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

if (process.env.NODE_ENV !== 'development') {
    const listener = () => console.log(`Spielberg is on ${port}`)
    let server = app.listen(port, listener)
}
