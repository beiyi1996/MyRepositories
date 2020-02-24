$(function() {
  console.log("ready!");

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
