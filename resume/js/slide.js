$(function() {
  console.log("ready!");

  $("#navcontact").click(function() {
    $("html,body").animate({ scrollTop: $("#contact").offset().top }, 1000);
  });
  $("#navportfolio").click(function() {
    $("html,body").animate({ scrollTop: $("#portfolio").offset().top }, 1000);
  });
  $("#navabout").click(function() {
    $("html,body").animate({ scrollTop: $("#about").offset().top }, 1000);
  });
  $("#navhome").click(function() {
    $("html,body").animate({ scrollTop: $("#home").offset().top }, 1000);
  });

  $(".navIcon").on("click", function(event) {
    console.log("menu icon is clicked!!", $(this), $(this).find(".mainNav"));
    event.preventDefault();
    $(this).toggleClass("active");
    $(this)
      .siblings(".mainNav")
      .toggleClass("slideDown");
  });
});
