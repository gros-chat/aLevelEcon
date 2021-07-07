const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var chapter1=['joint venture', 'shortage of pilots', 'supply of these skilled workers',
'big three airlines','fuel-efficient aircraf', ' predatory pricing'];

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
  console.log("hehehe");
});

// app.set('view engine', 'ejs');
app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
res.sendFile(__dirname+ "/form.ejs");
})

app.post("/", function(req, res){
  var letext = req.body.comments;
  var max = chapter1.length;
  var lemot = "";
  var lanote = 0;
  for(var i = 0; i<max; i++){
    lemot= chapter1[i];
    if (letext.indexOf(lemot)!=-1){
      lanote++;
    }
  }
  console.log(lanote/max);
})
