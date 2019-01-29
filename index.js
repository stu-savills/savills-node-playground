const express = require('express');
const middleware = require('./middleware');

const app = express();
const PORT = process.env.PORT || 8282;

middleware(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`something went wrong connecting to ${PORT}`);
    return;
  }

  console.log(`app running on port ${PORT}`);
});
