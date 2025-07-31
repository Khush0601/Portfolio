import express from "express"
import mongoose from "mongoose"
import aboutRoutes from "./routes/aboutRoutes";
const dbconfig=require("./configs/db_config")
const serverconfig = require('./configs/server_config');



const app = express();
app.use(express.json())

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

app.use("/portfolio/api/v1/user", aboutRoutes)

//server connected:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
