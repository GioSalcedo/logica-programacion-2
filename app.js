let valuesInput = document.getElementById("valuesInput");

let printFahrenheit = document.getElementById("resultsFahrenheit");
let printKelvin = document.getElementById("resultsKelvin");

let alert = document.getElementById("alert")

valuesInput.addEventListener('input', () => {
  let values = valuesInput.value;
  convertTemperature(values);
});

function convertTemperature(temperature) {
  if (!isNaN(temperature) && temperature.trim() !== "") {
    let temperatureFahrenheit = (parseFloat(temperature) * 9 / 5) + 32;
    let temperatureKelvin = parseFloat(temperature) + 273.15;

    printFahrenheit.textContent = `Temperatura en grados Fahrenheit: ${temperatureFahrenheit.toFixed(2)}`;
    printKelvin.textContent = `Temperatura en Kelvin: ${temperatureKelvin.toFixed(2)}`;
    alert.classList.add("d-none");
  } else {
    alert.classList.remove("d-none");
    valuesInput.value = "";
  }
}