// ---Task 1 ForEach---
let arr1 = [5,6,7,8,9],sum = 0;
    arr1.forEach(item => sum += item);
console.log(sum);



//---Task 2 Map---============================
// let arr2 = [5,6,7,8,9];
// let itemSquares = arr2.map((item)=>item*item);
// console.log(itemSquares);



//---Task 3 Every---==========================
// let arr3 = [
//   {name: 'Ivan', country:'Ukraine'},
//   {name: 'Petro', country:'Ukraine'},
//   {name: 'Miguel', country: 'Cuba'}
// ];
// let resUA = arr3.every((item)=>{
//   if(item.country == 'Ukraine') return item.country
// });
// console.log(resUA);



//---Task 4 Some---===========================
// let arr4 = [
//   {name: 'Ivan', country:'Ukraine'},
//   {name: 'Petro', country:'Ukraine'},
//   {name: 'Miguel', country: 'Cuba'}
// ];
// let resCuba = arr4.some((item)=>{
//   if(item.country == 'Cuba') return item.country
// });
// console.log(resCuba);
//


//---Task 5 Filter---========================
// let arr5 = [1,'string', [3, 4], 5, [6, 7]];
// const filterArr = arr5.filter(item => {
//   if(item.length == 2)return item
// })
// console.log(filterArr);



//---Task 6 Reduce---=======================
// let arr6 = [1, 2, 5, 0, 4, 5, 6];
// let sumToNoll = 0;
// let elementArr = 1;
//  arr6.reduce(function(accum,currentValue,index){
//   if(index < 4) sumToNoll = accum;
//   if(accum < 10 &&  currentValue != 0) elementArr += 1;
//   return  accum + currentValue;
// });
// console.log('Sum to noll = '+sumToNoll);
// console.log('Elements arr to ten = '+elementArr);




//---Task 7 ---==============================
// let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
//  let filterArr = arr7.filter(function(item){
//      if(item > 0)return item
//  });
//  console.log(filterArr);
//
//
//  let mapArr = filterArr.map((item)=>{
//      return Math.floor(Math.sqrt(item))
//  });
//  console.log(mapArr);
//
