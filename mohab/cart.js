
var products = {
    1 : {
      name : "Sectional Sofa - 3 Seats",
      desc : "Navy Blue",
      img : "furniture/1.jpg",
      price : 2650
    },
    2 : {
      name : "Large Regular Bean Bag",
      desc : "Multicolor - 90x70x60 Cm",
      img : "furniture/1 (1).jpg",
      price : 499
    },
    3 : {
      name : "Man286 Linen Chair",
      desc : "Offwhite",
      img : "furniture/1 (2).jpg",
      price : 5529
    },
    4 : {
      name : "Woody Linen Sofa",
      desc : " 3m - Turquoise",
      img : "furniture/1 (3).jpg",
      price : 8350
    },
    5 : {
        name : "Recliner Lazy Boy Chair",
        desc : "Brown",
        img : "furniture/1 (4).jpg",
        price : 4590
      },
    6 : {
        name : "Corner Bed  ",
        desc : "260*190 Cm - Teal",
        img : "furniture/1 (5).jpg",
        price : 688
      },
    7 : {
        name : "3 Seaters Velvet Sofa Bed",
        desc : "190x120 Cm - Black",
        img : "furniture/1 (6).jpg",
        price : 3256
      },
    8 : {
        name : "Corner Bed",
        desc : "260*190 Cm - Brown",
        img : "furniture/1 (7).jpg",
        price : 2722
      }
    
  };
  
  
  window.addEventListener("load", function(){
    var container = document.getElementById("cart-products"),
        item = null, part = null;
    for (let i in products) {
      item = document.createElement("div");
      item.classList.add("p-item");
  
      // Product Image
      part = document.createElement("img");
      part.src = products[i]['img'];
      part.classList.add("p-img");
      item.appendChild(part);
  
      // Product Name
      part = document.createElement("div");
      part.innerHTML = products[i]['name'];
      part.classList.add("p-name");
      item.appendChild(part);
  
      // Product Price
      part = document.createElement("div");
      part.innerHTML = "EGP" + products[i]['price'];
      part.classList.add("p-price");
      item.appendChild(part);
  
      // Product Description
      part = document.createElement("div");
      part.innerHTML = products[i]['desc'];
      part.classList.add("p-desc");
      item.appendChild(part);
  
      // Add to cart
      part = document.createElement("input");
      part.type = "button";
      part.value = "Add to Cart";
      part.classList.add("p-add");
      
      part.dataset.id = i;
      item.appendChild(part);
  
      container.appendChild(item);
    }
  });
  
