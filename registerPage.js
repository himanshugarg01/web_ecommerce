var submitBtn=document.getElementById("submit");
var username=document.getElementById("username");
var emailId=document.getElementById("gmailAcc");
var mobNo=document.getElementById("phoneNo");
var password=document.getElementById("password");
var registerDetails=[];

retrieveDetails();
submitBtn.addEventListener("click",function(event)
{
  if(username.value==""||password.value==""||mobNo.value==""||emailId.value=="")
  {
    alert("fill all fields");
  }
  else {
register();
}
});


function register()
{
  var obj=new Object();
  obj.User=username.value;
  obj.Email=emailId.value;
  obj.Mob=mobNo.value;
  obj.Pass=password.value;
  registerDetails.push(obj);
  username.value="";
  password.value="";
  mobNo.value="";
  emailId.value="";
  storingRegisterDetails();
  window.location.href='file:///C:/Users/Dell/Desktop/web/web_ecommerce/loginPage.html'
  alert("Data saved sucessfully");
}


function storingRegisterDetails()
{
  var product=JSON.stringify(registerDetails);
  localStorage.setItem("registerDetails",product);

}

function retrieveDetails()
{
  var pro=localStorage.getItem("registerDetails");

   if(pro)
   {
     registerDetails=JSON.parse(pro);
 }
}
