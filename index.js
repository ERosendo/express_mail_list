require('dotenv').config();

const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const config = require('./config/config');

const { logErrors, errorHandler, ormErrorHandler } = require('./app/middlewares/error.handler');

const app = express();

const PORT = config.port
let whitelist = null
let options = null

if (config.env == 'development') {
  options = {
    origin: '*'
  }
}
else {
  whitelist = [config.deployedUrl]

  options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('no permitido'));
      }
    }
  }
}


app.use(express.json());

app.use(cors(options));

routerApi(app);

if (config.env == 'development') {
    app.use(logErrors);
}

app.use(ormErrorHandler)
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
