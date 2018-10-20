var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var urlencodedParser =bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.set('view engine','ejs');
  var data={year:'2018',country:'INDIA', reside:'delhi'};
app.get('/about',function(req,res){
res.render('newweb');
});
app.get('/about:choice',function(req,res){
res.render('newweb',{purpose:req.params.choice, data:data});
});
app.post('/register',urlencodedParser,function(req,res){
  console.log(req.body);
  res.render('datasuccess',{data:req.body});
});
app.listen(8080);
