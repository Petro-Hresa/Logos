//Task 1===============================
let fib = num =>{
  let a = 1,
      b = 0,
      sum;

  for(let i = a; i <= num ; i++){
     for(let k = b; k <= num; k++){
       sum = a + b;
             a = b;
             b = sum ;
       console.log(sum);
    }
  }
};
fib('10');



//Task 2/1================================
// let geoProgress = function(n,q) {
//   let c = 1;
//   for (let i = 0; i <= n; i++) {
//     if (i == n) c--;
//     console.log(c);
//     c *= q;
//   }
// };
// geoProgress(5,2);
//

//Task 2/2------------------------
// let geoProgressFormula = function(n , q){
//   let b = 1;
//   for(let i = 0; i <= n; i++){
//     if(i == n){
//       b--;
//       b /= 2;
//     }
//     console.log(b);
//       b *=q;
//   }
// };
// geoProgressFormula(4,3);
//


// Task 3/1==============================
// let a = +prompt('a'), b = +prompt('b');
// promNumb(a,b);
//  function promNumb (a,b){
//    console.log(a);
//    console.log(b);
//
//  }

// Task 3/2--------------------------

//  function promNumb (a,b){
//   next:
//     for(let i = a; i <= b; i++ ){
//      for(let k = a; k < i; k++){
//        if(i % k == 0) continue next;
//      }
//      console.log(i);
//    }
//  }
// let a = +prompt('a'), b = +prompt('b');
// promNumb(a,b);
