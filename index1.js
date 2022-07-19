const freelanceWork = {
    project: {
        name: "Shop",
        during: "21 days",
        payment: "2000$"
    },
    myproject(start) {
        const days = start + 20; //start 1  + 20 days
        const during = days * 24; // 21 * 24 = 504 hour 
        const hour = days / 5; // spending 4,2 hours a day 
        const finish = hour * 10 //finished after 10 days, (42hours)
        return `
         For project
         Or:${days} //21 days
         Jamaqanak:${during} //504 hour
         Orakan:${hour}  //4.2 hour a day
         Avart:${finish} // finished after 10 days
         `
    },
    PaymentMethod(value) {
        const AMD = value * 448
        const USD = value
        const RUB = value * 61
        return `
        currency
         Dram:${AMD} //896000dr 
         Dollar:${USD} //2000$ 
         Rubli:${RUB} //122000rub
         `
    }

}

console.log(freelanceWork.myproject(1));
console.log(freelanceWork.PaymentMethod(2000))
