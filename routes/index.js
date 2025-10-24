var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: "Sistema de Biblioteca",
    })
});

router.post('/login', async function(req,res,next){
  const {usuario, senha} = req.body;

  console.log('Estou no index.js - POST /login');
  console.log('Dados recebidos do Formulario', usuario,senha)

  const user = await global.banco.getUsuario(usuario, senha);

  console.log('Dados recebido do BD:', user);

  if(user && user.length > 0){
    global.usuario = user;
    res.redirect('/dashboard');
  }
  else{
    res.render('index', 
    {
      title: "Sistema de Biblioteca",
      erro: "Usuário/Senha Inválidos"
    })
  }
});

router.get('/dashboard', function (req,res, next){
  res.render('dashboard')
});

module.exports = router;
