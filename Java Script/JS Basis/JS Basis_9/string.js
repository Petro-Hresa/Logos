// Task1===================================
let a = prompt(' Enter Words');
let b = '';
for(let i = 0; i < a.length; i++) if(a[i] === ' ') b++;
console.log('Пробілів '+ b);



// Task2===================================
// let email = prompt('Введіть Email');

  // if (email.indexOf('@') >= 0){
  //
  //   if (email.charAt(0) === '@') console.log('Email не може починатися з @');
  //
  //   else if (email.substr(-1) === '@') console.log('Email не може закінчуватися на @');
  //
  //   else console.log(email);
  //
  // }else console.log('Email повинен містити @');



// Task3===================================
// let a = prompt('Enter text');
// let b = a.indexOf('css');
// let c = 0;
// while(b >= 0){
//   c++;
//   b = a.indexOf('css', b + 1);
// }
// console.log(c);
//

// Task4===================================
// let a = prompt('Enter URL');
//
// if( a.indexOf('https://') === 0){
//   let c = a.substr(8);
//   console.log(c);
//
// } else if( a.indexOf('http://www.') === 0){
//   let x = a.substr(11);
//   console.log(x);
// }
//
