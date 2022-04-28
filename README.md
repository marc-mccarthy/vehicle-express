# the-express-express

## Objectives

- Practice setting up an Express web server
- Configure Express to serve static files
- Configure GET routes to send back data

## Part 1

Do all of your javascript work in one file (`server.js`). No need to break things out into other files yet.

- Add a `.gitignore` file that ignores will not commit your `/node_modules` folder
- Bring `express` into your project using npm (see comments at top of server.js for help)
- Your application should run on `localhost:5000`
- the route `/` should return the `index.html` file that says `Welcome to the Express Express`
- The `index.html` file should load a CSS file, which changes the background color of the page
- The `index.html` file should load a `jquery.js` and `client.js` file, which logs `"I'm ready"` on `$(document).ready()`.

## Part 2

- `localhost:5000/train` should return the list of all trains
- `localhost:5000/first-train` should return the first train object in the array
- `localhost:5000/last-train` should return the last train object in the array

## Stretch

- `localhost:5000/count` should return the number of trains in the array
- `localhost:5000/random` should return a random train every time the route is visited
- Move the list of trains into `modules/trains.js`
- Moment is a common javascript module used for time. `npm install moment` and use it to show the time of the next train. Trains run every ten minutes starting at the top of the hour. So visiting `localhost:5000/next` at 2:35pm should should `2:40pm` as the result.
