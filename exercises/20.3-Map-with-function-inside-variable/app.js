let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function(name) {
	return 'My name is: '+name;
};

let introductionNames = names.map(prepender)
console.log(introductionNames)

// Your code here
