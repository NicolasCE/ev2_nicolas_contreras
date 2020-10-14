import login from "./modules/login.js";

var caja = document.getElementById("caja");

window.registrar = login.registrar;


document.getElementById('login de acceso').addEventListener("click", () => {
    caja.innerHTML = login.data;
    login.registrar();

} );

document.getElementById('basket').addEventListener("click", () => {
    caja.innerHTML = "<h1> basket </h1>";


} );