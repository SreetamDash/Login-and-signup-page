// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;

// name validation
if(name.length < 3){
document.getElementById("nameError").innerText="Name must be at least 3 characters";
valid=false;
}else{
document.getElementById("nameError").innerText="";
}

// email validation
let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerText="Enter valid email";
valid=false;
}else{
document.getElementById("emailError").innerText="";
}

// password validation
if(password.length < 6){
document.getElementById("passwordError").innerText="Password must be 6 characters";
valid=false;
}else{
document.getElementById("passwordError").innerText="";
}

// confirm password
if(password!==confirmPassword){
document.getElementById("confirmError").innerText="Passwords do not match";
valid=false;
}else{
document.getElementById("confirmError").innerText="";
}

if(valid){

let user={
name:name,
email:email,
password:password
};

localStorage.setItem("user",JSON.stringify(user));

alert("Signup Successful!");

window.location.href="index.html";

}

});

}


// LOGIN

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let storedUser=JSON.parse(localStorage.getItem("user"));

if(storedUser && email===storedUser.email && password===storedUser.password){

document.getElementById("loginMessage").style.color="green";
document.getElementById("loginMessage").innerText="Login Successful!";

}else{

document.getElementById("loginMessage").style.color="red";
document.getElementById("loginMessage").innerText="Invalid Email or Password";

}

});

}