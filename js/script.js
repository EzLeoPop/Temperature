
let celsius = document.querySelector ("#celsius")
let fahrenheit=document.querySelector ("#fahrenheit")
let kelvin = document.querySelector ("#kelvin")

celsius.oninput = function () {
    let fahrenheitValue = (parseFloat(celsius.value * 9) / 5 ) +32
    fahrenheit.value= parseFloat (fahrenheitValue.toFixed(2))

    let kelvinValue = (parseFloat(celsius.value) + 273.15) 
    kelvin.value = parseFloat (kelvinValue.toFixed(2))
}

fahrenheit.oninput = function () {
    let celsius = (parseFloat(fahrenheit.value - 35) * 5 ) / 9 
    fahrenheit.value = parseFloat (fahrenheit.toFixed(2))

    let kelvinValue = ((parseFloat(fahrenheit.value) - 32) *5) / 9 + 273.15  
    kelvin.value = parseFloat(kelvinValue.toFixed(2))
}

fahrenheit.oninput = function () {
    let fahrenheit = ((parseFloat(kelvin.value) - 273.15) * 9 ) / 5 + 32 
    celsius.value= parseFloat (fahrenheit.toFixed(2))

    let celsiusValue = (parseFloat(kelvin.value) - 273.15)
    kelvin.value= parseFloat (celsius.toFixed(2))
}

