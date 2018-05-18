const
  express = require('express'),
  app = express(),
  ejsLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')


// Environment port(online)
const
port = process.env.PORT || 3000,
mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/robertsite'

// Mongoose Connection
mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || "Connected to MongoDB!🐲")
})

// Middleware
app.use(logger('dev'))
app.use(bodyParser.json())

// ejs Configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static(`${__dirname}/public`))


// Root route
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/product', (req, res) => {
  res.render('product')
})

// Port
app.listen(port,(err) => {
  console.log(err || "Server runing on port " + port + "!🐉")
})