document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function () {
        let speed = parseFloat(document.querySelector("#input1 input").value);
        let distance = parseFloat(document.querySelector("#input2 input").value);
        let time = parseFloat(document.querySelector("#input3 input").value);
        let resultText = "";

        if (!isNaN(speed) && !isNaN(distance) && isNaN(time)) {
            time = distance / speed;
            resultText = `Calculated Time: ${time.toFixed(2)} hours`;
        } else if (!isNaN(speed) && isNaN(distance) && !isNaN(time)) {
            distance = speed * time;
            resultText = `Calculated Distance: ${distance.toFixed(2)} km`;
        } else if (isNaN(speed) && !isNaN(distance) && !isNaN(time)) {
            speed = distance / time;
            resultText = `Calculated Speed: ${speed.toFixed(2)} km/h`;
        } else {
            resultText = "Please enter exactly two values to calculate the third.";
        }

        document.getElementById("Result").innerHTML = `<p>${resultText}</p>`;
    });
});
