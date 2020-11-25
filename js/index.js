var button = document.getElementById("logar");
const username = document.getElementById("username");
const password = document.getElementById("password");

function cadastrar(event){
    event.preventDefault();
    const dados = {
        "login":username.nodeValue,
        "senha":password.value
    }

    fetch("",{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        }
    })
}

button.addEventListener("click", cadastrar, false);