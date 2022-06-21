const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://MichaelMLetanosky:rootroot@cluster0.y0eu9.mongodb.net/atyourdoorset', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
