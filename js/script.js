(function($){
    $(function(){
    //sem prijde nase jQuery
/*scroll to sections*/
$(".jq--scroll-about-me").click(function(){
$("html,body").animate({scrollTop:$(".jq--about-me").offset().top},1000);
});

$(".jq--scroll-skills-my").click(function(){
    $("html,body").animate({scrollTop:$(".jq--skills-my").offset().top},1500);
    });

    $(".jq--scroll-project-x").click(function(){
        $("html,body").animate({scrollTop:$(".jq--project-x").offset().top},2000);
        });
       
        $(".jq--scroll-contact-y").click(function(){
            $("html,body").animate({scrollTop:$(".jq--contact-y").offset().top},2000);
            });
       
          


              
                
/*mobile navigation*/
$(".jq--nav-icon").click(function(){
    $(".nav-background").slideToggle();
    $(".mobile-nav-back").fadeToggle();
    $("nav ul").fadeToggle()

});

$(".jq--image-hamburger").click(function(){

    if($(".jq--image-hamburger").attr("src")=="images/hamburgerMenu.png")
    {
        $($(".jq--image-hamburger").attr("src","images/crossMenu.png"));

    }
    else{
        $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
    }
});










});

})(jQuery);