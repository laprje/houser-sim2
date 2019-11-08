require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller')

const app = express();

massive(CONNECTION_STRING)
  .then(databaseConnection => {
    app.set("db", databaseConnection);
  })
  .catch(err => console.log(err));

app.use(express.json());

//ENDPOINTS
app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.createHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}.`))