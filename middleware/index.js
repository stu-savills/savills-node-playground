const morgan = require('morgan');

function addMiddlewares(app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
}

module.exports = addMiddlewares;
