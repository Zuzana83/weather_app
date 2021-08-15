// Calculator variables
const tempEl = document.getElementById("temperature");
const unitSel = document.getElementById("unit");
const humEl = document.getElementById("humidity");
const resultC = document.getElementById("indexC");
const resultF = document.getElementById("indexF");
const calcBtn = document.getElementById("calc-btn");
const clearBtn = document.getElementById("clear-btn");
const resultEl = document.getElementById("result");

// Calculator part
function calculateIndex() {
    // Get values from user
    let tempValue = +tempEl.value;
    let unitValue = unitSel.options[unitSel.selectedIndex].value;
    let humValue = +humEl.value;
    
    let result;
    let index;

    // Checking what temp unit is chosen
    if(unitValue == "celsius") {
        if (tempValue >= 26.7) {
            result = celToFahr(tempValue);
        } else {
            alert("Temperature is to low to calculate.");
        }
        
        console.log(result);
    }

    else if(unitValue == "fahrenheit") {
        if (tempValue >= 80) {
            result = tempValue;
            // result = fahrToCel(tempValue);
            
        } else {
            alert("Temperature is to low to calculate.");
        }

        console.log("tempValue:", tempValue);
    } else {
        alert("Please choose your unit of temperature.")
    }

    heatIndex();

    console.log("index:", index);


    // Converting celsius to fahrenheit
    function celToFahr(celsius) {
        let fahrenheit = ((celsius * (9/5)) + 32).toFixed(1);
        return fahrenheit;
     }


    // Converting fahrenheit to celsius
    function fahrToCel(fahrenheit) {
        var celsius = ((fahrenheit - 32) * (5/9)).toFixed(1);
        return celsius;
     }

    // Calculate heat index formula
    function heatIndex() {
        const n1 = -42.379,
        n2 = 2.04901523 * result,
        n3 = 10.14333127 * humValue,
        n4 = 0.22475541 * result * humValue,
        n5 = 6.83783 * 10**-3 * result**2,
        n6 = 5.481717 * 10**-2 * humValue**2,
        n7 = 1.22874 * 10**-3 * result**2 * humValue,
        n8 = 8.5282 * 10**-4 * result * humValue**2,
        n9 = 1.99 * 10**-6 * result**2 * humValue**2

    index = +(n1 + n2 + n3 - n4 - n5 - n6 + n7 + n8 - n9).toFixed(1);
}

    let indexC = fahrToCel(index);

    resultF.value = `${index} °F`;
    resultC.value = `${indexC} °C`;

    //  console.log(tempValue, unitValue, humValue);
    //  console.log(typeof tempValue);
}


// Clear inputs
function clearInputs() {
    tempEl.value = "";
    humEl.value = "";
    resultC.value = "";
    resultF.value = "";
}

// Event Listeners
clearBtn.addEventListener("click", clearInputs);
calcBtn.addEventListener("click", calculateIndex);
