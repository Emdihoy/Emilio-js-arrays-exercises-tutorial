let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below

function deletePerson (rmName){
    let newPeople = people.filter((name) => name != rmName);
    return newPeople
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
