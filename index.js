const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
require('dotenv').config();

const port = process.env.port || 9010;

const app = express();
const config = {
  API_KEY: process.env.API_KEY,
  SERVER_SECRET: process.env.SERVER_SECRET,
  IS_KALVIAN: process.env.IS_KALVIAN === 'true',
};

module.exports = config;

console.log(config);



app.use(cors());
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
