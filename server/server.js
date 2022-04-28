const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const trains = require('./routes/trains');
const planes = require('./routes/planes');
const automobiles = require('./routes/automobiles');

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/trains', trains);
app.use('/planes', planes);
app.use('/automobiles', automobiles);

const port = 5000;

app.listen(port, () => {
console.log (`Server up on ${port}`);
});