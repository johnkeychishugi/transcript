import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import routers from './routers/';


const app = express();


app.engine('handlebars',exphbs({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//initialize Routers
app.use(routers);
app.get('/',(req,res)=> res.render('index'));
//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server run on port ${PORT}`));