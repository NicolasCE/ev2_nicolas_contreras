export default{
    puntajes: [
        {alumno:"Pablo Rojas", puntaje: 9 , resultado: "BUENO"}
    ],
    data: `
        <h3>Autor: Nicolas Contreras</h3>
        Alumno <br>
        <input id="txt1" type="text"/><br/>
        Puntaje<br>
        <select id="puntaje">
            <option value=0>0</option>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
            <option value=8>8</option>
            <option value=9>9</option>
            <option value=10>10</option>
        </select>
        <br><br><br><br><br><br><br><br><br><br><br>
        <button onclick="registrar()">registrar</button>
        <br>
        <p id="error"></p>
        <div id="result"></div>
    `,
    cargar: function () {
        var result = document.getElementById("result");
        var tabla = `
                <table border='1' width='400'>
                    <tr>
                        <th>Alumno</th>
                        <th>puntaje</th>
                        <th>resultado</th>
                    </tr>
          `;

        this.puntajes.forEach((item) => {  
          var color = "r_malo";
          if(item.resultado=="REGULAR"){
              color = "r_regular";
          } else if(item.resultado=="BUENO"){
                color = "r_bueno";
          }else if(item.resultado=="MASTER"){
                color = "r_master";
          }
          
            tabla += `
                <tr class="${color}">
                  <td>${item.alumno}</td>
                  <td>${item.puntaje}</td>
                  <td>${item.resultado}</td>
                </tr>
              `;
        });
    
        tabla += "</table>";
    
        result.innerHTML = tabla;
      },
    registrar: function () {
        var nombre = document.getElementById("txt1").value;
        var puntaje = document.getElementById("puntaje").value;
        var result = document.getElementById("result");
        var resultado;
        var resultado = document.getElementById("error");
    
        if (puntaje>=0 && puntaje<=3) {
            resultado="MALO";

        } else if(puntaje>=4 && puntaje<=7){
            resultado="REGULAR";
            
        } else if(puntaje>=8 && puntaje<=9){
            resultado="BUENO";
        } else if(puntaje>=10){
            resultado="MASTER";
        }
        

        if (nombre.value != "") {
          var obj = {
            alumno: nombre,
            puntaje: puntaje,
            resultado:resultado
          };
          
          this.puntajes.push(obj);  
          this.cargar(); 
          nombre.value ="";
          puntaje.value = "0";
          
        } else {
          error.innerHTML = `Error`;
          error.style.color="red";
        }


      },

};