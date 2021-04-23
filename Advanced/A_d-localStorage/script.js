const querySell = x => document.querySelector(x);

const signUp = document.forms['sign-up'];
const signIn = document.forms['sign-in'];


// function toggle between forms
(function showHideForm(){

    querySell('#sigin-in-now').addEventListener('click',()=>{

        querySell('.sign-up').style.display = "none";
        querySell('.sign-in').style.display = "block";
    
    })

    querySell('#sigin-up-now').addEventListener('click',()=>{

        querySell('.sign-in').style.display = "none";
        querySell('.sign-up').style.display = "block";

    })

})()


querySell('#button-signIn').addEventListener('click', checkFormSignIn)

function checkFormSignIn(event){
    event.preventDefault();

    if(localStorage.length == 0){
        creatError(querySell('#button-signIn'), 'localstorage is empty');
    }


}

function creatError(parent, str){

    if(!parent.children.length){
        let error = document.createElement('div')
        error.classList.add('error');
        error.innerHTML = str;
        parent.appendChild(error);
    }

}



function hiddenError(){
   
    for(let i = 0; i < signIn.elements.length; i++){

        if(signIn.elements[i].classList.contains("input-field")){
            signIn.elements[i].addEventListener('blur', ) 
            console.log(signIn.elements[i])
        
        }    
    }

}






class User{
    constructor(firstName, lastName, email, password){
        this.name = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

let users = [];



querySell('#button-signUp').addEventListener('click', createUser);

let inputField = document.querySelectorAll('.input-field');

function createUser(event){


    event.preventDefault();

    let firstName;
    let lastName;
    let email;
    let password;

    const correctEnter = []

    
   for(let i = 0; i < inputField.length; i++){
    let regExp;

        switch(inputField[i].name){
            case "firstName":
                regExp  = /^[A-z]{3,20}$/.test(signUp.firstName.value);
                if(regExp)firstName = signUp.firstName.value;
            break;

            case "lastName":
                regExp = /^[A-z]{3,20}$/.test(signUp.lastName.value);
                if(regExp) lastName =  signUp.lastName.value;
            break;

            case "email":
                regExp  = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/.test(signUp.email.value);
                if(regExp) email = signUp.email.value;
            break;

            case "password":
                regExp = /^\w{4,15}$/.test(signUp.password.value);
                if(regExp) password = signUp.password.value;
            break;
        }
       

        correctEnter.push(regExp)
        if(regExp){

             inputField[i].value = '';

        }
        else{
            console.log(inputField[i].parentNode.className)
            let parentInput = inputField[i].parentNode.className;
            // querySell('.error').style.position = 'static';

           
            creatError(querySell('.'+ parentInput), 'Inputs is empty');
            inputField[i].style.boxShadow = '0 0 0 2px red';
        } 

    }
    
     
    let itemsTrue = (boolean) => boolean == true;
    console.log(correctEnter.every(itemsTrue))
    if(correctEnter.every(itemsTrue)){

        let user = new User(firstName,lastName,email ,password);
        if(localStorage.length > 0 && localStorage.getItem("Users")){
            users = JSON.parse(localStorage.getItem("Users"));
                        
        }
        users.push(user)
        localStorage.setItem("Users", JSON.stringify(users));
    }

     
        
    
   
       

    
       
       





}
    // let firstName = /^[A-z]{3,20}$/.test(signUp.firstName.value);

    // let lastName = /^[A-z]{3,20}$/.test(signUp.lastName.value);

    // let email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/.test(signUp.email.value);

    // let password = /^\w{4,15}$/.test(signUp.password.value);


    // if(firstName && lastName && email && password){

    //     let user = new User(signUp.firstName.value, signUp.lastName.value, signUp.email.value, signUp.password.value);

    //   
    //     users.push(user)
    //     localStorage.setItem("Users", JSON.stringify(users));
    //     inputField.forEach((item) => item.value = '')
       
    // }else{
    //     // this.style.boxShadow = '0 0 0 2px hsl(0, 83%, 67%)';
    //     creatError(querySell('#button-signUp'), 'Inputs is empty')
    //     inputField.forEach((item) => {
    //         if(item.value = "") creatError(querySell('#button-signUp'), 'Inputs is empty')
    //     })

    // }   


    // for(let i = 0; i < inputField.length; i++){
       
   

    // }

   
    






    // let firstName = /^[A-z]$/.test(signUp.firstName.value);

    // let lastName = /^[A-z]$/.test(signUp.lastName.value);

    // let email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/.test(signUp.email.value);

    // let password = /^[a-z0-9]{4,9}$/.test(signUp.password.value);

    // let user = new User(firstName, lastName, email, password);

    // let enterCorrect = [];
    // inputField.forEach((item) => item.value != '' ? enterCorrect.push(true): enterCorrect.push(false)); 

 


        // inputField.forEach((item) => {

        //     if(  item.value != ''){
        //         item.style.boxShadow = '';
                 
        //     }else{

        //         creatError(querySell('#button-signUp'), 'Inputs is empty');
        //         item.style.boxShadow = '0 0 0 2px hsl(0, 83%, 67%)';

                

        //     item.onfocus = function(){
        //         this.style.boxShadow = '';
        //     }
            

        // })
      
        //  
        //     // creatError(querySell('#button-signUp'), 'Inputs is empty');
        //     item.style.boxShadow = '0 0 0 2px hsl(0, 83%, 67%)';
        // }

            // inputField[i]
            
           
            //     if(email){
                    
                    
            //         if(localStorage.length > 0 && localStorage.getItem("Users")){
            //             users = JSON.parse(localStorage.getItem("Users"));
                
            //         }

            //         users.push(user)
            //         localStorage.setItem("Users", JSON.stringify(users));
            //         inputField[i].value = ''
            //     }else{

            //         //  creatErrorEmpty('email is dosen\'t correct', signUp.email )

            //  } 

            
            // }else{
        
            //   

  
    
    


 
    // function checkDataIdentity(users){

    //     for(let user in users){

    //         for(let i in users){

    //             if(users[user].email)
    //             console.log(users[user].email)
    //             console.log(users[i-1].email)

    //         }
    // nputField.forEach((item) => {

        //     if(  item.value != ''){
        //         item.style.boxShadow = '';
                 
        //     }else{

        //         creatError(querySell('#button-signUp'), 'Inputs is empty');
        //         item.style.boxShadow = '0 0 0 2px hsl(0, 83%, 67%)';

                // }