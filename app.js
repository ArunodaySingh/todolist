const express=require("express");
const bp=require("body-parser")
const mongoose=require('mongoose');
const _ = require("lodash")
const ObjectID = require('mongodb').ObjectID;
const modul=require(__dirname+"/module.js")
const app=express();
app.set('view engine' , "ejs")
mongoose.set('useFindAndModify', false);
app.use(bp.urlencoded({extended:true}))
app.use(express.static('public'));
mongoose.connect('})

const todoschema=new mongoose.Schema({
name:{
type:String
  }
})

const list=mongoose.model('lists',todoschema);

const list2Schema=new mongoose.Schema({
    name:String,
    List2new:[todoschema]
  }
)

const listnew=mongoose.model("listnew",list2Schema);



  const list1=new list({
  name:"Breakfast"
  })
  const list2=new list({
    name:"Lunch"
  })
  const list3=new list({
    name:"Dinner"
  })


if (list.length===0){
  var wants=[list1,list2,list3]

  list.insertMany(wants,function(err,)
    {

        console.log("Succesfully inserted");
  })
}





app.get('/',function (req,res) {

list.find({},function(err,result){

// let day= modul.getdate();
res.render('index',{title:"Today" , want:result})
});
});

app.post('/',function(req,res)
{

var want=req.body.want;
var titl=req.body.click;
const itemm=new list({
  name:want
}
)
if (titl==="Today")
{
  itemm.save()
  res.redirect('/')
}
else
{
listnew.findOne({name:titl},function(err,result)
{
  if(err)

  {
    console.log(err);
     }
  else{
    result.List2new.push(itemm)
    result.save()
    res.redirect("/" + titl)
      }
      }
      )
      }
      }
      )
// app.get('/work' , function (req,res) {
//   res.render('index',{title:"Work" , want:workwants})
//
// })
// app.post('/work' , function(req,res){
//   let accept=req.body.want;
//   workwants.push(accept);
//   res.redirect('/work')
// })
app.post("/delete",function(req,res){
  // console.log(req.body.checkbox);

// const a=new ObjectID(req.body.checkbox);
const a=req.body.checkbox;
const b=req.body.listnam;
console.log(a);
console.log(b);

if(b==="Today"){
  list.deleteOne({_id:a},function(err){
    if(err){
    }
    else{
      console.log("deleted");
      res.redirect('/')
    }
   })
}
else
{
  listnew.findOneAndUpdate({name:b},{$pull:{List2new:{_id:a}}},function(err,result){
    if(!err){
      console.log("deleted");
      res.redirect('/'+b)
    }
  })
    }


  })

 // console.log(mongoose.Types.ObjectId.isValid(a));



app.get('/:customlistname',function(req,res){
  var a=_.capitalize(req.params.customlistname);
  console.log(a);
  listnew.findOne({name:a},function(err,result)
  {
    if(err){
      console.log(err);
    }
    if(!err){
      if(!result){
        const cust=new listnew({
          name:a,
          List2new:wants
        })

         cust.save();
         res.redirect('/'+a)
      }
      else{
        res.render('index',{title:result.name , want:result.List2new})
        }
    }
  })
})






  // const customschema=new mongoose.Schema({
  // name:{
  // type:String,
  // unique:true
  //   }
  // })
 //const customlist=mongoose.model('customlists',todoschema);

 // app.post('/:customlistname',function(req,res)
 // {
 //
 // var want=req.body.want;
 //
 // const listnew=new customlist({
 //   name:want
 //
 // })
 //
 //  listnew.save();
 // })




app.listen(process.env.PORT || '8000',function(){
  console.log("server is start");
})
