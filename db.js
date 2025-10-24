const mysql = require('mysql2/promise');

async function conectar() {
    if(global.conexao && global.conexao.state !== 'disconnected') return global.conexao;
    const conexao = await mysql.createConnection({
        host    : 'localhost',
        port    : 3306,
        user    : 'root',
        password: 'root',
        database: 'biblioteca'
    });
    console.log('Conectou no MySQL');
    global.conexao = conexao;
    return global.conexao;
}

conectar();

async function getUsuario(usuario, senha) {
    const conex = await conectar();
    const sql = "SELECT * FROM usuarios WHERE usuario=? AND senha=?;";
    const [registros] = await conex.query(sql,[usuario,senha]);
    return registros;
}

module.exports = {getUsuario}