// ===============================================================
//                   Variaveis do modal                           
// ===============================================================

//                       Front end

let modal_front_end = document.getElementById("modal_front_end");
let btn_front_end = document.getElementById("openModalBtn_front_end");

//                       Back end

let modal_back_end = document.getElementById("modal_back_end");
let btn_back_end = document.getElementById("openModalBtn_back_end");

//                       Full stack

let modal_full_stack = document.getElementById("modal_full_stack");
let btn_full_stack = document.getElementById("openModalBtn_full_stack");


// ===============================================================
//             Botão para abrir o modal do front-end                             
// ===============================================================


btn_front_end.onclick = function () {
    modal_front_end.style.display = "block";
}


// ===============================================================
//            Botão para abrir o modal do back-end                              
// ===============================================================


btn_back_end.onclick = function () {
    modal_back_end.style.display = "block";
}

// ===============================================================
//            Botão para abrir o modal do full stack                             
// ===============================================================


btn_full_stack.onclick = function () {
    modal_full_stack.style.display = "block";
}


// ======================================================================
//    Fechar Modal apertando em "X" ou em qualquer lugar fora do modal                            
// =======================================================================

let span_front_end = document.getElementsByClassName("close_front_end")[0];
let span_back_end = document.getElementsByClassName("close_back_end")[0];
let span_full_stack = document.getElementsByClassName("close_full_stack")[0];

span_front_end.onclick = function () {
    modal_front_end.style.display = "none";
}

span_back_end.onclick = function () {
    modal_back_end.style.display = "none";
}

span_full_stack.onclick = function () {
    modal_full_stack.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_front_end || event.target == modal_back_end ||event.target == modal_full_stack ) {
        modal_back_end.style.display = "none";
        modal_front_end.style.display = "none";
        modal_full_stack.style.display = "none";
    }
}
