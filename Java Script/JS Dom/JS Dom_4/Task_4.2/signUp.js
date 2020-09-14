
let sellAll = x =>document.querySelector(x);
let formSignUp = document.forms['form'];

// Create style items form
for(let i = 0 ; i < formSignUp.elements.length; i++ ) {

  formSignUp.elements[i].classList.add('style__input_fields');
  formSignUp.buttonSignUp.classList.add('button__sign-up');

  //Function focus
  formSignUp.elements[i].addEventListener('focus', () => {

    formSignUp.elements[i].style.boxShadow = '0 0 2px 2px rgba(100, 149, 237 , 0.40)';
    formSignUp.buttonSignUp.style.boxShadow = 'none';

  });

  formSignUp.elements[i].addEventListener('blur', () => {

    formSignUp.elements[i].style.boxShadow = 'none';

  });

};

// Select Element
let selectedChoose;
formSignUp.choose.addEventListener('change',function(){  selectedChoose = sellAll('.activity__user').innerText = this.value;});

// Checkbox Form
let chBox = document.getElementById('check');
 function checkInput() {

   if(chBox.checked)   formSignUp.buttonSignUp.style.background = 'LimeGreen';
   else formSignUp.buttonSignUp.style.background = 'mediumseagreen';

 };


// Button Form Sign Up
formSignUp.buttonSignUp.addEventListener('click', ()=> {

  if(chBox.checked){

    sellAll('.form-wrap').style.display = 'none';
    sellAll('.wrap__user-form').style.display = 'block';
    sellAll('.name__user').innerText = `${formSignUp.firstName.value} ${formSignUp.secondName.value}`;
    sellAll('.email__user').innerText = formSignUp.emailAddress.value;

  }

  if( sellAll('#man').checked == true){
    sellAll('.img__user').style.background = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT06jx2_8RBzvKBYZ8SURNtsEBoN0b-t9CLznoZAVDxKllCFeXI&usqp=CAU) no-repeat center `;
    sellAll('.img__user').style.backgroundSize = `120px  120px` ;

  }else if( sellAll('#woman').checked == true){
    sellAll('.img__user').style.background = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGp433mMvx34GZC8TGtgClcK-OZyCfHJd0XeH4GVBMlirSACyv&usqp=CAU) no-repeat center `;
    sellAll('.img__user').style.backgroundSize = `120px  120px` ;

  };



});
formSignUp.buttonSignUp.addEventListener('click', () => {

  if(chBox.checked){
    if(sellAll('#n').selected == true)sellAll('.activity__user').innerText = '';
    else sellAll('.activity__user').innerText = selectedChoose ;
  }
});

// ====================== User Form =============================

let boxCreateUserForm = sellAll('.box__create_user-form');

// Create style user form
for(let i = 0 ; i < boxCreateUserForm.children.length; i++){

  boxCreateUserForm.children[i].classList.add('style__create_form');
  sellAll('.img__user').classList.add('img__user');
  sellAll('.email__user').style.marginTop = '4px';
  sellAll('.activity__user').style.margin = '15px 0';

};

// Button Form Sign Out
let btnSignOut = sellAll('.btn__sign-out');
    btnSignOut.addEventListener('click', () => {

    sellAll('#man').checked = true;
    sellAll('#n').selected = true;
    sellAll('.form-wrap').style.display = 'block';
    sellAll('.wrap__user-form').style.display = 'none';
    sellAll('.horizontal__line').classList.add('horizontal__line');

  if( formSignUp.checkBox.checked ){
      formSignUp.checkBox.checked = false;
      formSignUp.buttonSignUp.style.background = 'mediumseagreen';
  }

  for (let i = 0; i < formSignUp.elements.length; i++) {
    if (formSignUp.elements[i] != formSignUp.buttonSignUp && formSignUp.elements[i] != formSignUp.choose) formSignUp.elements[i].value = '';
  }

});














