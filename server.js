const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const personRouter = require('./Routes/Person')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/api/auth' ,personRouter)


app.listen(process.env.port,
    console.log(`Server is running on port ${process.env.port}`)
)