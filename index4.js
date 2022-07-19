//Destructuring

//#1
let alphabet = ["A", "B", "C", "D"]
let numbers = [1, 2, 3, 4]

let result = [...alphabet, ...numbers]
console.log(result);

//#2
let info = ["Any", "Gyozalyan"]
let infoResult = [infoname, surName] = info

console.log(infoname, surName);

//#3
let [n1, n2, n3] = [
    [
        ["Moscow", [
            ["Russia"]
        ]]
    ], "Canada,Ottawa", [
        ["Armenia", [
            ["Erevan"]
        ]]
    ]
];

console.log(`I'm from ${n3}`);

//#4
let person = {
    name: "Lucy",
    age: 30,
    address: {
        city: "Erevan",
        postCode: 0053
    }
}

function personFunc({
    name,
    age
}) {
    console.log(`Person name is ${name},age is ${age}`);
}
personFunc(person)

//#5 
let mathOp = (x, y) => {
    return [x + y, y * x]
}

let [sum, multiply] = mathOp(2, 5)

console.log(`sum = ${sum}`);
console.log(`multiply = ${multiply}`);

//#6
let obj = [{
        name: "Lucy"
    },
    {
        name: "Any"
    },
    {
        name: "Rob"
    },
    {
        name: "Joe"
    }
];
let [a1, a2, a3, a4] = obj;
console.log(a1, a2, a3, a4);

//#7
let myfavColor = ["blue", "pink", "red", [
    [
        [
            [
                ["gold"]
            ]
        ]
    ]
]];
let [col1, col2, col3, col4] = myfavColor;

for (let i = 0; i < myfavColor.length; i++) {
    console.log(`My fav. color is ${col4}.`);
    break;
}

//#8
let personInfo = {
    name: "Lucy",
    hobby: ["dancing", "reading", "swimming", "painting"]
};
let [hob1, hob2, ...rest] = personInfo.hobby;

console.log(`${personInfo.name} like to ${hob1},${hob2},${rest}.`);

//#9
let obj2 = {
    name: "Lucy",
    age: 22,
    frineds: ["Bob", "Rob", "Lea"]
}
let {
    frineds: [...all]
} = obj2
console.log(`hey,my name is ${obj2.name},my friends are ${all}`);

//#10
const carInfo = {
    name: "Mercedes",
    model: "CLS-AMG-63",
    year: 2021
};
const {
    name,
    model,
    year
} = carInfo;
console.log(name);
console.log(model);
console.log(year);