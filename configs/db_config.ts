import dotenv from 'dotenv';
dotenv.config();
module.exports={
    DB_URL:process.env.MONGO_URL,
}