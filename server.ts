import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import aboutRoutes from "./routes/aboutRoutes";
import skillRoutes from "./routes/skillRoutes"
import internshipRoutes from "./routes/internshipRoutes"
import certificationRoutes from "./routes/certificationRoutes"
import projectRoutes from './routes/projectroutes'
import educationRoutes from './routes/educationRoutes'
import introsection from "./routes/intosectionRoutes"

const dbconfig=require("./configs/db_config")
const serverconfig = require('./configs/server_config');



const app = express();
app.use(express.json())
app.use(cors());
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
app.use("/portfolio/api/v1/user", skillRoutes)
app.use("/portfolio/api/v1/user", internshipRoutes)
app.use("/portfolio/api/v1/user",certificationRoutes)
app.use("/portfolio/api/v1/user",projectRoutes)
app.use("/portfolio/api/v1/user",educationRoutes)
app.use("/portfolio/api/v1/user",introsection)

//server connected:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
