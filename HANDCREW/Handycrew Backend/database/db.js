const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hamzadb', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        .then(()=>console.log("Database Connected"))
        .catch((err)=>console.log(err));

module.exports = mongoose;