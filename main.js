let logInEmail = document.getElementById("logInEmail")
let signUpEmail = document.getElementById("signUpEmail")
let logInPassword = document.getElementById("logInPassword")
let signUpPassword = document.getElementById("signUpPassword")
let signUpName = document.getElementById("signUpName")
let signIn = document.getElementById("signIn")
let signUp = document.getElementById("signUp")
let logOut = document.getElementById("logOut")
let Reapeted = document.getElementById("Reapeted")
let InvalidName = document.getElementById("InvalidName")
let InvalidEmail = document.getElementById("InvalidEmail")
let failLog = document.getElementById("failLog")
let navLog = document.getElementById("navLog")
const adminEmail = "admin@gmail.com"
const adminPassword = "Admin123"
let userList = [];
if(localStorage.getItem("user") == null){
    userList = []
}else{
    userList = JSON.parse(localStorage.getItem("user"))
}

function addUser(){
    let checkReapet = userList.findIndex((el)=>{
        return el.name == signUpName.value && el.email == signUpEmail.value 
    })
    let regName = /^[A-Za-z]{3,}$/ 
    let regEmail = /^\w{3,20}@[a-zA-Z_-]{3,15}\.[a-zA-Z]{2,3}$/ 
    if(regName.test(signUpName.value) == true){
        if(regEmail.test(signUpEmail.value) == true){
            if(checkReapet == -1 ){
                let List = {
                    name : signUpName.value ,
                    email : signUpEmail.value ,
                    password: signUpPassword.value
                }
                userList.push(List)
                localStorage.setItem( "user" , JSON.stringify(userList))
                window.location.href = "Login.html"    
            }else{
                Reapeted.style.display = "flex"
            }
        }else{
            InvalidEmail.style.display = "flex"
        }
    }else{
        InvalidName.style.display = "flex"
    }
}

function userLogIn() {
    let checkExist = userList.find((el)=>{
        return el.password == logInPassword.value && el.email == logInEmail.value 
    })
    if( adminEmail === logInEmail.value  && adminPassword === logInPassword.value ){
        window.location.href = "./Admin/adminHome.html"
        logOut.style.display = "inline"
        navLog.style.display = "none"
    }
    if(checkExist == undefined){
        failLog.style.display = "flex"
    }else{
        localStorage.setItem("currentUser" , checkExist.name)
        window.location.href ="index.html"
    }
}

function deleteUser() {
    localStorage.removeItem("currentUser")
    window.location.href ="index.html"
    logOut.style.display ="none"
    navLog.style.display = "inline"
}

function checkPages() {
    if(localStorage.getItem("currentUser") == null){
    window.location.href ="Login.html"
    }else{
        logOut.style.display ="inline"
        navLog.style.display = "none"
    }
}
function changeLogIcon() {
    if(localStorage.getItem("currentUser") == null){
        document.getElementById("wishLink").style.display = "none"
        document.getElementById("ordersLink").style.display = "none"
        document.getElementById("cartLink").style.display = "none"
    }else{
        logOut.style.display ="inline"
        navLog.style.display = "none"
        document.getElementById("wishLink").style.display = "inline"
        document.getElementById("ordersLink").style.display = "inline"
        document.getElementById("cartLink").style.display = "inline"
    }
}
changeLogIcon()


//check if he is in the signUP or signIN page 
    signUp?.addEventListener("click" , addUser)
    signIn?.addEventListener("click" , userLogIn)
    logOut?.addEventListener("click" , deleteUser)
//success log in 
    if(localStorage.getItem("currentUser") !== null){
        document.getElementById("welcomeMsg").innerHTML = "Welcome " + localStorage.getItem("currentUser")
    }