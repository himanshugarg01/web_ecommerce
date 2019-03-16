var cartList=document.getElementById("cartList");
var divCart=document.getElementById("divCart");
var products=[];
var productId=0;
retrieveData();
function retrieveData()
{
  var pro=localStorage.getItem("cartQuantity");

   if(pro)
   {
     products=JSON.parse(pro);
   var n=products.length;
   productId=n;
   var i=0;
   while(i<n)
   {
     makeCartList(products[i]);
     i++;
   }
 }
}


function makeCartList(objProduct)
{
  var totalAmount=parseInt(objProduct.Price)*parseInt(objProduct.Qty);
  var cartItem=document.createElement("li");
  cartItem.setAttribute("id",objProduct.Id);

  cartItem.innerHTML="Prod Name : "+objProduct.Name+"<br/>Price Per Item : "+objProduct.Price+"<br/>Quantity : "+objProduct.Qty+"<br/><br/>Total Price of "+objProduct.Qty+" items : "+totalAmount;
  insertBlankLine(cartItem);
  cartList.appendChild(cartItem);

  rmCartBtn=document.createElement("button");
  rmCartBtn.setAttribute("id","rmCartBtn"+objProduct.Id);
  rmCartBtn.innerHTML="Remove Item";
  cartItem.appendChild(rmCartBtn);
  insertBlankLine(cartItem);
  insertBlankLine(cartItem);

  rmCartBtn.addEventListener("click",function(event)
{
  deleteFromCart(event.target.parentNode);
  target =event.target.parentNode.id;
  removeCartItemFromArray(target);

});
}


function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}

function deleteFromCart(target)
{
  target.parentNode.removeChild(target);
}

function removeCartItemFromArray(target)
{
  for(var i=0;i<products.length;i++)
  {
    if(parseInt(products[i].Id)==target)
    {
    products.splice(i,1);
    }
  }
  storingCartValue();
}

function storingCartValue()
{
  var product=JSON.stringify(products);
  localStorage.setItem("cartQuantity",product);
}

var tempProd=[];

var confirmBtn=document.getElementById("confirmBtn");

confirmBtn.addEventListener("click",function(event)
{
retrieveProdData();
var j=0;
for(var i=0;i<tempProd.length&&j<products.length;i++)
{
  if(products[j].Name==tempProd[i].Name)
  {
  tempProd[i].Quantity=tempProd[i].Quantity-products[j].Qty;
  j++;
  }
}
storingProdValue();
localStorage.setItem("cartQuantity","");
window.location.href='file:///C:/Users/Dell/Desktop/web/web_ecommerce/orderConfirmed.html'
});



function storingProdValue()
{
  var product=JSON.stringify(tempProd);
  localStorage.setItem("data",product);

}

function retrieveProdData()
{
  var pro=localStorage.getItem("data");

   if(pro)
   {
     tempProd=JSON.parse(pro);
 }
}
