let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(celsius) {	 
	return celsius * 1.8 + (32);
	
	// Add your code here and return the new value
});

console.log(arrayOfFahrenheitValues);
