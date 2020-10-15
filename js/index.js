import login from "./modules/login.js";
import basket from "./modules/basket.js";

var caja = document.getElementById("caja");

window.cargar = login.cargar;
window.registrar = login.registrar.bind(login);

window.suma1 = basket.suma1;
window.suma2 = basket.suma2;
window.ganador = basket.ganador;

document.getElementById("login").addEventListener("click",()=>{
    caja.innerHTML = login.data;
    login.cargar();
})

document.getElementById("basket").addEventListener("click",()=>{
    caja.innerHTML = basket.data;
    
})