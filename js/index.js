var button = document.getElementById("cadastrar");
const username = document.getElementById("username");
const password = document.getElementById("password");

function cadastrar(event){
    event.preventDefault();
    const dados = {
        "login":username.value,
        "senha":password.value
    }

    fetch("https://santander-jwt-teste.herokuapp.com/api/usuarios",{
        method: "POST",
        body: dados,
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>{
        if(response.ok){
            alert("Cadastrado com Sucesso!")
        }else{
            alert("Falha ao Cadastrar!")
        }
    })
}

button.addEventListener("click", cadastrar, false);