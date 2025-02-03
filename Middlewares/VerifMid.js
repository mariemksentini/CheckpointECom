const { body ,validationResult } = require('express-validator');

exports.VerifSignUp = [
    body('age', 'Should be more than 18').isInt({min : 18}),
    body('email', 'Is not an email').isEmail(),
    body('password', 'You password must contain at least 8 characters').isLength({min : 8})
]

exports.VerifSignIn= [
    body('email','Is not an email').isEmail(),
    body('password', 'You password must contain at least 8 characters').isLength({min : 8})
]

exports.Validation = (req,res,next)=>{
    const result = validationResult(req)
    if (!result.isEmpty()) {
        return res.status(400).send(result)
    }
    next()
}