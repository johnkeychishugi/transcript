import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import database from './config/database';
import path from "path";
import routers from './routers/';
import studentController from "./controllers/studentController";
import helpers from './helpers/helpers'

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Body Parser 
app.use(bodyParser.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//initialize Routers
app.use(routers);

app.get('/', studentController.getStudents);

const PORT = process.env.PORT || 5000;

// database connexion test
const testDbConnexion = async () => {
  try {
    await database.authenticate();
    console.log('Database Successfully Connected');
  } catch (error) {
    console.error('Error', error);
  }
};

testDbConnexion();

app.listen(PORT, console.log(`Server run on port ${PORT}`));