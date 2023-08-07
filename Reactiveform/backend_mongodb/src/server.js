const express = require("express")
const bodyParser = require('body-parser');
const route = require("./Routes/route")
const multer = require('multer')
const mongoose = require('mongoose')

const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }));
app.use(multer().any())
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://manish:iXN1zqLOlpx5PBN6@cluster0.cprui.mongodb.net/ProductImage",{
    useNewUrlParser: true,
})
.then(()=> console.log("mongoodb connted"))
.catch(err => console.log(err))

app.use('/',route)
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port 🎧' + (process.env.PORT || 3000))
});