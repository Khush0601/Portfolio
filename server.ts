import express from "express"
import mongoose from "mongoose"

const dbconfig=require("./configs/db_config")
const serverconfig = require('./configs/server_config');



const app = express();
const PORT=serverconfig.PORT;

// db connected:
mongoose.connect(dbconfig.DB_URL)
const db=mongoose.connection;
db.on('error',()=>{
  console.log('error while connection to db')
})

db.once('open',()=>{
  console.log('connected to db')
})

//server connected:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
