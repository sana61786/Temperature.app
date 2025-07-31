var temp = prompt("Enter the temperature in °C:")

if (temp <= 5) {
    alert("It's Freezing 🥶")
    document.write("<h1 class= 'head1'>Weather: Freezing🥶 </h1>")
} else if (temp <= 15) {
    alert("It's Very Cold ❄️")
    document.write("<h1 class= 'head1'>Weather:Cold❄️ </h1>")
} else if (temp <= 20) {
    alert("It's Cloudy🌥️")
    document.write("<h1 class= 'head1'>Weather: Cloudy 🌥️</h1>")
} else if (temp <= 30) {
    alert("It'sunny ☀️")
    document.write("<h1 class= 'head1'>Weather: sunny ☀️</h1>")
}else if (temp <= 40) {
    alert("It's Hot 🔥")
    document.write("<h1 class= 'head1'>Weather: Hot 🔥</h1>")
} else {
    alert("It's Extremely Hot 🌡️")
    document.write("<h1 class= 'head1'>Weather: Extremely Hot 🌡️</h1>");
    }