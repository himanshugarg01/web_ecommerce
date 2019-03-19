var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");
var productId=0;
var products=[];
  retrieveData();
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
storingValue();
    deleteList();
    unHideAddNewProductLink();
	makeTheList(objProduct);
  //  deleteNewProductPanel();
	productId++;
}


function makeTheList(objProduct)
{
  var listdiv=document.createElement("div");
  listdiv.setAttribute("id",objProduct.Id);


  var listprodname=document.createElement("a");
  listprodname.setAttribute("href","#");
  listprodname.setAttribute("id","prodname"+objProduct.Id);
  listprodname.innerHTML=objProduct.Name;
  listdiv.appendChild(listprodname);
  //unHideAddNewProductLink();
  insertBlankLine(listdiv);
  var listproddesc=document.createElement("p");
  //listproddesc.setAttribute("href","#");
  listproddesc.setAttribute("id","proddesc"+objProduct.Id);
  listproddesc.innerHTML="Description of Product : "+objProduct.Desc;
  listdiv.appendChild(listproddesc);

  //insertBlankLine(listdiv);

  var listprodprice=document.createElement("p");
  //listprodprice.setAttribute("href","#");
listprodprice.setAttribute("id","prodprice"+objProduct.Id);
  listprodprice.innerHTML="Price : "+objProduct.Price;
  listdiv.appendChild(listprodprice);

  //insertBlankLine(listdiv);

  var listprodqty=document.createElement("p");
  //listprodqty.setAttribute("href","#");
  listprodqty.setAttribute("id","prodqty"+objProduct.Id);
  listprodqty.innerHTML="Quantity : "+objProduct.Quantity;
  listdiv.appendChild(listprodqty);

  //insertBlankLine(listdiv);

  var delbtn=document.createElement("button");
  delbtn.innerHTML="delete";
  delbtn.setAttribute("id","delbtn"+objProduct.Id);
  listdiv.appendChild(delbtn);

  var editbtn=document.createElement("button");
    editbtn.setAttribute("id","editbtn"+objProduct.Id);
  editbtn.innerHTML="edit";
  listdiv.appendChild(editbtn);
  divListProducts.appendChild(listdiv);

  document.getElementById("proddesc"+objProduct.Id).setAttribute("style","visibility:hidden");
  document.getElementById("prodprice"+objProduct.Id).setAttribute("style","visibility:hidden");
  document.getElementById("prodqty"+objProduct.Id).setAttribute("style","visibility:hidden");
  document.getElementById("delbtn"+objProduct.Id).setAttribute("style","visibility:hidden");
  document.getElementById("editbtn"+objProduct.Id).setAttribute("style","visibility:hidden");

  listprodname.addEventListener("mouseover",function(event)
{
  document.getElementById("proddesc"+objProduct.Id).setAttribute("style","visibility:visible");
  document.getElementById("prodprice"+objProduct.Id).setAttribute("style","visibility:visible");
  document.getElementById("prodqty"+objProduct.Id).setAttribute("style","visibility:visible");
  document.getElementById("delbtn"+objProduct.Id).setAttribute("style","visibility:visible");
  document.getElementById("editbtn"+objProduct.Id).setAttribute("style","visibility:visible");
});
document.getElementById("delbtn"+objProduct.Id).addEventListener("click",function(event)
{
  var target=event.target.parentNode;
  deleteNodeFromArray(parseInt(target.id));
  target.parentNode.removeChild(target);
});


  document.getElementById("editbtn"+objProduct.Id).addEventListener("click",function(event)
{
 editPannel(objProduct);
});


  listprodname.addEventListener("click",function()
{
    document.getElementById("proddesc"+objProduct.Id).setAttribute("style","visibility:hidden");
    document.getElementById("prodprice"+objProduct.Id).setAttribute("style","visibility:hidden");
    document.getElementById("prodqty"+objProduct.Id).setAttribute("style","visibility:hidden");
    document.getElementById("delbtn"+objProduct.Id).setAttribute("style","visibility:hidden");
    document.getElementById("editbtn"+objProduct.Id).setAttribute("style","visibility:hidden");
});
}

  function editPannel(objProduct)
  {
    //document.getElementById("delbtn"+objProduct.Id).setAttribute("style","visibility:hidden");
    //document.getElementById("editbtn"+objProduct.Id).setAttribute("style","visibility:hidden");
    //divListProducts.setAttribute("style","visibility:hidden");
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


      prodName.value=objProduct.Name;
      prodDesc.value=objProduct.Desc;
      prodPrice.value=objProduct.Price;
      prodQuantity.value=objProduct.Quantity;

      btnAddButton.addEventListener("click",function(event)
      {

        objProduct.Name = prodName.value;
          objProduct.Desc = prodDesc.value;
      	objProduct.Price = prodPrice.value;
      	objProduct.Quantity = prodQuantity.value;
        var a=document.getElementById("prodname"+objProduct.Id);
        var b=document.getElementById("proddesc"+objProduct.Id);
        var c=document.getElementById("prodprice"+objProduct.Id);
        var d=document.getElementById("prodqty"+objProduct.Id);

        a.innerHTML=prodName.value;
        b.innerHTML="Description : "+prodDesc.value;
        c.innerHTML="Price : "+prodPrice.value;
        d.innerHTML="Quantity : "+prodQuantity.value;

        deleteList();
        unHideAddNewProductLink();
      });

    unhideDelEdit();
  }

function unHideAddNewProductLink()
{
  aAddProduct.setAttribute("style","visibility:visible");
}

function deleteList()
{
  divAddProduct.innerHTML="";
}

function deleteNodeFromArray(a)
{
  var i=0;
  while(i<products.length)
  {
    if(products[i].Id==a)
    {
    products.splice(i,1);
    break;

    }
    i++;
  }
  storingValue();
}


function storingValue()
{
  var product=JSON.stringify(products);
  localStorage.setItem("data",product);

}

function retrieveData()
{
  var pro=localStorage.getItem("data");
 products=JSON.parse(pro);
   var n=products.length;
   if(pro&&n>0)
   {


  // productId=n;
   var i=0;
   while(i<n)
   {
     makeTheList(products[i]);
     i++;
   }
   productId=products[n-1].Id+1;
 }
}
