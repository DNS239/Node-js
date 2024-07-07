import {disconectTODataBase, databaseType}from "./utils/database.mjs";
import * as api from './utils/api.js'

api.getDataFromApi();

//import * as database from "./utils/database.mjs";
//const database = require("./utils/database.mjs");

disconectTODataBase();
// database.conectToDataBase("My-database");
// database.disconectTODataBase("My-database");
