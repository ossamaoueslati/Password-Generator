const passwordBox = document.getElementById("password");
document.querySelector('input[type="range"]').addEventListener( 
    "input", (e) => { 
        document.querySelector( 
            "div.range span").innerHTML = e.target.value; 
             
    }); 
const lenght = document.getElementById("range").value;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*()_+/-=";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () =>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}

/* document.querySelector('input[type="range"]').addEventListener( 
    "input", (e) => { 
        document.querySelector( 
            "div.range span").innerHTML = e.target.value; 
             
    });  */