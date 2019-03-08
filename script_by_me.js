var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");
var productId=0;
var products=[];

aAddProduct.addEventListener("click",function(event)
{
  createAddProductPannel();
});
function hideAddNewProductLink()
{
   aAddProduct.setAttribute("style","visibility:hidden");
}
function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}
function createAddProductPannel()
{
  hideAddNewProductLink();
  var label =document.createElement("label");
  label.innerHTML = "Add New Product";
  label.setAttribute("style","font-weight:bold");
    divAddProduct.appendChild(label);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var prodName=document.createElement("input");
    prodName.setAttribute("type","text");
    prodName.setAttribute("id","prodName");
    prodName.setAttribute("placeholder", "Enter the product name");
    prodName.setAttribute("style","width:250px");
    divAddProduct.appendChild(prodName);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var prodDesc=document.createElement("input");
    prodDesc.setAttribute("id","prodDesc");
      prodDesc.setAttribute("placeholder", "Enter the product description");
    prodDesc.setAttribute("style","width:250px ; height:50px");
    divAddProduct.appendChild(prodDesc);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var prodPrice = document.createElement("input");
    prodPrice.setAttribute("type","text");
    prodPrice.setAttribute("id","prodPrice");
    prodPrice.setAttribute("placeholder", "Enter the product price");
    prodPrice.setAttribute("style","width:250px");
    divAddProduct.appendChild(prodPrice);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var prodQuantity = document.createElement("input");
    prodQuantity.setAttribute("type","text");
    prodQuantity.setAttribute("id","prodQuantity");
      prodQuantity.setAttribute("placeholder", "Enter the product quantity");
    prodQuantity.setAttribute("style","width:250px");
    divAddProduct.appendChild(prodQuantity);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var btnAddButton = document.createElement("button");
    btnAddButton.setAttribute("id","btnAddButton");
    btnAddButton.innerHTML = "Add Product";
    divAddProduct.appendChild(btnAddButton);
    btnAddButton.addEventListener("click",function(event)
    {
      prodName.value=prodName.value.trim();
      prodDesc.value=prodDesc.value.trim();
      prodPrice.value=prodPrice.value.trim();
      prodQuantity.value=prodQuantity.value.trim();
      if(prodName.value!=""&&prodDesc.value!=""&&prodPrice.value!=""&&prodQuantity.value!="")
      {
      addProducttoArray();
      prodName.value="";
      prodDesc.value="";
      prodPrice.value="";
      prodQuantity.value="";
      }
        else {
        alert("fill all textboxes ");
      }
    });

}
function addProducttoArray()
{
	var objProduct = new Object();

	objProduct.Id = productId;
 	objProduct.Name = document.getElementById("prodName").value;
    objProduct.Desc = document.getElementById("prodDesc").value;
	objProduct.Price = document.getElementById("prodPrice").value;
	objProduct.Quantity = document.getElementById("prodQuantity").value;

    products.push(objProduct);
	makeTheList(objProduct);
  //  deleteNewProductPanel();
	productId++;
}
function makeTheList(objProduct)
{
  var listdiv=document.createElement("div");
  listdiv.setAttribute("id",productId);
  divListProducts.appendChild(listdiv);

  var listprodname=document.createElement("a");
  listprodname.setAttribute("href","#");
  listprodname.innerHTML=objProduct.Name;
  listdiv.appendChild(listprodname);
  //unHideAddNewProductLink();
  insertBlankLine(listdiv);
  listprodname.addEventListener("click",function(event)
{
  var listproddesc=document.createElement("p");
  //listproddesc.setAttribute("href","#");
  listproddesc.innerHTML="Description of Product : "+objProduct.Desc;
  listdiv.appendChild(listproddesc);

  //insertBlankLine(listdiv);

  var listprodprice=document.createElement("p");
  //listprodprice.setAttribute("href","#");
  listprodprice.innerHTML="Price : "+objProduct.Price;
  listdiv.appendChild(listprodprice);

  //insertBlankLine(listdiv);

  var listprodqty=document.createElement("p");
  //listprodqty.setAttribute("href","#");
  listprodqty.innerHTML="Quantity : "+objProduct.Quantity;
  listdiv.appendChild(listprodqty);

  //insertBlankLine(listdiv);

  var delbtn=document.createElement("button");
  delbtn.innerHTML="delete";
  delbtn.setAttribute("id","deletebtn");
  listdiv.appendChild(delbtn);

  delbtn.addEventListener("click",function(event)
{
  var target=event.target.parentNode;
  target.parentNode.removeChild(target);
});
});

}
function unHideAddNewProductLink()
{
  divAddProduct.setAttribute("style","visibility:visible");
}
