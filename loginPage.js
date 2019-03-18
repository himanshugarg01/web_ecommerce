var username=document.getElementById("username");
var pass=document.getElementById("pass");
var submitBtn=document.getElementById("submit");
var login=[];

retrieveDetails();


submitBtn.addEventListener("click",function()
{
  if(username.value==""||pass.value=="")
  {
    alert("Enter username and password");
  }
  else {
    loginRequest();
  }
});


function loginRequest()
{
    var i=0;
    var n=login.length;
    while(i<n)
    {
      if(login[i].User==username.value&&login[i].Pass==pass.value)
      {
        window.location.href='file:///C:/Users/Dell/Desktop/web/web_ecommerce/showProducts.html'
        break;
      }
      i++;
    }
    if(i==n)
    {
      username.value="";
      pass.value="";
    alert("Username or password not valid");
    }
}


function retrieveDetails()
{
  var pro=localStorage.getItem("registerDetails");

   if(pro)
   {
     login=JSON.parse(pro);
 }
}
