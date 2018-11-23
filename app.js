const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const Routes = require('./src/routes/route.js')
app.use('/', Routes)


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

https://arcane-brook-34722.herokuapp.com/
https://git.heroku.com/arcane-brook-34722.git