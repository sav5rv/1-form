const express = require('express')
const app = express()
const port = 3000

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('pag1');
})



app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`);
    console.log(`Servidor executando na porta ${port}`);
    console.log('***');
    console.log('******');
});
