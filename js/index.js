import login from "./modules/login.js";
import basket from "./modules/basket.js";

var caja = document.getElementById("caja");

window.registrar = login.registrar;


document.getElementById('login de acceso').addEventListener("click", () => {
    caja.innerHTML = login.data;

} );

document.getElementById('basket').addEventListener("click", () => {
    caja.innerHTML = basket.data;


} );