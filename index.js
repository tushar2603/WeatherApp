const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

const weatherRoute = require('./routes/weather');
app.use('/',weatherRoute);

app.set('view engine', 'ejs');

const port =process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})