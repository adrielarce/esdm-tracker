const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const movieRouter = require('./routes/movie-router')
const programRouter = require('./routes/program-router')
const sessionsRouter = require('./routes/sessions-router')
const passport = require("passport");
const users = require("./routes/user");

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)
app.use('/program', programRouter)
app.use('/sessions', sessionsRouter)

// Passport middleware
//app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);
// Routes
//app.use("/api/users", users);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))