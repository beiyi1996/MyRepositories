$(function() {
  console.log("ready!");
  $(window).scroll(function() {
    // console.log('window scroll top', $(this).scrollTop());
    // console.log('$("#collections")', $("#collections").offset().top - 150);
    var windowScrollTop = $(this).scrollTop();
    var collectionsOffSetTop = $("#collections").offset().top - 150;
    if(windowScrollTop >= collectionsOffSetTop){
      // console.log('要長出作品囉!!');
      $(".timeline > li").addClass("scrollFade");
    }
  });

  $(".navIcon").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this)
      .siblings(".mainNav")
      .toggleClass("slideDown");
  });

  $("nav a").on("click", function(){
    $(this).parents("nav.mainNav.slideUp.slideDown").removeClass("slideDown");
    $(".navIcon").removeClass("active");
  });
});
