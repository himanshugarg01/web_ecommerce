var ptcBtn=document.getElementById("ptcButton");
var divProductList=document.getElementById("divProductList");
var productList=document.getElementById("productList");
var products=[];
var productId;
var cartQuantity=[];
retrieveData();
ptcBtn.addEventListener("click",function(event)
{
  window.location.href='file:///C:/Users/Dell/Desktop/web/web_ecommerce/checkOut.html'
});
function retrieveData()
{
  var pro=localStorage.getItem("data");

   if(pro)
   {
     products=JSON.parse(pro);
   var n=products.length;
   productId=n;
   var i=0;
   while(i<n)
   {
     makeProductList(products[i]);
     i++;
   }
 }
}


function makeProductList(objProduct)
{
  var listItem=document.createElement("li");
  listItem.setAttribute("id","li"+objProduct.Id);


  var input=document.createElement("input");
  input.setAttribute("id","input"+objProduct.Id);
  input.setAttribute("placeholder","Enter the Quantity");

  var addBtnToCart=document.createElement("button");
  addBtnToCart.setAttribute("id","cartBtn"+objProduct.Id);
  addBtnToCart.innerHTML="Add To Cart";

  listItem.innerHTML="Prod Name : "+objProduct.Name+"<br/>Description : "+objProduct.Desc+"<br/> Quantity : "+objProduct.Quantity+"      ";
  insertBlankLine(listItem);
  listItem.appendChild(input);
  listItem.appendChild(addBtnToCart);

  productList.appendChild(listItem);
  insertBlankLine(listItem);
  insertBlankLine(listItem);

  addBtnToCart.addEventListener("click",function(event){
  addToCart(objProduct);
  });


}


function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}


function addToCart(objProduct)
{
  var qty=document.getElementById("input"+objProduct.Id).value;

  if(parseInt(qty)>parseInt(objProduct.Quantity))
  {
    alert("Quantity not available");
    document.getElementById("input"+objProduct.Id).value="";
  }
  else if(qty==""||qty<0)
  {
    alert("Quantity not null");
    document.getElementById("input"+objProduct.Id).value="";
  }
  else
  {
  var obj=new Object();
  obj.Name=objProduct.Name;
  obj.Qty=qty;
  obj.Price=objProduct.Price;
  obj.Id=objProduct.Id;
  console.log(qty);
  console.log(objProduct.Quantity);
  cartQuantity[objProduct.Id]=obj;
  //document.getElementById("input"+objProduct.Id).value="";
  storingCartValue();
  }
}

function storingCartValue()
{
  var product=JSON.stringify(cartQuantity);
  localStorage.setItem("cartQuantity",product);

}
