let queSell = x => document.querySelector(x);
//Items Form Enter Data
let formEnterData = document.forms["form__enter-data"];
for (let i = 0; i < formEnterData.elements.length; i++) {
  //function focus items
  formEnterData.elements[i].onfocus = function () {
    formEnterData.elements[i].style.boxShadow = '0 0 0 2px #87CEEB';
    queSell('#btn__add-user').style.boxShadow = 'none';
  };
  //function blur items
  formEnterData.elements[i].onblur = function () {
    formEnterData.elements[i].style.boxShadow = 'none';
  };

}

//Array Data  Users
let arrUsers = [];

//Constructor User
class User {
  constructor(login, password, email){
    this.login = login;
    this.password = password;
    this.email = email;
  }
}

//Function create  Add Users
queSell('#btn__add-user').addEventListener('click',function addUser() {
  //Regular for Example
  let correctName = /^[A-z\s]{0,20}$/.test(formEnterData.elements[0].value);
  let correctPassword = /^[A-z0-9]{5,15}$/.test(formEnterData.elements[1].value);
  let correctEmail = /^[A-z0-9\.-]+@[A-z0-9-]+\.[a-z]{2,5}$/.test(formEnterData.elements[2].value);

  if(correctName == true && correctPassword == true && correctEmail == true){
     this.style.boxShadow = '0 0 0 2px #32CD32';
     let newUser = new User(formEnterData[0].value, formEnterData[1].value, formEnterData[2].value);
     arrUsers.push(newUser);
     for (let i = 0; i < formEnterData.elements.length; i++) {formEnterData.elements[i].value = '';};
     render();
  }else{
    for (let i = 0; i < formEnterData.elements.length; i++) {formEnterData.elements[i].value = '';};
  }

  //function blur of Add Users
  this.onblur = ()=> this.style.boxShadow = 'none';
});

//function Render
function render(){
  queSell('#tbody').innerHTML = '';
  //Create items Table
  for(let i  = 0; i < arrUsers.length; i++){
    //Create TR
    let createTR = document.createElement('tr');
    //Create TD
    let createNam = document.createElement('td');
        createNam.innerHTML = [i+1];
        createTR.appendChild(createNam);
    // Create TD for User Data
    for (let item in arrUsers[i]) {
      let createTD = document.createElement('td');
          createTD.innerHTML = arrUsers[i][item];
          createTR.appendChild(createTD);
    }
    //  Create Button Edit
    let createTdOfButtonEdit = document.createElement('td');
    let createButtonEdit = document.createElement('button');
    createButtonEdit.classList.add('btn__all','btn__edit');
    createTdOfButtonEdit.appendChild(createButtonEdit);
    createTR.appendChild(createTdOfButtonEdit);
    createButtonEdit.innerHTML = 'Edit';
    //Function Edit
    createButtonEdit.onclick = function() {
      this.style.boxShadow = '0 0 0 2px #FFFF00';
      editUser(i)};

    //Create Button Delete
    let createTdOfButtonDelete = document.createElement('td');
    let createButtonDelete = document.createElement('button');
    createButtonDelete.classList.add('btn__all','btn__delete');
    createTdOfButtonDelete.appendChild(createButtonDelete);
    createTR.appendChild(createTdOfButtonDelete);
    createButtonDelete.innerHTML = 'Delete';
    //Function Delete
    createButtonDelete.onclick = function(){deleteUser(i)};
    queSell('#tbody').appendChild(createTR);
  }
}


//Function for Button Edit^
function editUser(i) {
  //Return user data to input
  for (let item in arrUsers[i]) {
    switch (item) {
      case 'login':
        formEnterData[0].value = arrUsers[i][item];
        break;
      case 'password':
        formEnterData[1].value = arrUsers[i][item];
        break;
      case 'email':
        formEnterData[2].value = arrUsers[i][item];
        break
    }
  }
  queSell('#btn__add-user').style.display = 'none';
  queSell('#btn__edit-user').style.display = 'block';

  //Function Edit-user return  data in table
  let userIndex = arrUsers[i];
  queSell('#btn__edit-user').onclick = function () {
    queSell('#btn__add-user').style.boxShadow = '0 0 0 2px #32CD32';
    for (let item in userIndex) {
      switch (item) {
        case 'login':
          arrUsers[i][item] = formEnterData[0].value;
          break;
        case 'password':
          arrUsers[i][item] = formEnterData[1].value;
          break;
        case 'email':
          arrUsers[i][item] = formEnterData[2].value;
          break
      }

    }
    for (let i = 0; i < formEnterData.elements.length; i++) {formEnterData.elements[i].value = '';}
    queSell('#btn__add-user').style.display = 'block';
    queSell('#btn__edit-user').style.display = 'none';
    render();
  };
}

//Function for Button Delete^
function deleteUser(i) {
  arrUsers.splice(i,1);
  render();
  for (let k = 0; k < formEnterData.elements.length; k++) {
    if( formEnterData.elements[k].value != '')formEnterData.elements[k].value = '';}
  queSell('#btn__add-user').style.boxShadow = 'none';
  queSell('#btn__add-user').style.display = 'block';
  queSell('#btn__edit-user').style.display = 'none';
}
