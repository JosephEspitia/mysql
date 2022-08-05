import express from "express";
import {con, agregarContacto, getsContacts, deleteContacts} from "./src/mysql.conector.js";
let todos
const app = express();
const port = process.env.PORT || '8000';


app.listen(port, function() {
    console.log(`app on port ${port}`);
})

//pug configuration
app.set("views", "./vistas");
app.set('view engine', "pug");

//statics files config.
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));

//dev tools
app.use(express.json())


app.get('/', function(req,res){
    /* res.send("app works!"); */
    /* con() */
    todos = getsContacts();
    res.render('index', {contactos:todos})
    
})

app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre;
    let numero = req.params.numero;
    agregarContacto(numero, nombre);
    res.redirect('/');
})

app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    deleteContacts(id);
    res.redirect('/')
})