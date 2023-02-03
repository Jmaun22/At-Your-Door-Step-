const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Jesse:jesse@cluster0.6fve9.mongodb.net/test', {

  useNewUrlParser: true,
  useUnifiedTopology: true,

});

module.exports = mongoose.connection;
