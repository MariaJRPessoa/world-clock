// Updated time in Lisbon
function displayLisbon() {
  let LisbonElement = document.querySelector("#lisbon");
  let LisbonDateElement = LisbonElement.querySelector(".date");
  let LisbonTimeElement = LisbonElement.querySelector(".time");
  LisbonDateElement.innerHTML = moment
    .tz("Europe/Lisbon")
    .format("dddd, MMMM Do YYYY");
  LisbonTimeElement.innerHTML = moment.tz("Europe/Lisbon").format("HH:mm:ss");
}

displayLisbon();
setInterval(displayLisbon, 1000);

// Updated time in New York
function displayNewYork() {
  let NewYorkElement = document.querySelector("#newyork");
  let NewYorkDateElement = NewYorkElement.querySelector(".date");
  let NewYorkTimeElement = NewYorkElement.querySelector(".time");
  NewYorkDateElement.innerHTML = moment
    .tz("America/New_York")
    .format("dddd, MMMM Do YYYY");
  NewYorkTimeElement.innerHTML = moment
    .tz("America/New_York")
    .format("HH:mm:ss");
}

displayNewYork();
setInterval(displayNewYork, 1000);
