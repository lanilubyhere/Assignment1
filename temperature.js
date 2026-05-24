function convertTemp() {

    let temp =
        parseFloat(document.getElementById("tempInput").value);

    let type =
        document.getElementById("tempType").value;

    let result =
        document.getElementById("tempResult");

    if(type == "c") {

        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;

        result.innerHTML =
            "Fahrenheit: " + f.toFixed(2) +
            "<br>Kelvin: " + k.toFixed(2);
    }

    if(type == "f") {

        let c = (temp - 32) * 5/9;
        let k = c + 273.15;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) +
            "<br>Kelvin: " + k.toFixed(2);
    }

    if(type == "k") {

        let c = temp - 273.15;
        let f = (c * 9/5) + 32;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) +
            "<br>Fahrenheit: " + f.toFixed(2);
    }
}