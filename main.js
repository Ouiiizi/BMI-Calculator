function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var heightFt = parseFloat(document.getElementById("heightFt").value);
    var heightIn = parseFloat(document.getElementById("heightIn").value);
    var weightUnit = document.getElementById("weightUnit").value;
    var heightUnit = document.getElementById("heightUnit").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Convert weight to kg if unit is lbs
    if (weightUnit === "lbs") {
        weight *= 0.453592; // 1 lb = 0.453592 kg
    }
    // Convert height to meters
    var height;
    if (heightUnit === "m") {
        height = heightFt * 0.3048 + heightIn * 0.0254; // Convert feet and inches to meters
    } else if (heightUnit === "cm") {
        height = heightFt * 30.48 + heightIn * 2.54; // Convert feet and inches to centimeters
        height /= 100; // Convert centimeters to meters
    } else if (heightUnit === "ft") {
        height = heightFt * 0.3048 + heightIn * 0.0254; // Convert feet and inches to meters
    }

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // Round to 1 decimal place

    var result = "Your BMI is " + bmi + ". ";

    if (gender == "male") {
        // BMI categories for males
        if (bmi < 18.5) {
            result += "You are underweight.";
            displayHealthyWeight(height, weight, gender);
        } else if (bmi >= 18.5 && bmi < 25) {
            result += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 30) {
            result += "You are overweight.";
            displayHealthyWeight(height, weight, gender);
        } else {
            result += "You are obese.";
            displayHealthyWeight(height, weight, gender);
        }
    } else if (gender == "female") {
        // BMI categories for females
        if (bmi < 18.5) {
            result += "You are underweight.";
            displayHealthyWeight(height, weight, gender);
        } else if (bmi >= 18.5 && bmi < 24) {
            result += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 30) {
            result += "You are overweight.";
            displayHealthyWeight(height, weight, gender);
        } else if (bmi >= 30) {
            result += "You are obese.";
            displayHealthyWeight(height, weight, gender);
        }
    }

    document.getElementById("result").innerText = result;
}

function displayHealthyWeight(height, weight, gender) {
    var healthyBMI;

    if (gender === "male") {
        healthyBMI = 24.9; // Maximum BMI for normal weight in males
    } else if (gender === "female") {
        healthyBMI = 23.9; // Maximum BMI for normal weight in females
    }

    var healthyWeightKg = (healthyBMI * (height * height)).toFixed(1);
    var healthyWeightLbs = (healthyWeightKg * 2.20462).toFixed(1); // Convert kg to lbs

    var result = "To achieve a healthy BMI, you should aim for a weight of approximately " + healthyWeightKg + " kg or " + healthyWeightLbs + " lbs.";

    // Clear previous message
    document.getElementById("healthyWeight").innerText = "";

    // Display new result
    document.getElementById("healthyWeight").innerText = result;
}

function toggleHeightInputs() {
    var heightUnit = document.getElementById("heightUnit").value;
    if (heightUnit === "ft") {
        document.getElementById("heightIn").style.display = "inline-block";
    } else {
        document.getElementById("heightIn").style.display = "none";
    }
}
