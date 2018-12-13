const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then( db => console.log('DB is connected on', URI))
    .catch(err => console.err());

module.exports = mongoose;