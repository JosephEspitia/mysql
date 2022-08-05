import mysql from "mysql";
let todos;
//crear coneccion

const conector = mysql.createConnection({
  host: "localhost",
  user: "josephEspitia",
  password: "2010241034",
  database: "agenda_contactos",
});

const con = () => {
  conector.connect((err) => {
    if (err) throw err;
    console.log("mysql connected");
  });
};

const agregarContacto = (num, name) => {
  const sql = `INSERT INTO agend (id_agenda, nombre, numero) VALUES (${null}, "${name}", ${num})`;
  conector.query(sql, function (e, res, field) {
    if (e) throw e;
    console.log(res);
  });
};

const getsContacts =() => {
 const sql = 'SELECT * FROM agend';
 conector.query(sql, function(err, result, field) {
    todos = result
 })
/*  console.log(todos) */
 return todos;
};

const deleteContacts =(id)=>{
    const sql = `DELETE FROM agend where id_agenda=${id}`;
    conector.query(sql)
}

export { con, agregarContacto, getsContacts, deleteContacts };
