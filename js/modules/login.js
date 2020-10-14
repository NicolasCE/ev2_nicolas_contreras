export default {
    data: `
        <h1> Alumno </h1>
        <input id="txt" type="text">
        <br><br>
        Puntaje <br>
        <select id="Puntaj">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <br><br><br><br><br><br><br><br><br><br><br>
        <button onclick="resgistrar()">Registrar</button>
        <p id="resp"></p>
     
    `,
    registrar: () =>{
        var result = document.getElementById("result");
        var tabla = `
            <table>
                <tr>
                    <th>Alumno</th>
                    <th>Puntaje</th>
                    <th>Resultado</th>
                </tr>
            </table>

        `;
    },

};