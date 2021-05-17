const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'formulario.html'));
});

app.post('/saludar', function(req, res){
    res.send(`Hola ${req.body.nombre} "${req.body.apodo}" ${req.body.apellido}`);
})

app.listen(3150, function(){
    console.log('Ejecutando servidor 3150 ****');
})