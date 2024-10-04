// Updated time in Lisbon
function displayLisbon() {
  let LisbonElement = document.querySelector("#lisbon");
  if (LisbonElement) {
    let LisbonDateElement = LisbonElement.querySelector(".date");
    let LisbonTimeElement = LisbonElement.querySelector(".time");
    LisbonDateElement.innerHTML = moment
      .tz("Europe/Lisbon")
      .format("dddd, MMMM Do YYYY");
    LisbonTimeElement.innerHTML = moment.tz("Europe/Lisbon").format("HH:mm:ss");
  }
}

displayLisbon();
setInterval(displayLisbon, 1000);

// Updated time in New York
function displayNewYork() {
  let NewYorkElement = document.querySelector("#newyork");
  if (NewYorkElement) {
    let NewYorkDateElement = NewYorkElement.querySelector(".date");
    let NewYorkTimeElement = NewYorkElement.querySelector(".time");
    NewYorkDateElement.innerHTML = moment
      .tz("America/New_York")
      .format("dddd, MMMM Do YYYY");
    NewYorkTimeElement.innerHTML = moment
      .tz("America/New_York")
      .format("HH:mm:ss");
  }
}

displayNewYork();
setInterval(displayNewYork, 1000);

// Updated time in Sydney
function displaySydney() {
  let SydneyElement = document.querySelector("#sydney");
  if (SydneyElement) {
    let SydneyDateElement = SydneyElement.querySelector(".date");
    let SydneyTimeElement = SydneyElement.querySelector(".time");
    SydneyDateElement.innerHTML = moment
      .tz("Australia/Sydney")
      .format("dddd, MMMM Do YYYY");
    SydneyTimeElement.innerHTML = moment
      .tz("Australia/Sydney")
      .format("HH:mm:ss");
  }
}

displaySydney();
setInterval(displaySydney, 1000);

// Updated time in Buenos Aires
function displayBuenosAires() {
  let BuenosAiresElement = document.querySelector("#buenosaires");
  if (BuenosAiresElement) {
    let BuenosAiresDateElement = BuenosAiresElement.querySelector(".date");
    let BuenosAiresTimeElement = BuenosAiresElement.querySelector(".time");
    BuenosAiresDateElement.innerHTML = moment
      .tz("America/Argentina/Buenos_Aires")
      .format("dddd, MMMM Do YYYY");
    BuenosAiresTimeElement.innerHTML = moment
      .tz("America/Argentina/Buenos_Aires")
      .format("HH:mm:ss");
  }
}

displayBuenosAires();
setInterval(displayBuenosAires, 1000);

// Update time and date once a new location is selected
function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector(".cities");

  // Create a new city element that will display the time
  citiesElement.innerHTML = `
     <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;

  // Clear any existing intervals for the cities
  clearInterval(window.updateInterval);

  // Update the time for the new city, every second
  window.updateInterval = setInterval(() => {
    let timeElement = citiesElement.querySelector(".time");
    timeElement.innerHTML = moment().tz(cityTimeZone).format("HH:mm:ss");
  }, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
