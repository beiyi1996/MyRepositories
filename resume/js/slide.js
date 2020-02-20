$(function() {
  console.log("ready!");

  $(".navIcon").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this)
      .siblings(".mainNav")
      .toggleClass("slideDown");
  });
});
