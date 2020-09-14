let request = prompt('Введіть пароль');
let password = "пароль";
let res = 3;
while(request !== password){

  if( res == 0 ){
    alert('Попробуйте пізніше')

    if(request = "пароль"){
      alert(noll);
    }
  }
    if(res > 0){
      alert(`В вас залишилося ${res} спроб`);
      res--;
      request = prompt('Введіть пароль');

    }

}
alert('Ласкаво просимо');
