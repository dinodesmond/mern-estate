const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();  
const router = require('./routes/user.route')
const authRouter = require('./routes/auth.route')

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to Database!');
}).catch((err) =>{
    console.log(err)
});

const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running at port 3000...');
})