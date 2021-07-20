const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const logger = require('./middleware/logger')
const members = require('./Members')

const app = express()
const PORT = process.env.PORT || 5000

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')))

// Init middleware
// app.use(logger)

// Handlebars Middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Homepage
app.get('/', (req, res) => res.render('home', {
  title: 'Member App',
  members
}))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))