const mongoose = require('mongoose')
const mongo_url = process.env.MONGO_CONN

mongoose.connect(mongo_url)
  .then(() => {
  console.log('MongoDB are connected . ..')
  }).catch((err) => {
  console.log('MongoDB connection error please check', err)
  })
