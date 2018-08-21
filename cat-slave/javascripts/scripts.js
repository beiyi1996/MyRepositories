$(function(){
    $(".menu-toggle").on("click",function(event){
        event.preventDefault();
       $(this).siblings("ul").slideToggle(); 
       $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    });
    $("body").on("click",function(e){
        if($(e.target).parents(".main-menu").length < 1){
            $(".main-menu ul").slideUp();
            $(".menu-toggle i").removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
});