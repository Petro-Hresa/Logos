// Task1=============================
function getDigits(a, b ,c){

  let   g =  (c - Math.round(c)),
        z =  (a - Math.round(a)),
        s =  (b - Math.round(b));

  console.log( g.toFixed(1)) ;
  console.log( z.toFixed(2)) ;
  console.log( s.toFixed(3)) ;
}
getDigits(1.25 ,7.313,100.3);


// Task2======================================

// function getArea(num1){
//
//   if (num1 == 0) console.log('Ви не ввели число');
//
//   else if (!isNaN(num1)) console.log((Math.PI * num1).toFixed(2));
//
//   else if (isNaN(num1)) console.log('Введіть число');
// }
// getArea( +prompt('Радіус круга'));
//

// Task3=================================================

// function getSqrt(num2) {
//
// if(num2 < 0 )console.log('Введіть додатнє значення');
//
// else if(num2 == 0)console.log('Введіть число');
//
// else if(!isNaN(num2))console.log(' з '+ num2 +' Квадратний корінь '+ (Math.sqrt(num2)).toFixed(0));
//
// else if(isNaN(num2))console.log('Повинно бути числове значення');
// }
// getSqrt(+prompt('Введіть корінь'));
