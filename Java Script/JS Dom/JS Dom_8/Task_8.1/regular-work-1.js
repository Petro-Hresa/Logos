let qerSell =x=> document.querySelector(x);
let formSignUp = document.forms['form-signUp'];
let label = document.getElementsByClassName('label__inputs');
let boxError = document.getElementsByClassName('errorEnter');
for(let i = 0; i < formSignUp.elements.length; i++) {
    //Function click on input
    formSignUp.elements[i].addEventListener('click', function () {
        label[i].classList.add('active__inputs_form-signUp');
        setTimeout(function () {
            formSignUp.elements[i].style.display = 'block';
            formSignUp.elements[i].focus();
        }, 100)
        $('#phone').mask("+38(999) 999-99-99")
    });
  //function click on button
  qerSell('#btn__form-signUp').addEventListener('click', function () {
    let regExpOfInput;
    switch (i){
        case 0:
             regExpOfInput = /^[A-z]{1,20}$/.test(formSignUp.elements[0].value);
        break;

        case 1:
            regExpOfInput = /^[A-z]{1,20}$/.test(formSignUp.elements[1].value);
        break;

        case 2:
             regExpOfInput = /^[A-z0-9\.-]+@[A-z0-9-]+\.[a-z]{2,5}$/.test(formSignUp.elements[2].value);
        break;

        case 3:
             regExpOfInput = /^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formSignUp.elements[3].value);
        break;

        case 4:
             regExpOfInput = /^[A-z0-9]{8,15}$/.test(formSignUp.elements[4].value);
        break;
        }

    if(regExpOfInput == true){
        boxError[i].style.opacity= 0;
        label[i].classList.remove('active__inputs_form-signUp','bed__enters');
        label[i].classList.add('active__inputs_form-signUp', 'good__enters');
        label[i].childNodes[3].style.display = 'block';
        label[i].childNodes[5].style.display = 'none';
    }else{
        boxError[i].style.opacity= 1;
        label[i].childNodes[3].style.display = 'none';
        label[i].childNodes[5].style.display = 'block';
        label[i].classList.add('active__inputs_form-signUp','bed__enters');
    }
  });
};

















