const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portafolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
