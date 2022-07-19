debugger
//#1
const urlFunc = (domain) => {
    return function (url) {
        return `https://${url}.${domain}`
    }
}
const amUrl = urlFunc("am")
const comUrl = urlFunc("com")
const ruUrl = urlFunc("ru")

console.log(amUrl("Time"));
console.log(comUrl("Disney"));
console.log(ruUrl("Yandex"));

//#2
const copyFunc = (name) => {
    let score = 0
    return function () {
        ++score
        return `${name} - ${score} point`
    }
}
const res1 = copyFunc("Any") //1 player
const res2 = copyFunc("Roze") //2 player

console.log(res1()); //1 point
console.log(res1()); //2 point

console.log(res2()); //1 point
console.log(res2()); //2 point
console.log(res2()); //3 point


/* Closures -> function-ի  մեջ function ա,որը access(доступ) ունի main function-ի
փոփոխականներին և արգումենտներին.Նաև աշխատումա main function-ի ավարտից հետո 
*/

/* Lexical scope -> local հիշողություն ա functon-ի մեջ,որը կանչվելուց հետո ջնջումա ներսում պահած արժեքը
 */