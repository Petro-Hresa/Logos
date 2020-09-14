
// Task1=================================================
function arrCopy(arr){

     const arr1 = arr.slice(), a = arr1.push(1,2,3);

     const arr2 = arr1.slice(), b = arr2.push([4,5,6]);

  console.log(arr);
  console.log(arr1);
  console.log(arr2);
}
arrCopy( []);

// Task2==================================================
//  let arrToString = function(arr){
//
//     for(let i = 0; i < arr.length; i++){
//
//        arr[i] += String();
//     }
//     return  console.log(arr);
// };
//  arrToString([1,2,3,4]);
//

// Task3==================================================
// let getLength = arr =>{
//
//    for(let i = 0; i < arr.length; i++){
//
//       arr[i] = arr[i].length;
//    }
//    return console.log(arr);
// };
// getLength(['BMW', 'Audi', 'Tesla']);
//


// Task4==================================================
// function removeDuplicates(arr){
//
//   const arr2 = arr.filter((item,index) => { return index === arr.indexOf(item)});
//
//   console.log( arr2);
// }
// removeDuplicates(['html','css','html','css']);
//

