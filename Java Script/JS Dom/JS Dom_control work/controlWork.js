let qerSell = (x) => document.querySelector(x);
let boxUpper = qerSell('#box__upper');

//========================== Functional Button Edit=================================
//fUNCTION click button EDIT
qerSell('#btn-edit').addEventListener('click', function () {
  this.style.boxShadow = '0 0 2px 2px #FFD700';
  qerSell('#btn-style').style.boxShadow = '';
  qerSell('.wrap__content_btn-edit').style.display = 'block';
  qerSell('.wrapper__left-box_btn-style').style.display = 'none';
  qerSell('#textarea').value = boxUpper.innerHTML
});

//FUNCTION focus TEXTAREA
qerSell('#textarea').addEventListener('focus', () => {
  qerSell('#btn-edit').style.boxShadow = '';
});

//-------------------Functions Button Add -----------------------------
//fUNCTION click button ADD
qerSell('#btn-add').addEventListener('click', () => {
  qerSell('.wrapper__general_content').style.display = 'none';
  qerSell('#creation__table_list').style.display = 'block';
});

//FUNCTION show table
qerSell('#table').addEventListener('click', () => {
  qerSell('.wrapper__table').style.display = 'block';
  qerSell('.wrap__list').style.display = 'none';
});

//FUNCTION creation TABLE
let formCreateTable = document.forms['form__table'];

for (let i = 0; i < formCreateTable.elements.length; i++) {
  formCreateTable.elements[i].addEventListener('focus', function () {
    formCreateTable.elements[i].style.boxShadow = '0 0 0 2px rgba(100, 149, 237,.90)';
  });
  formCreateTable.elements[i].addEventListener('blur', function () {
    formCreateTable.elements[i].style.boxShadow = '';
  });
}
//-----------------------
qerSell('#btn_create-table').addEventListener('click', () => {

  for (let i = 0; i < formCreateTable.elements.length; i++) {

    if (formCreateTable.elements[i] == formCreateTable.elements[0]) {
      for (let j = 0; j < formCreateTable.elements[0].value; j++) {
        let createTR = document.createElement('tr');
        qerSell('.table').appendChild(createTR);

        for (let k = 0; k < formCreateTable.elements[1].value; k++) {
          let createTD = document.createElement('td');
          createTD.innerHTML = 'TD';
          createTD.style.width = `${formCreateTable.elements[2].value}px`;
          createTD.style.height = `${formCreateTable.elements[3].value}px`;
          createTD.style.border = ` ${formCreateTable.elements[4].value}px ${formCreateTable.elements[5].value} ${formCreateTable.elements[6].value}`;
          createTR.appendChild(createTD);
        }
      }
    }
    if (formCreateTable.elements[i].value != formCreateTable.elements[5].value &&
      formCreateTable.elements[i].value != formCreateTable.elements[6].value) {
      formCreateTable.elements[i].value = '';

    }

    qerSell('.wrapper__table').style.display = 'none';
    qerSell('#creation__table_list').style.display = 'none';
    qerSell('.wrapper__general_content').style.display = 'block';
    qerSell('.wrapper__general_content').style.display = 'flex';
  }

});

//FUNCTION show list
qerSell('#list').addEventListener('click', () => {
  qerSell('.wrap__list').style.display = 'block';
  qerSell('.wrapper__table').style.display = 'none';
});

//FUNCTION creation LIST

qerSell('#count__li').addEventListener('focus', function () {
  this.style.boxShadow = '0 0 0 2px rgba(100, 149, 237,.90)';
});
qerSell('#selectTypeList').addEventListener('focus', function () {
  this.style.boxShadow = '0 0 0 2px rgba(100, 149, 237,.90)';
  qerSell('#count__li').style.boxShadow = '';
});
// /------------------
qerSell('#btn_create-list').addEventListener('click', function () {

  let creatType = document.createElement('ul');
  creatType.setAttribute('type', qerSell('#selectTypeList').value);
  qerSell('#typeList').appendChild(creatType);
  let numberList = 1;
  for (let i = 0; i < qerSell('#count__li').value; i++) {
    let creatLi = document.createElement('li');
    creatLi.innerHTML = `item ${numberList++}`;
    creatType.appendChild(creatLi)
  }
  qerSell('#count__li').value = '';
  qerSell('.wrap__list').style.display = 'none';
  qerSell('#creation__table_list').style.display = 'none';
  qerSell('.wrapper__general_content').style.display = 'block';
  qerSell('.wrapper__general_content').style.display = 'flex';
});


//--------------------function click button Save-------------------------
//fUNCTION click button SAVE
qerSell('#btn-save').addEventListener('click', () => {
  boxUpper.innerHTML = qerSell('#textarea').value;

  if (qerSell('#table').checked == true) {
    qerSell('#box__upper').appendChild(qerSell('.table'));
    qerSell('.table').style.display = 'block';
    qerSell('#table').checked = false;
  }
  if (qerSell('#list').checked == true) {
    qerSell('#box__upper').appendChild(qerSell('#typeList'));
    qerSell('#typeList').style.display = 'block';
    qerSell('#list').checked = false;
  }
  qerSell('#btn-edit').style.boxShadow = '';
  qerSell('.wrap__content_btn-edit').style.display = 'none';
});

//-===========================Functional Button Style-================================
//FUNCTION click button STYLE
qerSell('#btn-style').addEventListener('click', function () {
  this.style.boxShadow = '0 0 2px 2px CornflowerBlue';
  qerSell('#btn-edit').style.boxShadow = '';
  qerSell('.wrap__content_btn-edit').style.display = 'none';
  qerSell('.wrapper__left-box_btn-style').style.display = 'block';

});

//FUNCTION click size RADIO button
let radioChecked = document.querySelectorAll('.radio_checked');
radioChecked.forEach(radio => {
  radio.onclick = () => {
    boxUpper.style.fontSize = `${radio.value}px`;
  }
});

// FUNCTION select FONT FAMILY
qerSell('#select__font_family').addEventListener('change', function () {
  boxUpper.style.fontFamily = `${this.value}`;
});

//FUNCTIONS color TEXT and BACKGROUND
let arrColors = ['Red', 'Blue', 'LawnGreen', 'Black', 'Gold', 'Violet', 'White', 'Purple', 'Teal'];
//Creation Color of text
for (let i = 0; i < arrColors.length; i++) {

  let color = document.createElement('div');
  color.classList.add('color');
  color.style.background = arrColors[i];
  qerSell('.wrap__colors').appendChild(color);

  //FUNCTION Color TEXT
  qerSell('#btn_colors-text').addEventListener('click', function () {
    this.style.boxShadow = ' 0 0 0 2px #C0C0C0';
    qerSell('#btn_background-color').style.boxShadow = '';
    qerSell('.wrap__colors').style.left = '30%';
    color.addEventListener('click', function () {
      qerSell('#box__upper').style.color = this.style.background;
      qerSell('.wrap__colors').style.left = '100%';
      qerSell('#btn_colors-text').style.boxShadow = '';
    })
  });
}

//Creation Colors of Background
for (let i = 0; i < arrColors.length; i++) {

  let backgroundColor = document.createElement('div');
  backgroundColor.classList.add('color');
  backgroundColor.style.background = arrColors[i];
  qerSell('.wrap__background').appendChild(backgroundColor);

  //FUNCTION  color BACKGROUND
  qerSell('#btn_background-color').addEventListener('click', function () {
    this.style.boxShadow = ' 0 0 0 2px #C0C0C0';
    qerSell('#btn_colors-text').style.boxShadow = '';
    qerSell('.wrap__background').style.left = '30%';
    backgroundColor.addEventListener('click', function () {
      qerSell('#box__upper').style.background = this.style.background;
      qerSell('.wrap__background').style.left = '100%';
      qerSell('#btn_background-color').style.boxShadow = '';
    })
  });
}

// FUNCTIONS  text STYLE
qerSell('#bold_text').addEventListener('click', function () {
  if (this.checked) qerSell('#box__upper').style.fontWeight = 'bold';
  else qerSell('#box__upper').style.fontWeight = '';
});

qerSell('#cursive_text').addEventListener('click', function () {
  if (this.checked) qerSell('#box__upper').style.fontStyle = 'italic';
  else qerSell('#box__upper').style.fontStyle = '';
});

;
