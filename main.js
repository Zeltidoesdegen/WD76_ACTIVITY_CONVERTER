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
		//Meter to Foot formula 
		result.value = Number(input.value) * 3.281;
	}

    else if(inputTypeValue === "Meter" && resultTypeValue==="Inch"){
		//Meter to Inch formula 
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
    // ----------------------------------------------------
    
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

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Sq-Kilometer"){
		//Sq-Kilometer to Sq-Kilometer formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Sq-Meter"){
		//Sq-Kilometer to Sq-Meter formula 
		result.value = Number(input.value) * 1000000;
	}
    
    else if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Sq-Mile"){
		//Sq-Kilometer to Sq-Mile formula 
		result.value = Number(input.value) / 2.59;
	}

    else if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Sq-Yard"){
		//Sq-Kilometer to Sq-Yard formula 
		result.value = Number(input.value) * 1196000;
	}

    else if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Hectare"){
		//Sq-Kilometer to Hectare formula 
		result.value = Number(input.value) * 100;
	}

    else if(inputTypeValue === "Sq-Kilometer" && resultTypeValue==="Acre"){
		//Sq-Kilometer to Acre formula 
		result.value = Number(input.value) * 247.105;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Sq-Kilometer"){
		//Sq-Meter to Sq-Kilometer formula 
        result.value = Number(input.value) / 1000000;
	}
    
    else if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Sq-Meter"){
		//Sq-Meter to Sq-Meter formula 
		result.value = input.value;
	}
    
    else if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Sq-Mile"){
		//Sq-Meter to Sq-Mile formula 
		result.value = Number(input.value) / 2590000;
	}

    else if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Sq-Yard"){
		//Sq-Meter to Sq-Yard formula 
		result.value = Number(input.value) * 1.196;
	}

    else if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Hectare"){
		//Sq-Meter to Hectare formula 
		result.value = Number(input.value) / 10000;
	}

    else if(inputTypeValue === "Sq-Meter" && resultTypeValue==="Acre"){
		//Sq-Meter to Acre formula 
		result.value = Number(input.value) / 4047;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Sq-Kilometer"){
		//Sq-Mile to Sq-Kilometer formula 
        result.value = Number(input.value) * 2.59;
	}
    
    else if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Sq-Meter"){
		//Sq-Mile to Sq-Meter formula 
		result.value = Number(input.value) * 2590000;
	}
    
    else if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Sq-Mile"){
		//Sq-Mile to Sq-Mile formula 
		result.value = input.value;
	}

    else if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Sq-Yard"){
		//Sq-Mile to Sq-Yard formula 
		result.value = Number(input.value) * 3098000;
	}

    else if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Hectare"){
		//Sq-Mile to Hectare formula 
		result.value = Number(input.value) * 259;
	}

    else if(inputTypeValue === "Sq-Mile" && resultTypeValue==="Acre"){
		//Sq-Mile to Acre formula 
		result.value = Number(input.value) * 640;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Sq-Kilometer"){
		//Sq-Yard to Sq-Kilometer formula 
        result.value = Number(input.value) / 1196000;
	}
    
    else if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Sq-Meter"){
		//Sq-Yard to Sq-Meter formula 
		result.value = Number(input.value) / 1.196;
	}
    
    else if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Sq-Mile"){
		//Sq-Yard to Sq-Mile formula 
		result.value = Number(input.value) / 3098000;
	}

    else if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Sq-Yard"){
		//Sq-Yard to Sq-Yard formula 
		result.value = input.value;
	}

    else if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Hectare"){
		//Sq-Yard to Hectare formula 
		result.value = Number(input.value) / 11960;
	}

    else if(inputTypeValue === "Sq-Yard" && resultTypeValue==="Acre"){
		//Sq-Yard to Acre formula 
		result.value = Number(input.value) /4840;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Hectare" && resultTypeValue==="Sq-Kilometer"){
		//Hectare to Sq-Kilometer formula 
        result.value = Number(input.value) / 100;
	}
    
    else if(inputTypeValue === "Hectare" && resultTypeValue==="Sq-Meter"){
		//Hectare to Sq-Meter formula 
		result.value = Number(input.value) * 10000;
	}
    
    else if(inputTypeValue === "Hectare" && resultTypeValue==="Sq-Mile"){
		//Hectare to Sq-Mile formula 
		result.value = Number(input.value) / 259;
	}

    else if(inputTypeValue === "Hectare" && resultTypeValue==="Sq-Yard"){
		//Hectare to Sq-Yard formula 
		result.value = Number(input.value) * 11960;
	}

    else if(inputTypeValue === "Hectare" && resultTypeValue==="Hectare"){
		//Hectare to Hectare formula 
		result.value = input.value;
	}

    else if(inputTypeValue === "Hectare" && resultTypeValue==="Acre"){
		//Hectare to Acre formula 
		result.value = Number(input.value) * 2.471;
	}

    // ----------------------------------------------------
    // ----------------------------------------------------

    if(inputTypeValue === "Acre" && resultTypeValue==="Sq-Kilometer"){
		//Acre to Sq-Kilometer formula 
        result.value = Number(input.value) / 247.1;
	}
    
    else if(inputTypeValue === "Acre" && resultTypeValue==="Sq-Meter"){
		//Acre to Sq-Meter formula 
		result.value = Number(input.value) * 4047;
	}
    
    else if(inputTypeValue === "Acre" && resultTypeValue==="Sq-Mile"){
		//Acre to Sq-Mile formula 
		result.value = Number(input.value) / 640;
	}

    else if(inputTypeValue === "Acre" && resultTypeValue==="Sq-Yard"){
		//Acre to Sq-Yard formula 
		result.value = Number(input.value) * 4840;
	}

    else if(inputTypeValue === "Acre" && resultTypeValue==="Hectare"){
		//Acre to Hectare formula 
        result.value = Number(input.value) / 2.471;
	}

    else if(inputTypeValue === "Acre" && resultTypeValue==="Acre"){
		//Acre to Acre formula 
		result.value = input.value;
	}
}

