
let bales=0;

let question1 = prompt('Що таке перемінна в Java Script?'),
    answer1 = (question1 == 'іменоване сховище' ) ?  bales++ : false ;

let question2 = +prompt('Скільки основних типів данних в JS?'),
    answer2 = (question2 == 8) ? bales++ : false;

let question3 = prompt('Як називається тип даних в JS який відповідає правда неправда?'),
    answer3 = (question3 == 'boolean') ? bales++ :false;

let question4 = prompt('Як називається тип даних в JS для чисел?'),
    answer4 = (question4 == 'number') ? bales++ : false;

let question5 = prompt('Як називається тип даних в JS для строки?'),
    answer5 = (question5 == 'string') ? bales++ : false;

let question6 = prompt('Як називається тип даних в JS для невідомого значення?'),
    answer6 = ( question6 == 'null') ? bales++ : false;

let question7 = prompt('Як називається тип даних в JS для неприсвоєнного значення?'),
    answer7 = (question7 == 'undefined') ? bales++ : false;

let question8 = prompt('Як називається тип даних в JS для унікального ідентифікатора?'),
    answer8 = (question8 == 'symbol') ? bales++ : false;

let question9 = prompt('Який оператор позволяє бачити який тип даних зберігається в перемінній?'),
    answer9 = (question9 == 'typeof') ? bales++ : false;

let question10 = prompt('Які є 2 види циклів?'),
    answer10 = (question10 == 'for while') ? bales++ : false;


if(bales <= 5 ){
    document.write(`<div class="level-1 level"><span>Твій результат-${bales}</span> <span> Потрібно вчитись дундук :(</span> </div> `);}

if(bales >=6 && bales <=9){
    document.write( `<div class="level-2 level"> <span>Твій результат-${bales}</span> <span> Ну ти вже щось знаєш але всеодно дундук</span></div> `);}

if(bales == 10){
    document.write(`<div class="level-3 level"><span>Твій результат-${bales}</span> <span> Ти не дундук:)</span></div> `);}



