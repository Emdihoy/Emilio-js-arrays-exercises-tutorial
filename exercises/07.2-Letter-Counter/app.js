let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let i in par)
{ const character = par[i].toLowerCase()
    if (character === " ") continue;
    else if (counts[character] == undefined){
        counts[character] = 1;
    }    
    else {
        counts[character] = counts[character] + 1;
    }
}
console.log(counts);
