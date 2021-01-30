const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//middleware
app.use(express.json({extended: true}));

const PORT = process.env.PORT || 3000;



app.use('/api/users/', require('./src/Users/routes'));

app.listen(PORT, ()=> console.log('Server Running'));