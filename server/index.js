const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.send('./client/dist/index.html'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

