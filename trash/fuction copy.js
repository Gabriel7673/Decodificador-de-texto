let trocas = new Map([
    ['e', 'enter'],
    ['a','ai']
]);

function getElementInput(classe){
    return document.querySelector(classe).value;
}

// UMA UNICA FUNÇÃO COM PARAMETROS KEY E VALUE TROCADOS

function criptografar(){
    let text = getElementInput('.t');
    //let msg = '';
    /*for (let i = 0; i < text.length; i++){
        let code = trocas.get(text[i]);
        if(code !== undefined){
            msg += code;
        }else{
            msg += text[i];
        }
    }*/
    let msg = text;
    for (let [key, val] of trocas.entries()){
            //msg = text.replace(val, key); xxxxxxxxxxxxxxxxxxxx
            // Usa uma expressão regular com o modificador global 'g' para substituir todas as ocorrências
        let regex = new RegExp(key, 'g');
        msg = msg.replace(regex, val);
    }
    //let k = getKeyByValue(trocas, 'ai');
    console.log(msg);
}

function getKeyByValue(map, value) {
    for (let [key, val] of map.entries()){
        if (val === value) {
            return key;
        }
    }
    return null; // Retorna null se não encontrar o valor
}

function descriptografar(){
    let text = getElementInput('textarea.t');
    let msg = text;
    for (let [key, val] of trocas.entries()){
        //msg = text.replace(val, key); xxxxxxxxxxxxxxxxxxxx
        // Usa uma expressão regular com o modificador global 'g' para substituir todas as ocorrências
        let regex = new RegExp(val, 'g');
        msg = msg.replace(regex, key);
    }
    //let k = getKeyByValue(trocas, 'ai');
    console.log(msg);    
}