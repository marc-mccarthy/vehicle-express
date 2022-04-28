const express = require('express');
const moment = require('moment');
const router = express.Router();

const planes = [
  { name: 'Fighter Jet', color: 'Blue' },
  { name: 'Passenger', color: 'Blue' },
  { name: 'UFO', color: 'Green' },
  { name: 'Bomber', color: 'Red' }
];

router.post(`/`, (req, res)=>{
  console.log(req.body);
  planes.push(req.body);
  res.sendStatus(200);
})

router.get(`/`, (req, res)=>{
  res.send(planes);
});

router.get(`/planes`, (req, res) => {
    res.send(planes);
});

router.get(`/first-plane`, (req, res) => {
    res.send(planes.shift());
});

router.get(`/last-plane`, (req, res) => {
    res.send(planes.pop());
});

router.get(`/count-plane`, (req, res) => {
    res.send({totalCount: planes.length});
});

router.get(`/random-plane`, (req, res) => {
    res.send(planes[Math.floor(Math.random() * planes.length)]);
});

router.get(`/next-plane`, (req, res) => {
    let fromTen = 10 - (moment().minute() % 10);
    let nextPlaneArrival = moment().add(fromTen, 'minutes').format(`LT`);
    res.send(`The next automobile will arrive at ${nextPlaneArrival}`);
});

module.exports = router;