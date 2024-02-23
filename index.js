const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const { dbConnection } = require('./config/config');
const { MONGO_URI } = require('.config/keys');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index')

app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));