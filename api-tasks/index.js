const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//middleware
app.use(express.json({extended: true}));

const PORT = process.env.PORT || 3000;


// routes
app.use('/api/users/', require('./src/Users/routes'));
app.use('/api/auth/', require('./src/Users/routes/auth'));
app.use('/api/projects/', require('./src/Projects/routes'));

app.listen(PORT, ()=> console.log('Server Running'));