const express = require('express');
const moment = require('moment');
const router = express.Router();

const automobiles = [
  { name: 'Car', color: 'Blue' },
  { name: 'Truck', color: 'Blue' },
  { name: 'Motorcycle', color: 'Green' },
  { name: 'Slingshot', color: 'Red' }
];

router.post(`/`, (req, res)=>{
  console.log(req.body);
  automobiles.push(req.body);
  res.sendStatus(200);
})

router.get(`/`, (req, res) => {
    res.send(automobiles);
});

router.get(`/first-automobile`, (req, res) => {
    res.send(automobiles.shift());
});

router.get(`/last-automobile`, (req, res) => {
    res.send(automobiles.pop());
});

router.get(`/count-automobile`, (req, res) => {
    res.send({totalCount: automobiles.length});
});

router.get(`/random-automobile`, (req, res) => {
    res.send(automobiles[Math.floor(Math.random() * automobiles.length)]);
});

router.get(`/next-automobile`, (req, res) => {
    let fromTen = 10 - (moment().minute() % 10);
    let nextAutomobileArrival = moment().add(fromTen, 'minutes').format(`LT`);
    res.send(`The next automobile will arrive at ${nextAutomobileArrival}`);
});

module.exports = router;