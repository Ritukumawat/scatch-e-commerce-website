const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const usersRouter = require('./routes/ownersRouter');
const ownersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const db = require('./config/mongoose-connection')

app.set("view engine", "ejs");
app.use( express.json());
app.use( express.urlencoded( {extended:true}));
app.use( express.static( path.join( __dirname,'public')));
app.use( cookieParser());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/owners", ownersRouter);

app.get("/", (req, res)=>{
    res.send("scatch");
})

app.listen(3000);