const url = "http://67.202.28.16:3000/api/consul5/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NOMBRES_APELLIDOS = document.getElementById("NOMBRES_APELLIDOS");
const DNI = document.getElementById("DNI");
const NACIMINETO = document.getElementById("NACIMIENTO");
const EMAIL = document.getElementById("EMAIL");
const PASSWORD = document.getElementById("PASSWORD");

let option = '';


btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    option = 'crear';
});


formArticulo.addEventListener('submit',
    (e) => {
    e.preventDefault();
    if (option == 'crear') {
        if( NOMBRES_APELLIDOS.value == "" ||DNI.value== ""||NACIMINETO.value== ""|| EMAIL.value== ""|| PASSWORD.value=="") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;

        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            NOMBRES_APELLIDOS: NOMBRES_APELLIDOS.value,
                            DNI: DNI.value,
                            NACIMINETO: NACIMINETO.value,
                            EMAIL: EMAIL.value,
                            PASSWORD: PASSWORD.value
                        }
                    )
                }
            )
            .then(
                response => response.json()
            )
            .then(
                response => location.reload()
            );
        }
    } else if(option == 'editar'){
        console.log("Activado el ");
    }
}
);
