const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parse')
const cors = require('cors')

const app = express

app.use(bodyParse.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('*', (req, res) => {
  res.send('Hpoooolaaaa hijo de puta')
})

module.exports = app