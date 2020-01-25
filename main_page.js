
var i = 0 ;
    
    var image1=[ 'source_img/ele0.jpg' , 'source_img/ele1.jpg' , 'source_img/ele3.jpg' ] ;
    var image2=[ 'source_img/fashion/1 (4).jpg' , 'source_img/fashion/1 (14).jpg' , 'source_img/fashion/1 (3).jpg' ] ;
    var image3=[ 'source_img/headphones/1 (6).jpg', 'source_img/headphones/1 (4).jpg', 'source_img/headphones/1 (2).jpg'] ;
    var image4=[ 'source_img/furniture/1 (7).jpg' , 'source_img/furniture/1 (1).jpg' , 'source_img/furniture/1 (6).jpg' ] ;

    function set (  ){ 
        if (i >2){i=0 ; }    

    
    document.getElementsByTagName('img')[1].src= image1[i] ;
    document.getElementsByTagName('img')[2].src= image2[i] ;
    document.getElementsByTagName('img')[3].src= image3[i] ;
    document.getElementsByTagName('img')[4].src= image4[i] ;

    
    i++ ; 
}
setInterval(set , 2000);

