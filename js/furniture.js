
var products = {
    1 : {
      name : "Sectional Sofa - 3 Seats",
      desc : "Navy Blue",
      img : "../source_img/furniture/1.jpg",
      price : 2650
    },
    2 : {
      name : "Large Regular Bean Bag",
      desc : "Multicolor - 90x70x60 Cm",
      img : "../source_img/furniture/1 (1).jpg",
      price : 499
    },
    3 : {
      name : "Man286 Linen Chair",
      desc : "Offwhite",
      img : "../source_img/furniture/1 (2).jpg",
      price : 5529
    },
    4 : {
      name : "Woody Linen Sofa",
      desc : " 3m - Turquoise",
      img : "../source_img/furniture/1 (3).jpg",
      price : 8350
    },
    5 : {
        name : "Recliner Lazy Boy Chair",
        desc : "Brown",
        img : "../source_img/furniture/1 (4).jpg",
        price : 4590
      },
    6 : {
        name : "Corner Bed  ",
        desc : "260*190 Cm - Teal",
        img : "../source_img/furniture/1 (5).jpg",
        price : 688
      },
    7 : {
        name : "3 Seaters Velvet Sofa Bed",
        desc : "190x120 Cm - Black",
        img : "../source_img/furniture/1 (6).jpg",
        price : 3256
      },
    8 : {
        name : "Corner Bed",
        desc : "260*190 Cm - Brown",
        img : "../source_img/furniture/1 (7).jpg",
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
      part.innerHTML = products[i].name;
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
      part.onclick = cart.add;
      
      part.dataset.id = i;
      item.appendChild(part);
  
      container.appendChild(item);
    }
  });

  /* cart */

  var cart = {
    data : null, 

    save : function(){
      localStorage.setItem("cart", JSON.stringify(cart.data));
    },
    
    load : function(){
      cart.data = localStorage.getItem("cart");
      if (cart.data == null) { cart.data = {}; }
      else { cart.data = {}; }
    },
  
  
    add : function(){
      if (cart.data[this.dataset.id] == undefined) {
        var product = products[this.dataset.id];
        cart.data[this.dataset.id] = {
          name : product['name'],
          desc : product['desc'],
          img : product['img'],
          price : product['price'],
          qty : 1
        };
      } else {
        cart.data[this.dataset.id]['qty']++;
      }
      cart.save();
      cart.list();
    },
  
    list : function(){
    
  
      var container = document.getElementById("cart-list"),
          item = null, part = null, product = null;
      container.innerHTML = "";
  
      
      var isempty = function(obj){
        for (var key in obj) {
          if(obj.hasOwnProperty(key)) { return false; }
        }
        return true;
      };
      if (isempty(cart.data)) {
        item = document.createElement("div");
        item.innerHTML = "Cart is empty";
        container.appendChild(item);
      }
      else {
        var total = 0, subtotal = 0;
        for (var i in cart.data) {
          item = document.createElement("div");
          item.classList.add("c-item");
          product = cart.data[i];

          part = document.createElement("span");
          part.innerHTML = product['name'];
          part.classList.add("c-name");
          item.appendChild(part);


          part = document.createElement("input");
          part.type = "number";
          part.value = product['qty'];
          part.dataset.id = i;
          part.classList.add("c-qty");
          part.addEventListener("change", cart.change);
          item.appendChild(part);
                
          subtotal = product['qty'] * product['price'];
          total += subtotal;
          container.appendChild(item);
        }


        item = document.createElement("input");
        item.type = "button";
        item.value = "Empty";
        item.addEventListener("click",cart.reset);
        item.classList.add("c-empty");
        container.appendChild(item);
        
        item = document.createElement("input");
        item.type = "button";
        item.value = "Checkout - " + "EGP" + total;
        item.addEventListener("click", cart.checkout);
        item.classList.add("c-checkout");
        container.appendChild(item);
      }
    },

    reset : function(){ 
        if (confirm("Empty cart?")) {
          cart.data = {};
          cart.save();
          cart.list();
        }
      },

    change : function(){  
      if (this.value == 0) {
        delete cart.data[this.dataset.id];
      } else {
        cart.data[this.dataset.id]['qty'] = this.value;
      }
      cart.save();
      cart.list();
    },

    checkout : function(){
      alert("Done");
    }
  };
  
  window.addEventListener("load", function(){
    cart.load();
    cart.list();
  });
