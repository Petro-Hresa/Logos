let start= prompt('Введіть Імя');
let name ='Імя';

if(start === name){

  let enterPass = prompt('Введіть пароль'),
      password = 'пароль';

    if(enterPass === password){
     alert('Ласкаво просимо');

    }else if(enterPass == null){
           alert('Вхід скасований');

    }else{alert('Пароль невірний');}


}else if(start == null){
         alert('Вхід скасований');

}else{alert('Я вас не знаю');}
