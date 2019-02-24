const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const routes = require('./routes/handlers')
const {mongoose} = require('./dbConnection/mongo');
const helmet = require('helmet');


const app = express();
app.use(helmet());

app.engine('hbs',hbs({
    extname:'hbs',
    layoutsDir:__dirname+'/views/layouts/',
    defaultLayout:'main',
    partialsDir:'/partials/'}))
app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.use('/',routes)



app.listen(3000, ()=>{
    console.log('server is up');
});