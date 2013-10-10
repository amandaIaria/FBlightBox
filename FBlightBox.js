;(function( $ ) {


    $.fn.fblightbox = function(options){
	
		var settings = $.extend({
            // These are the defaults.
           
           img: "http://placehold.it/200x200",
           gallery : false,
           portfolio : false,
           tansitionsOn : false,
           transitionSpeed: "slow"

            
        }, options);

        if(settings.portfolio == true ){
        	this.find("h2").hide();
        	this.find("span").hide();
        }



        $this = $(this); // saves with selector was used.

     
         var hover =
        	$(this).find("a").hover(
        		function(){
        		    var width = $(this).children('img').width() ;
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
    			    			
    			if(settings.portfolio == false){
    				
    				var div ="<div id='LightBox'> ";
						div += "<div id='container'>";
						div += "<div id='mainContent'>";
						div += "<div id='close'>X</div>";
						div += "<img src='" + img + "'>";
						div += "</div>";
						div += "</div>";
						div += "</div>";
				}
    			else{
    					$("#loadimage").html("");
    					$("#loadimage").html("<img src='" + img + "'>")
    					
    					var port = $(this).find(".stuff").html();
    					
    					var imgHeight = $("#loadimage").children('img');
    					
    					var imgWidth = imgHeight.width() + 200 ;
    					var imgHeight = imgHeight.height();

    					console.log(imgWidth + " " + imgHeight)
    					
    					var div ="<div id='LightBox'> ";
    						div += "<div id='container' style=' width: " + imgWidth + "px;'>";
							div += "<div id='mainContent'>";
							div += "<div id='close'>X</div>";
							div += "<div id='left'>"
							div += "<img src='" + img + "'>";
							div += "</div>";
							div += "<div id= 'right' style=' height: " + imgHeight + "px;'>" ; 
							div +=  port ;
							div +="</div>";
							div += "</div>";
							div += "</div>";
						div += "</div>";

				}
    			
    			$("body").append(div)
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