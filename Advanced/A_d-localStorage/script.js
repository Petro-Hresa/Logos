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

function checkFormSignIn(){
 
    if(localStorage.length == 0){
        creatErrorEmpty('localstorage is empty', querySell('.error'))
    }else  createUser()


}

function creatErrorEmpty(str, box){

    if(querySell('.error').children.length == 0){
        let errorEmpty = document.createElement('div')
        errorEmpty.classList.add('error-empty-storage');
        errorEmpty.innerHTML = str;
        box.appendChild(errorEmpty);
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

let enterData = document.querySelectorAll('.enter-data');

function createUser(event){

    event.preventDefault();

    for( let i  = 0; i < enterData.length; i++){
         
        if(enterData[i].value != ''){
           
           
            let firstName = signUp.firstName.value;

            let lastName = signUp.lastName.value;

            let email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/.test(signUp.email.value);
        
            let password = signUp.password.value

            if(email){
                console.log(email)
                let user = new User(firstName, lastName, email, password )
                if(localStorage.length > 0 && localStorage.getItem("Users")){
                    users = JSON.parse(localStorage.getItem("Users"));
            
                }

                users.push(user)
                localStorage.setItem("Users", JSON.stringify(users));
            }else{

                 creatErrorEmpty('email is dosen\'t correct', signUp.email )

            } 
           
        }
    }
}
 
    // function checkDataIdentity(users){

    //     for(let user in users){

    //         for(let i in users){

    //             if(users[user].email)
    //             console.log(users[user].email)
    //             console.log(users[i-1].email)

    //         }

        
    //     }
    // }

//    checkDataIdentity(users)
    // localStorage.setItem("ssss", JSON.stringify("sssss"));



