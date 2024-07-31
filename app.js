const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index')

const db = require('./config/mongoose-connection')
const expressSession = require('express-session');
const flash = require('connect-flash');
require("dotenv").config();

app.set("view engine", "ejs");
app.use( express.json());
app.use( express.urlencoded( {extended:true}));
app.use( expressSession({
    resave :false,
    saveUninitialized : false,
    secret  : process.env.EXPRESS_SESSION_SECRET
}))
app.use( flash() );
app.use( express.static( path.join( __dirname,'public')));
app.use( cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/owners", ownersRouter);

app.get("/", (req, res)=>{
    res.render("cart");
})

app.listen(3000);