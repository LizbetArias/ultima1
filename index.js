// Importar librerias


import express, { json } from "express";
import { createConnection } from "mysql";
var app = express();
import cors from "cors";


// Configuraciones


app.use(json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



var conexion = createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "prueba"
    }
);


conexion.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log("Conexion Exitosa");
        }
    }
);


const port = process.env.PUERTO || 3000;


app.listen(
    port, function () {
        console.log("Servidor funcionando en puerto: " + port)
    }
);


// localhost: 3000
app.post(
    "/api/consul", (req, res) => {
        let data = {
            NOMBRES_APELLIDOS: req.body.NOMBRES_APELLIDOS,
            EMAIL: req.body.EMAIL,
            MSG: req.body.MSG,
            PASSWORD: req.body.PASSWORD
           
        }
        let sql = "INSERT INTO consul SET ?";
        conexion.query(
            sql, data, function (error, resultados) {
                if (error) {
                    throw error;
                } else {
                    console.log(data),
                    res.send(data)
                }
            }
        );
    }
);