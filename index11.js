/*JS - ում ֆունկցիաները object-ներ են և կարող են որպես արգումենտ ստանալ կամ return անել այլ ֆունկցիա։
Այն ֆունկցիաները,որոնք փոխանցվում են կոչվում են` CallBack ֆունկցիաներ (իհարկե,կարող ենք տալ ցանկացած անուն)*/

function doTask(subject, callback) {

    console.log(`Starting my ${subject} task`);

    callback(); // => function callback () {console.log('Finished my task')}
    /* Կանչում ենք callBack-ը որ երևա իրան ինչ արժեք ենք փոխանցել,
    որպես արժեք իրան տվել ենք,որ դառնա Ֆունկցիա callback անունով,
    որնել տպումա ՝ finished my task ' */
}

doTask('CallBack', function () {
    console.log('Finished my task');
});

//#2
function doTask2(subject, callback) {

    console.log(`Starting my ${subject} task-2`);

    callback();
    /* Callback -ին որպես արժեք փոխանցել (վերագրել) ենք callBackFinished ֆունկցիան,
    որն էլ կանչում ենք doTask2 -ի մեջ */
}

function CallBackFinished() {
    console.log('Finished my task-2');
}

doTask2('CallBack', CallBackFinished);


let str = "asnd"
str.forEach(items)