const mongoose = require('mongoose');
require('dotenv').config({path: 'vars.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('Database connect! 😎');
    } catch (error) {
        console.log(error);
        process.exit(1);// stop app
    }
}

module.exports = connectDB;