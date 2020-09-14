
let qurSel = x => document.querySelector(x);
let qurSelectAll = x => document.querySelectorAll(x);

//=================Task of the box-1========================================
qurSel('.box-1').style.background = 'gold';
qurSel('.box-1').onmouseleave =function (){

  let colorBox = qurSel('.box-1');
  if(colorBox.style.background == 'gold') {colorBox.style.background = 'red'}
  else if(colorBox.style.background == 'red') {colorBox.style.background = 'blue'}
  else if(colorBox.style.background == 'blue') {colorBox.style.background = 'gold'};
};

// =========================Task of the box-2===============================
qurSel('.box-2').onmouseenter = function () {
 this.style.background = 'red';
 this.textContent = 'Хочеш знати який';
};
qurSel('.box-2').onmousedown = function () {
  this.style.background = 'black';
  this.style.color = 'red';
  this.textContent = 'А я тобі не скажу';
};
qurSel('.box-2').onmouseup = function () {
  this.style.background = 'red';
  this.style.color = '';
  this.textContent = 'Хочеш знати який';
};
qurSel('.box-2').onmouseleave = function () {
  this.style.background = 'gold';
  this.textContent = 'У мене є секрет';
};

// ========================Task for boxes 3 , 4 , 5 =========================
let boxImg = qurSelectAll('.box-img');
for(let i = 0; i <  boxImg.length; i++ ) {
  boxImg[i].onclick = function(){
    let urlImg = prompt('Введіть URL', 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg');
    this.style.background = `url('${urlImg}') center no-repeat`;
    this.style.backgroundSize = 'cover';
    this.style.backgroundClip = 'content-box';
  };
};

//========================= Task of the box-4=================================
let listStyle = qurSelectAll('ol > li');
for(let i = 0; i < listStyle.length;i++){ listStyle[i].onclick = function() {this.style.color = this.textContent };};































// function backgroundSet(){
//   let userBg = prompt("link", "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg");
//   this.style.background = `url( ${userBg}) center center no-repeat`;
//   this.style.backgroundSize = cover;
// }
// qurSel('.box-img').forEach(item => item.onclick = backgroundSet );
//
//
// console.log(boxUrl );
