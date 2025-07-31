import express from "express"
import dotenv from "dotenv"
// import dbconfig from "./configs/db_config"
const serverconfig = require('./configs/server_config');

dotenv.config();
const app = express();
const PORT=serverconfig.PORT;

// mongoose.connect(dbconfig.DB_URL)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
