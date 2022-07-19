//For in && For of

const paintObj = {
    info: "Paints",
    painters: {
        names: ["Van Gogh", "Michelangelo", "Leonardo Da Vinci"],
        years: [1853, 1475, 1452],
        countries: ["Netherland", "Italy", "Italy"]
    },
    paints: {
        names: ["The starry night", "Creation of Adam", "Mona Lisa"],
        years: [1889, 1512, 1503],
        locations: ["MoMA", "Capella Sistina", "Louvre"],
        countries: ["New-York", "Vatican", "France"]
    },
    paintFunc() {
        return `I'm independent method`
    }
};
const {
    paintFunc
} = paintObj
console.log(paintFunc()) // now,it`s an independent function,i can call wherever i want

for (let keys in paintObj) {
    if (typeof paintObj[keys] === "object") {

        for (let keys2 in paintObj[keys]) {
            console.log(keys + "{" + keys2 + ":" + paintObj[keys][keys2] + "}");
        }

    } else {
        console.log(keys + paintObj[keys]);
    };
};

const arr = [function arr() {
        return `Independent function`
    },
    ["Lucy", "Bob"], {
        ages: [34, 21]
    },
    ["Karapetyan", "Gevorgyan"],
    ["USA", "Erevan"]
]
const [arrFunc] = arr;
console.log(arrFunc()); // now,it`s an independent function,i can call wherever i want

for (let i in arr) {
    console.log(arr[i]);
};
//or 
for (let i of arr) {
    console.log(i)
}
//The for of loop  allows to iterate over iterable objects (arrays, sets, maps, strings,...)
//The for of loop cannot be used to iterate over an object.
//The for in loop is used to iterate through the keys of an object.
//The for of loop is used to iterate through the values of an iterable.