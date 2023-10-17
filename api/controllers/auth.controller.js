const errorHandler = require("../utils/error");
const modelUser = require("../models/model.user");
const bcrypt = require('bcryptjs');

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

module.exports = signup;