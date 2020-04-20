
module.exports.getdate=function(){

  var date=new Date();

  var options={weekday:'long' , month:'long' , year:'numeric' ,  day:'numeric'};


return  date.toLocaleDateString('en-US' , options)

}
module.exports.getday=function()
{
  var date=new Date();
  var options={weekday:'long'};
  return date.toLocaleDateString('en-US' , options)

}
