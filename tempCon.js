function convertingToCels() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
      var celsius = (fahrenheit - 32) * 5 / 9;
      document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
      alert("Invalid input. Please enter a valid temperature in Fahrenheit.");
    }
  }

  function convertingToFahren() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
      var fahrenheit = celsius * 9 / 5 + 32;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
      alert("Invalid input. Please enter a valid temperature in Celsius.");
    }
  }