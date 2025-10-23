var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: "Sistema de Biblioteca",
    })
});

router.post('/login', function(req,res,next){
  const {usuario, senha} = req.body;
  if(usuario === 'tiaogaviao@gmail.com' && senha === '123'){
    res.send("Deu certo! Faz de conta que você está no dashboard");
  }
  else{
    res.render('index', 
    {
      title: "Sistema de Biblioteca",
      erro: "Usuário/Senha Inválidos"
    })
  }
});

router.get('/listagem', function (req,res, next){
  res.send('Aqui vai aparece a lista de livros!')
});

module.exports = router;
