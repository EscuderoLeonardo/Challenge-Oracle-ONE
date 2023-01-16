let btnEnc = document.querySelector('.buttonEnc');
let text = document.querySelector('.insert').value;;
btnEnc.addEventListener('click', encriptar);
let btnDes = document.querySelector('.buttonDes');
btnDes.addEventListener('click', desencriptar);
let btnCop = document.querySelector('.buttonCop');
btnCop.addEventListener('click', copiar);
let resultadoTexto = document.querySelector('.result');
let aux = true;

function copiar() {
    let copiado = document.querySelector("#palabras-de");
    copiado.select();
    document.execCommand("copy");
  }


function eliminarH1(){
    if (aux){
        document.querySelector('.text2-h1').remove()
        resultadoTexto.style.display = 'block'
        document.querySelector('.muñeco').style.display = 'none'
        document.querySelector('.text2-p').remove()
        aux = false;
    }
}


function encriptar(){
    eliminarH1()
    text = document.querySelector('.insert').value;
    text = text.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    document.querySelector('.result').innerHTML = text
    btnCop.style.display = 'block'
}



function desencriptar(){
    eliminarH1()
    text = document.querySelector('.insert').value;
    text = text.toLowerCase();
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    document.querySelector('.result').innerHTML = text
}