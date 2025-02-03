const express = require('express')
const { signUp, signIn } = require('../Controllers/Person')
const  {VerifSignUp, Validation, VerifSignIn} =require('../Middlewares/VerifMid') 
const { IsAuth } = require('../Middlewares/IsAth')

const personRouter = express.Router()

personRouter.post('/signUp', VerifSignUp, Validation ,signUp )

personRouter.post('/signIn', VerifSignIn, Validation, signIn)

personRouter.get('/getCurrentUser', IsAuth, (req,res)=> res.send(req.user))





module.exports = personRouter