let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let dataTypes = [];

for (let i in mix){
    dataTypes.push(typeof mix[i])
   }
console.log(dataTypes)