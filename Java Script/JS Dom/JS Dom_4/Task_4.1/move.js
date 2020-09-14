let f1 = document.forms['f1_move'];
//Create items form
for(let i = 0; i < f1.elements.length; i++){
    f1.elements[i].classList.add('input-text__style');
    f1.elements[1].classList.add('btn');
    f1.elements[3].style.width = '94.5%';

  f1.elements[1].addEventListener('mouseenter',()=>{
    if( f1.elements[i] == f1.elements[1]) f1.elements[1].style.background ='ForestGreen';
  });

  f1.elements[1].addEventListener('mouseleave',()=>{
    f1.elements[1].style.background ='LimeGreen';
  });

  f1.elements[i].addEventListener('focus',()=>{
    if( f1.elements[i] == f1.elements[1]) f1.elements[1].style.boxShadow = '0 0 1px 2px rgba(50, 205, 50 , .40)';
    else f1.elements[i].style.boxShadow = '0 0 2px 2px rgba(100, 149, 237 , 0.40)';
  });

  f1.elements[i].addEventListener('blur',()=>{
    f1.elements[i].style.boxShadow = 'none';
    f1.elements[1].style.boxShadow = 'none';
  });
}

//Function of the Button
f1.button.addEventListener('click',function() {
  if( f1.inpLeft.value != ''){
    f1.inpRight.value =  f1.inpLeft.value
    f1.inpLeft.value = '';
  }
});

//Function blur for Placeholder
f1.inpPlaceholder.addEventListener('blur',function(){
  f1.inpPlaceholder.placeholder = f1.inpPlaceholder.value;
  f1.inpPlaceholder.value = '';
});
