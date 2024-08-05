const label = document.querySelector('.main__sidebar--label');
const textarea = document.querySelector('.main__content--input');

let trocas = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a','ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]);


// setTimeout()

textarea.addEventListener("input", testarMensagem);

function testarMensagem(e){
    const p = document.querySelector('.main__content--text'); 
    if(!eMinuscula(e.target.value)){
        p.style.color = 'red';
        p.style.fontWeight = '800';
    }else{
        p.style.color = '';
        p.style.fontWeight = '';
    }
}

function eMinuscula(string){
    let regex = new RegExp('^[!-@a-zç \n]*$');
    if(regex.test(string)){
        return true;
    }
    return false;
}

// UMA UNICA FUNÇÃO COM PARAMETROS KEY E VALUE TROCADOS

function liberarAreaMensagem(){

    
    
    label.classList.remove('show');    
    label.style.display = "block";
    document.querySelector('.main__sidebar--img').style.display = "none";
    document.querySelector('.main__message--highlight').style.display = "none";
    document.querySelector('.main__message--secondary').style.display = "none";
    document.querySelector('.button-copiar').style.display = "initial";
    document.querySelector('.main__sidebar').style.justifyContent = "space-between";

    setTimeout(() => {
        label.classList.add('show');
    }, 1500);

}

function restaurar(){
    //document.querySelector('.main__sidebar--element').style.display = "inline";
    //document.getElementById('main__message--highlight').style.display = "inline";
    //document.getElementById('main__message--secondary').style.display = "inline";
    //document.querySelector(".main__sidebar--label").style.opacity = "0";
    //document.querySelector(".main__sidebar--label").style.visibility = "hidden";
    //document.querySelector(".main__sidebar--label").innerHTML = "";
}

function criptografar(){
    let text = textarea.value;

    if(!eMinuscula(text)){
        alert('Apenas letras minúsculas e sem acento!');
        return;
    }

    liberarAreaMensagem();
    
    let msg = text;
    let regex;

    for (let [key, val] of trocas.entries()){
        regex = new RegExp(key, 'g');
        msg = msg.replace(regex, val);
    }
    
    textarea.value = '';
    setTimeout(() => {
        label.innerHTML = msg;
    }, 1500);
}

function descriptografar(){
    let text = textarea.value;

    if(!eMinuscula(text)){
        alert('Apenas letras minúsculas e sem acento!');
        return;
    }

    liberarAreaMensagem();

    let msg = text;
    let regex;

    for (let [key, val] of trocas.entries()){
        regex = new RegExp(val, 'g');
        msg = msg.replace(regex, key);
    }

    textarea.value = '';
    setTimeout(() => {
        label.innerHTML = msg;
    }, 1500);
}

function copiar(){
    let msg = label.innerHTML;
    navigator.clipboard.writeText(msg);
}