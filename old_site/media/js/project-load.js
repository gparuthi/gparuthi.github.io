// Copyright: Gaurav Paruthi
// Date: 04-10-10

function LoadImage(url){
  console.log(url);
  $("#projectImage").attr("src",url);
}


function getQueryVariable() { 
  var query = window.location.hash; 
  if(query.match("#")!=null)
  {
   var vars = query.split("#"); 
   return vars[1];
 }else
 return FIRST_LOAD;

} 

