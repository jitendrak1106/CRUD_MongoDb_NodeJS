const express = require("express");
const dbconn = require("./db/conn");
const router = require("./routers/mensRouter");


const app = express();

const PORT = 3000;


app.use(express.json());
app.use(router);


app.listen(PORT, (req, res)=>{
    console.log(`Successfullly Connected to port ${PORT} `);
});