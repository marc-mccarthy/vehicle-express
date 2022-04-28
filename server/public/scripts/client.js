$(document).ready(onReady);

function onReady() {
  $('#addTrainButton').on('click', addTrain);
  $('#addPlaneButton').on('click', addPlane);
  $('#addAutomobileButton').on('click', addAutomobile);
}

function addTrain() {
  let newTrain = {
    name: $('#trainNameIn').val(),
    color: $('#trainColorIn').val()
  }
  $.ajax({
    method: 'POST',
    url: '/trains',
    data: newTrain,
  }).then((response) => {
    getTrainsInfo();
  }).catch((error) => {
    console.log(error);
    alert(`Error adding Train`);
  })
}

function getTrainsInfo() {
  $.ajax({
    method: 'GET',
    url: '/trains',
  }).then((response) => {
    let el = $('#trainsOut');
    el.empty();
    for(let i = 0; i < response.length; i++) {
      el.append(`<li>${response[i].name} is ${response[i].color}</li>`);
    }
  }).catch((error) => {
    alert(`Error getting Trains`);
  });
}

function addPlane() {
  let newPlane = {
    name: $('#planeNameIn').val(),
    color: $('#planeColorIn').val(),
  }
  $.ajax({
    method: 'POST',
    url: '/planes',
    data: newPlane,
  }).then((response) => {
    getPlanesInfo();
  }).catch((error) => {
    alert(`Error adding Plane!`);
  })
}

function getPlanesInfo() {
  $.ajax({
    method: 'GET',
    url: '/planes',
  }).then((response) => {
    let el = $('#planesOut');
    el.empty();
    for(let i = 0; i < response.length; i++) {
      el.append(`<li>${response[i].name} is ${response[i].color}</li>`);
    }
  }).catch((error) => {
    alert(`Error getting Planes`);
  });
}

function addAutomobile() {
  let newAutomobile = {
    name: $('#automobileNameIn').val(),
    color: $('#automobileColorIn').val()
  }
  $.ajax({
    method: 'POST',
    url: '/automobiles',
    data: newAutomobile
  }).then((response) => {
    console.log(response)
    getAutomobilesInfo() 
  }).catch((error) => {
    alert(`Error adding Automobile!`);
  })
}

function getAutomobilesInfo() {
  $.ajax({
    method: 'GET',
    url: '/automobiles'
  }).then((response) => {
    console.log(response, + 'me')
    let el = $('#automobilesOut');
    el.empty();
    for(let i = 0; i < response.length; i++) {
      el.append(`<li>${response[i].name} is ${response[i].color}</li>`);
    }
  }).catch((error) => {
    alert(`Error getting Automobiles`);
  });
}