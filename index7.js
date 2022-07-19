//task -> make a changes
//result
const restorantData = {
    menu: [{
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [{
        name: 'Alice',
        age: 22
    }, {
        name: 'John',
        age: 24
    }],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    !prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}
console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    let result = parseInt(fDish.price) + parseInt(sDish.price)
    if (result < average) {
        return `Цена ниже средней ${result}$`;
    } else {
        return `Цена выше средней ${result}$`;
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {
        name: 'Mike',
        age: 32
    };
    copy.waitors[1] = {
        name: 'Anna',
        age: 32
    };
    return copy;
}
console.log(restorantData);
console.log(transferWaitors(restorantData));




/*  Requierment
	1. isOpen ֆունկցիան չի ցանկանում ճիշտ աշխատել,
	արդյունքը միշտ սխալ է ցույց տալիս, պետք է գտնել
	խնդիրը ու լուծել։

    function isOpen(prop) {
	let answer = '';
	prop ? answer = 'Закрыто' : answer = 'Открыто';

	return anwser;
    }

	2․ isAverageLunchPriceTrue ֆունկցիան պետք է 
	վերցնի ցանկացած երկու ուտելիքի գին մենյույի մեջից
	գումարի իրար հետ ու համեմատի averageLunchPriceի հետ

    function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
    }

	3․ transferWaitors ֆունկցիան ստեղծվել է նրա համար, 
	որ կլոնավորի տվյալնների թեմփլեյթը ու ուղարկի այլ ռեստորանի,
	իհարկե այլ ռեստորանում պետք է լինեն ուրիշ ուտելիքներ, 
	ուրիշ գներ, ու ուրիշ մատուցողներ։ Ներկա պահին այս ֆունկցիան
	գտնվում է պատրաստման փուլում, դուք պետք է անեք այնպես, որ նոր ռեստորանում
	փոխվեն միայն մատուցողների անուններն ու տարիքները

    function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors[0] = {
		name: 'Mike',
		age: 32
	};
	return copy;
    }   
	բայց ներկա պահին ծրագիրը աշխատացնելուց տեսնում ենք, որ ինքը 
	բավականին սխալ է աշխատում, նախ համ կլոնավորված ռեստորանն ա պարունակում
	նույն տվյալները, հետո էլ տեսնում ենք որ մատուցող Alice-ը կորում ա
	ու տեղը գալիս է ինչ-որ Mike, շտապ պետք է գտնել խնդիրը և ուղղել
	որպեսի ռեստորանները իրարից անկախ լինեն։

*/