const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://shatwar55:dream2020@cluster0.p2zrhab.mongodb.net/?retryWrites=true&w=majority').then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  
