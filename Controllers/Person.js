const  bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Person = require('../Models/Person')

exports.signUp = async(req,res)=>{
    try {
        const {email, password} = req.body

        //verify existance
        const found = await Person.findOne({email})
        if (found){
            res.status(400).send({errors : [{msg : 'Email already exists'}]})
        }
        const contactNew = new Person(req.body)

        //crypt password
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        contactNew.password = hashedPassword

        await contactNew.save()

        //token 
        const payload = {id : contactNew._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        res.status(200).send({msg : 'around created', contactNew, token} )

    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not sign up'}]})
    }
}

exports.signIn = async(req,res)=>{
    try {
        const {email, password} = req.body

        //verify if it exists 
        const found = await Person.findOne({email})
        if (!found) {
            return res.status(400).send({errors : [{msg : 'Email does not exist'}]})
        }

        //check password
        const matched = bcrypt.compareSync(password, found.password);
        if (!matched) {
            return res.status(400).send({errors : [{msg : 'wrong password'}]})
        }

        //token
        const payload = { id:  found._id}
        var token = jwt.sign( payload, process.env.privateKey,{ expiresIn: '1h' });

        res.status(200).send({msg : 'Logged In', found, token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not sign in'}]})
    }
}

exports.getOnePerson = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not get person'}]})
    }
}