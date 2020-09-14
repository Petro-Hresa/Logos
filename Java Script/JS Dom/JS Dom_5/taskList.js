let selAll =(x)=> document.querySelector(x);

let boxTask = [];

//Function focus input
selAll('#enter-task').addEventListener('click',()=>{
  selAll('#add-task').style.boxShadow = '';
});

// Function Click on button add list
selAll('#add-task').addEventListener('click',function(){

  if(selAll('#enter-task').value == ''){

    //Creation Error Enter
      let errorEnter = document.createElement('div');
      errorEnter.classList.add('error');
      errorEnter.innerHTML = `<p style="font-weight: bold">Попередження!</p>Пусте поле не можна добавити `;
      selAll('.tablet').appendChild(errorEnter);

      //    Close Error
      let closeErrorEnter = document.createElement('div');
      closeErrorEnter.classList.add('close__error');
      errorEnter.appendChild(closeErrorEnter);

      closeErrorEnter.addEventListener('click', function () {
        errorEnter.style.display = 'none';
        selAll('#add-task').style.boxShadow = '';
      });

  }else{
x
    // Creation and Add task
    let leftBox = selAll('.left__box');

    //Wrapper Task
    let wrapTask = document.createElement('div');
        wrapTask.style.margin = '10px 0';
        leftBox.appendChild(wrapTask);

    // Creation Checkbox
    let creatInput = document.createElement('input');
    creatInput.setAttribute('type','checkbox');

    // Creation name task
    let wrapNameTask = document.createElement('span');
        wrapNameTask.innerHTML = `${selAll('#enter-task').value}`;
        wrapTask.appendChild(creatInput);
        wrapTask.appendChild(wrapNameTask);
        boxTask.push(wrapTask);
        selAll('#enter-task').value = '';


    creatInput.addEventListener('click',function(){

      selAll('#add-task').style.boxShadow = '';

      if(boxTask.length > 1){
        wrapTask.style.display = 'none';
        boxTask.splice(1,1);
      }else{

        //Creation Error Delete task
        let errorDeleteTask = document.createElement('div');
        errorDeleteTask.classList.add('error');
        errorDeleteTask.innerHTML = `<p style="font-weight: bold">Попередження!</p>Останній таск зі списку Ви не можете видалити`;
        selAll('.tablet').appendChild(errorDeleteTask);

        // Close Error Delete Task
        let closeErrorDeleteTask =  document.createElement('div');
            closeErrorDeleteTask.classList.add('close__error');
            errorDeleteTask.appendChild(closeErrorDeleteTask);

        closeErrorDeleteTask.addEventListener('click',function(){

          errorDeleteTask.style.display = 'none';
          selAll('#add-task').style.boxShadow = '';

        });

      }
      this.checked = false;
    })

  }
 this.style.boxShadow = '0 0 0 2px #A9A9A9';
});






