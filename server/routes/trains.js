const express = require('express');
const moment = require('moment');
const router = express.Router();

const trains = [
  { name: 'Locomotive', color: 'Blue' },
  { name: 'Boxcar', color: 'Blue' },
  { name: 'Gondola', color: 'Green' },
  { name: 'Caboose', color: 'Red' }
];

router.post(`/`, (req, res)=>{
  console.log(req.body);
  trains.push(req.body);
  res.sendStatus(200);
})

router.get(`/`, (req, res)=>{
  res.send(trains);
});

router.get(`/train`, (req, res) => {
    res.send(trains);
});

router.get(`/first-train`, (req, res) => {
    res.send(trains.shift());
});

router.get(`/last-train`, (req, res) => {
    res.send(trains.pop());
});

router.get(`/count`, (req, res) => {
    res.send({totalCount: trains.length});
});

router.get(`/random`, (req, res) => {
    res.send(trains[Math.floor(Math.random() * trains.length)]);
});

router.get(`/next`, (req, res) => {
    let fromTen = 10 - (moment().minute() % 10);
    let nextTrainArrival = moment().add(fromTen, 'minutes').format(`LT`);
    res.send(`The next train will arrive at ${nextTrainArrival}`);
});

module.exports = router;