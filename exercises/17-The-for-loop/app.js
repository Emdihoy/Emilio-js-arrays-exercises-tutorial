let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here

let totalSum = 0;
for (let i of myArray){
    totalSum += i;
}
console.log(totalSum / myArray.length);

//Sumar todos los numeros del array
//dividir el total entre la cantidad de elementos del array
//usar el "for...of" loop en alguna parte. 