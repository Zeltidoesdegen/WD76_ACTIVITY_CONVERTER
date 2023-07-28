const menuButton = document.querySelector(".button-media")
const nav = document.querySelector(".nav")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  // for activation of the navbar
  nav.classList.toggle("active");
  // closing of the navbar
});  

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('fromUnit');
var resultType = document.getElementById('toUnit');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
// For real-time change in keys input both input and output
inputType.addEventListener("change",myResult);
// For changing buttons input, then giving the result of the function
resultType.addEventListener("change",myResult);
// For changing result buttons output, then giving the result of the function

inputTypeValue = inputType.value;
// retrieval of value input from the given dropdown
resultTypeValue = resultType.value;
// retrieval of value output from the given dropdown


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "Meter" && resultTypeValue==="Kilometer"){
		//Meter to Kilometer formula 
		result.value = Number(input.value) * 0.001;
	}
    
    else if(inputTypeValue === "Meter" && resultTypeValue==="Centimeter"){
		//Meter to Centimeter formula 
		result.value = Number(input.value) * 100;
	}
    
    else if(inputTypeValue === "Meter" && resultTypeValue==="Meter"){
		//Meter to Meter formula 
		result.value = input.value
	}

    else if(inputTypeValue === "Meter" && resultTypeValue==="Millimeter"){
		//Meter to Millimeter formula 
		result.value = Number(input.value) * 1000;
	}

    else if(inputTypeValue === "Meter" && resultTypeValue==="Foot"){
		//Meter to Millimeter formula 
		result.value = Number(input.value) * 3.281;
	}

    else if(inputTypeValue === "Meter" && resultTypeValue==="Inch"){
		//Meter to Millimeter formula 
		result.value = Number(input.value) * 39.37;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Millimeter" && resultTypeValue==="Kilometer"){
		//Millimeter to Kilometer formula 
		result.value = Number(input.value) * 0.000001 ;
	}
    
    else if(inputTypeValue === "Millimeter" && resultTypeValue==="Centimeter"){
		//Millimeter to Centimeter formula 
		result.value = Number(input.value) * 0.1;
	}
    
    else if(inputTypeValue === "Millimeter" && resultTypeValue==="Meter"){
		//Millimeter to Meter formula 
		result.value = Number(input.value) * 0.001;
	}

    else if(inputTypeValue === "Millimeter" && resultTypeValue==="Millimeter"){
		//Millimeter to Millimeter formula 
		result.value = input.value
	}

    else if(inputTypeValue === "Millimeter" && resultTypeValue==="Foot"){
		//Millimeter to Millimeter formula 
		result.value = Number(input.value) / 304.8;
	}

    else if(inputTypeValue === "Millimeter" && resultTypeValue==="Inch"){
		//Millimeter to Millimeter formula 
		result.value = Number(input.value) / 25.4;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------


    if(inputTypeValue === "Centimeter" && resultTypeValue==="Kilometer"){
		//Centimeter to Kilometer formula 
		result.value = Number(input.value) * 0.00001 ;
	}
    
    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
		//Centimeter to Centimeter formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Meter"){
		//Centimeter to Meter formula 
		result.value = Number(input.value) * 0.01;
	}

    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Millimeter"){
		//Centimeter to Millimeter formula 
		result.value = Number(input.value) * 10;
	}

    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Foot"){
		//Centimeter to Millimeter formula 
		result.value = Number(input.value) / 30.48;
	}

    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Inch"){
		//Centimeter to Millimeter formula 
		result.value = Number(input.value) / 2.54;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Kilometer" && resultTypeValue==="Kilometer"){
		//Kilometer to Kilometer formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Kilometer" && resultTypeValue==="Centimeter"){
		//Kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}
    
    else if(inputTypeValue === "Kilometer" && resultTypeValue==="Meter"){
		//Kilometer to Meter formula 
		result.value = Number(input.value) * 1000;
	}

    else if(inputTypeValue === "Kilometer" && resultTypeValue==="Millimeter"){
		//Kilometer to Millimeter formula 
		result.value = Number(input.value) * 1000000;
	}

    else if(inputTypeValue === "Kilometer" && resultTypeValue==="Foot"){
		//Kilometer to Millimeter formula 
		result.value = Number(input.value) * 3281;
	}

    else if(inputTypeValue === "Kilometer" && resultTypeValue==="Inch"){
		//Kilometer to Millimeter formula 
		result.value = Number(input.value) * 39370;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Foot" && resultTypeValue==="Kilometer"){
		//Foot to Kilometer formula 
		result.value = Number(input.value) / 3281;
	}
    
    else if(inputTypeValue === "Foot" && resultTypeValue==="Centimeter"){
		//Foot to Centimeter formula 
		result.value = Number(input.value) * 30.48;
	}
    
    else if(inputTypeValue === "Foot" && resultTypeValue==="Meter"){
		//Foot to Meter formula 
		result.value = Number(input.value) / 3.281;
	}

    else if(inputTypeValue === "Foot" && resultTypeValue==="Millimeter"){
		//Foot to Millimeter formula 
		result.value = Number(input.value) * 304.8;
	}

    else if(inputTypeValue === "Foot" && resultTypeValue==="Foot"){
		//Foot to Millimeter formula 
		result.value = input.value;
	}

    else if(inputTypeValue === "Foot" && resultTypeValue==="Inch"){
		//Foot to Millimeter formula 
		result.value = Number(input.value) * 12;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Inch" && resultTypeValue==="Kilometer"){
		//Inch to Kilometer formula 
		result.value = Number(input.value) / 39370;
	}
    
    else if(inputTypeValue === "Inch" && resultTypeValue==="Centimeter"){
		//Inch to Centimeter formula 
		result.value = Number(input.value) * 2.54;
	}
    
    else if(inputTypeValue === "Inch" && resultTypeValue==="Meter"){
		//Inch to Meter formula 
		result.value = Number(input.value) / 39.37;
	}

    else if(inputTypeValue === "Inch" && resultTypeValue==="Millimeter"){
		//Inch to Millimeter formula 
		result.value = Number(input.value) * 25.4;
	}

    else if(inputTypeValue === "Inch" && resultTypeValue==="Foot"){
		//Inch to Millimeter formula 
		result.value = Number(input.value) / 12;
	}

    else if(inputTypeValue === "Inch" && resultTypeValue==="Inch"){
		//Inch to Millimeter formula 
		result.value = input.value;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Celcius" && resultTypeValue==="Celcius"){
		//Celcius to Celcius formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Celcius" && resultTypeValue==="Fahrenheit"){
		//Celcius to Fahrenheit formula 
		result.value = (Number(input.value) * 9/5) + 32;
	}
    
    else if(inputTypeValue === "Celcius" && resultTypeValue==="Kelvin"){
		//Celcius to Kelvin formula 
		result.value = Number(input.value) + 273.15;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------+

    if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Celcius"){
		//Fahrenheit to Celcius formula 
		result.value = (Number(input.value) -32) * 5/9;
	}
    
    else if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Fahrenheit"){
		//Fahrenheit to Fahrenheit formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Kelvin"){
		//Fahrenheit to Kelvin formula 
		result.value = (Number(input.value) -32) * 5/9 + 273.15;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------+
    
    if(inputTypeValue === "Kelvin" && resultTypeValue==="Celcius"){
		//Kelvin to Celcius formula 
		result.value = Number(input.value) - 273.15;
	}
    
    else if(inputTypeValue === "Kelvin" && resultTypeValue==="Fahrenheit"){
		//Kelvin to Fahrenheit formula 
		result.value = (Number(input.value) - 273.15) * 9/5 + 32;
	}
    
    else if(inputTypeValue === "Kelvin" && resultTypeValue==="Kelvin"){
		//Kelvin to Kelvin formula 
		result.value = input.value;
	}
}

