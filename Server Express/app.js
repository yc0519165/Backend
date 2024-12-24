const exprees = require('express')
const app = exprees()
const authRoute = require('./Router/AuthRote')
const bodyParser = require('body-parser')
const cors = require("cors")
require('dotenv').config()
require('./Modules/db')

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Server are start in backend")
})

app.use(bodyParser.json())
app.use(cors())
app.use("/auth",authRoute)



app.listen(PORT, () => {
  console.log(`Port will connected in ${PORT} .. . `)
})