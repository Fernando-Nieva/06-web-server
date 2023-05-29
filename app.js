const express = require('express')
const hbs = require('hbs');
require('dotenv')=config();

const app = express()
const port=process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido statico
app.use(express.static('./public/road'));

app.get('/',  (req, res) =>{
  res.render('home',{
    nombre:'Fernando Nieva',
    titulo:'Node Curse'
  })
});
app.get('/generic',  (req, res) =>{
  res.render('generic',{
    nombre:'Fernando Nieva',
    titulo:'Node Curse'
  })
});
app.get('/elements',  (req, res) =>{
  res.render('elements',{
    nombre:'Fernando Nieva',
    titulo:'Node Curse'
  })
});




// app.get('/generic',  (req, res) =>{
//   res.sendFile(__dirname+'/public/road/generic.html');
// });
// app.get('/elements',  (req, res) =>{
//   res.sendFile(__dirname+'/public/road/elements.html');
// });

app.get('*',  (req, res) =>{
  res.sendFile(__dirname+'/public/404.html');
    // res.send('404|page not found')
  });

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})