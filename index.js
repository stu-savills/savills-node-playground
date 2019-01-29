const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8282;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(PORT, (error) => {
  if (error) {
    console.log(`something went wrong connecting to ${PORT}`);
    return;
  }

  console.log(`app running on port ${PORT}`);
});
