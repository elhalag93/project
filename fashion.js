var products = {
    1 : {
      name : "Womens Pajama Set",
      desc : "Maroon",
      img : "source_img/fashion/1.jpg",
      price : 265
    },
    2 : {
      name : "Amaranth Charleston Pants",
      desc : "Dark Olive",
      img : "source_img/fashion/1 (1).jpg",
      price : 499
    },
    3 : {
      name : "Wool Turntle Neck Collarr",
      desc : "Poncho",
      img : "source_img/fashion/1 (2).jpg",
      price : 529
    },
    4 : {
      name : "Self Pattern Loose",
      desc : " NavyButtoned",
      img : "source_img/fashion/1 (3).jpg",
      price :350
    },
    5 : {
        name : "Winter Loose Hoodies",
        desc : "Faux Fur Coat Jackets",
        img : "source_img/fashion/1 (4).jpg",
        price : 590
      },
    6 : {
        name : "Long Sleeve Turn Down ",
        desc : "Collar Fleece",
        img : "source_img/fashion/1 (5).jpg",
        price : 688
      },
    7 : {
        name : "Plexus Leather Long Cardigan",
        desc : "Black",
        img : "source_img/fashion/1 (6).jpg",
        price : 256
      },
    8 : {
        name : "Merch Cold Shoulder",
        desc : "Blouse",
        img : "source_img/fashion/1 (7).jpg",
        price : 22
      },
    
    9 : {
        name : "Tight Stitch Formal",
        desc : "Casual JACKET - Dark Grey",
        img : "source_img/fashion/1 (8).jpg",
        price : 540
    },
    10 : {
        name : "Stylish Casual Sweatpants Bika",
        desc : "Navy",
        img : "source_img/fashion/1 (9).jpg",
        price : 150
    },
    11 : {
        name : "Slip On Basic Teal Heavey",
        desc : "Sweatshirt",
        img : "source_img/fashion/1 (10).jpg",
        price : 250
    },
    12 : {
        name : "Hoodied",
        desc : " Sweatshirt",
        img : "source_img/fashion/1 (11).jpg",
        price :260
    },
    13 : {
          name : "Sweet Shirt",
          desc : "Melton Olive",
          img : "source_img/fashion/1 (12).jpg",
          price :320
    },
    14 : {
          name : "Boomber Sweet Shirt ",
          desc : "Melton Olive",
          img : "source_img/fashion/1 (13).jpg",
          price : 314
    },
    15 : {
          name : "Blazer Classic",
          desc : "Beige - SemiFormal",
          img : "source_img/fashion/1 (14).jpg",
          price : 1714
    },
    16 : {
          name : "Shirt Cotton Basic",
          desc : "Light Green",
          img : "source_img/fashion/1 (15).jpg",
          price : 320
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
