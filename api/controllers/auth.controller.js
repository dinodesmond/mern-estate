const errorHandler = require("../utils/error");
const modelUser = require("../models/model.user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async(req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new modelUser({username, email, password: hashedPassword});
    try {
    await newUser.save();
    res.status(201).json({message: 'User created successfully!'});
    } catch (error) {
    next(error);
}
};

const signin = async (req, res) => {
    const{email, password} = req.body;

    try {
        const validUser =  await modelUser.findOne({email});
        if(!validUser) return next(errorHandler(404, 'Email not found!'))
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404, 'Wrong credentials!'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: passkey, ...userInfo} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(userInfo);
    } catch (error) {
        next(error);
    }
};

module.exports = {signup, signin};