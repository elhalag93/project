// document.getElementById("gemy_div").style.margin = "150px 150px 150px 150px";
// document.getElementById("gemy_div").style.margin = "auto";
// document.getElementById("first").style.background = "yellow";
// document.getElementById("second").style.backgroundColor = "green";
// document.getElementById("gemy_div_1").style.margin = "auto";
// document.getElementById("gemy_div_1").style.margin = "auto";


var i = 0 ;
    
    var image1=[ 'img/ele0.jpg' , 'img/ele1.jpg' , 'img/ele3.jpg' ] ;
    var image2=[ 'mohab/fashion/1 (4).jpg' , 'mohab/fashion/1 (14).jpg' , 'mohab/fashion/1 (3).jpg' ] ;
    var image3=[ 'mohab/headphones/1 (6).jpg', 'mohab/headphones/1 (4).jpg', 'mohab/headphones/1 (2).jpg'] ;
    var image4=[ 'mohab/furniture/1 (7).jpg' , 'mohab/furniture/1 (1).jpg' , 'mohab/furniture/1 (6).jpg' ] ;

    //var word= ['ready' , 'steady' , 'go'] ; 
    function set (  ){ 
        if (i >2){i=0 ; }    
    

    //document.getElementsByTagName('img')[m].src = 'img/gray.png' ; 


    
    document.getElementsByTagName('img')[1].src= image1[i] ;
    document.getElementsByTagName('img')[2].src= image2[i] ;
    document.getElementsByTagName('img')[3].src= image3[i] ;
    document.getElementsByTagName('img')[4].src= image4[i] ;

    
    i++ ; 

    

}


setInterval(set , 2000);
