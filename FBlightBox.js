;(function( $ ) {


    $.fn.fblightbox = function(options){
    
        var settings = $.extend({
            // These are the defaults.
           
           img: "http://placehold.it/200x200",
           type: "gallery",
           tansitionsOn : false,
           transitionSpeed: "slow"

            
        }, options);

       $this = $(this); // saves with selector was used.

     
         var hover =
            $this.find("a").hover(
                function(){
                    var width = $(this).children('img').width() + 10 ;
                    $(".stuff").width(width);
                    if(settings.transitionsOn == true){
                        $(this).find("h2").show(settings.transitionSpeed);
                    }
                    else{   
                        $(this).find("h2").show();
                    }
                },
                function(){
                    if(settings.transitionsOn == true){
                        $(this).find("h2").hide(settings.transitionSpeed);
                    }
                    else{   
                        $(this).find("h2").hide();
                    }
                    
                }
            );


        var click = 
            $this.find("a").click(function(event){
                event.preventDefault();             
                
                var img = $(this).attr("href");
                                
                if(settings.type == "gallery"){
                     $("#loadimage").html("");
                        $("#loadimage").html("<img src='" + img + "'>")
                        
                        var port = $(this).find(".stuff").html();
                        
                        var imgHeight = $("#loadimage").children('img');
                        
                        var imgWidth = imgHeight.width() ;

                        var windowHeight= $(window).height();
                        var picHeight = imgHeight.height();
                        var space = parseInt(windowHeight - picHeight);
                        var topSpace = parseInt(space/2);
                      
                        var ww = ($(window).width() <= 480 ) ? 0 : 500;

                        
                        console.log(imgWidth + " " + imgHeight)
                        if(imgWidth >= 500){
                            var div ="<div id='LightBox'> ";
                                div += "<div id='container' style=' width: "+ww+"px;'>";
                                div += "<div id='mainContent' class='imageLone' style='top : "+topSpace+"px'>";
                                div += "<div id='close'>X</div>";
                                div += "<img src='" + img + "' width='500'>";
                                div += "</div>";
                                div += "</div>";
                                div += "</div>";
                        }
                   
                        else{
                            var div ="<div id='LightBox'> ";
                                div += "<div id='container' style=' width: " + imgWidth + "px;'>";
                                div += "<div id='mainContent' class='imageLone' style='top : "+topSpace+"px'>";
                                div += "<div id='close'>X</div>";
                                div += "<img src='" + img + "'>";
                                div += "</div>";
                                div += "</div>";
                            div += "</div>";
                        }
                }
                else{
                        $("#loadimage").html("");

                        $("#loadimage").html("<img src='" + img + "'>");
                        
                        var port = $(this).find(".stuff").html();
                        
                        var imgHeight = $("#loadimage").children('img');
                        
                        var imgWidth = imgHeight.width + 200 ;
                        var imgHeight1 = imgHeight.height;

                        //console.log(imgWidth + " " + imgHeight)

                        var windowHeight= $(window).height();
                        
                        var space = parseInt(windowHeight - 500);
                        var topSpace = parseInt(space/2);

                        
                        var ww1 = ($(window).width() <= 480 ) ? 300 : 700;
                  
                       var div ="<div id='LightBox'> ";
                            div += "<div id='container' style=' width:"+ww1+"px;' >";
                            div += "<div id='mainContent' style='top : "+topSpace+"px'>";
                            div += "<div id='close'>X</div>";
                            div += "<div id='leftCont'>"
                            div += "<div id='leftBig'> "
                            div += "<img src='" + img + "' id='imageBig' height='100'>";
                            div += "</div>";
                             div += "</div>";
                            div += "<div id= 'right'>" ;
                            div += "<div id= 'innards'>" ; 
                            div +=  port ;
                            div += "</div>"
                            div +="</div>";
                            div += "<div class='clear'></div>";
                            div += "</div>";
                            div += "</div>";
                            div += "</div>";
                   

                }
                
                $("body").append(div);
                 

                $("#LightBox").click(function(){
                    $(this).remove();
                });
                $("#close").click(function(){
                    $(this).remove();
                });
               
                
            }) // /click
        
        return this.each(function(){
            hover;
            click;

        }) // /each

     
     }; // /fblightbox



})( jQuery );