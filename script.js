let lista_nav = document.getElementById("lista_nav");
let chek_btn = document.getElementById("check")
let nav_bar = document.getElementById("navbar")
let page_1 = document.getElementById("perfil")

function ocultar_nav(){
    lista_nav.style.display = "none"
}

function teste_nav(){
    if (lista_nav.style.display == "none"){
        lista_nav.style.display = "block"
    } else {
        lista_nav.style.display == "none"
    }
    
}
