/*################# scripts code #################*/

/*

=> Loader

=> slide nav btn

=>  Drowp down

*/
/*global $ */

/*------------[ loader ]-----------------*/
window.onload = function () {
    "use strict";
	$("#load").hide();
	$('#overlay').hide();
};

/*------------[slide nav btn]-----------------*/
var slide_btn = $(".slide-nav-btn"),
    btn_active = "slide-nav-btn-active",
    nav_right = $(".slide-nav-left"),
    slide_nav = $(".slide-nav"),
    slide_active = "slide-nav-active",
    slide_list = $(".slide-nav ul");
    slide_btn.on('click', function () {
	"use strict";
	$(this).toggleClass(btn_active);
	slide_nav.toggleClass(slide_active);
});
/* drowp down*/
$(function() {
  "use strict";
  // Start navbar
  (function() {
    // Add class active when the user clicks the lis of the menu
    $(".nav .list li").on("click", "a", function() {
      $(this)
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    var openCategories = $(".nav #open-categories"),
      categories = $(".drop-down");
    // Toggle categories on clicking
    openCategories.on("click", function() {
      $("#" + $(this).data("dropdown")).toggleClass("show");
      // When the user clicks the window if the categories is not the target, close it.
      $(window).on("mouseup", function(e) {
        if (
          categories.hasClass("show") &&
          !categories.is(e.target) &&
          categories.has(e.target).length === 0 &&
          !openCategories.is(e.target)
        ) {
          console.log("d");
          categories.removeClass("show");
        }
      });
    });
    // Toggle menu, This will be shown in Extra small screens only
    $(".nav .toggle-nav").on("click", function() {
      $("#" + $(this).data("toggle")).slideToggle(300);
    });
  })();
});
