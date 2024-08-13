const label = document.querySelector('.main__sidebar--label');
const textarea = document.querySelector('.main__content--input');

let traducao = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a','ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]);

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

function transformarTexto(texto, inverso) {
    if (!eMinuscula(texto)) {
        alert('Apenas letras minúsculas e sem acento!');
        return;
    }

    liberarAreaMensagem();

    let msg = texto;
    let regex;

    for(let [key, val] of traducao.entries()){
        regex = new RegExp(inverso ? val : key, 'g');
        msg = msg.replace(regex, inverso ? key : val);
    }

    textarea.value = '';
    setTimeout(() => {
        label.innerHTML = msg;
    }, 1500);
}

function criptografar() {
    let text = textarea.value;
    transformarTexto(text, false);
}

function descriptografar() {
    let text = textarea.value;
    transformarTexto(text, true);
}

function copiar(){
    let msg = label.innerHTML;
    navigator.clipboard.writeText(msg);
}