const express=require("express");
const bp=require("body-parser")
const modul=require(__dirname+"/module.js")
const app=express();
app.set('view engine' , "ejs")
app.use(bp.urlencoded({extended:true}))
app.use(express.static('public'));

var wants=['Buy food',
'Make food',
'Eat food'];
var workwants=[];

app.get('/',function (req,res) {

let day= modul.getdate();

res.render('index',{title:day , want:wants})

})
app.post('/',function(req,res){
var want=req.body.want;
  if(req.body.click==="Work"){
    workwants.push(want);
    res.redirect('/work')
  }
  else{
    var want=req.body.want;
    wants.push(want);
    res.redirect('/')
  }


res.redirect('/')
})
app.get('/work' , function (req,res) {
  res.render('index',{title:"Work" , want:workwants})

})
app.post('/work' , function(req,res){
  let accept=req.body.want;
  workwants.push(accept);
  res.redirect('/work')
})

app.get('/ok' , function (req,res) {
  res.render('ok')

})


app.listen(process.env.PORT || '3000',function(){
  console.log("server is start");
})
