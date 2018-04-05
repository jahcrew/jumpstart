// In main.js, when the document is ready, apply this configuration to the carousel:
//
// One slide should scroll at a time.
// The carousel should autoplay when the page is loaded.
// The speed should be 4000 milliseconds.
// Do not include arrow buttons.
// Do not allow the user to drag the images.
// Do not pause on "focus" or "hover".

$(document).ready(function(){
  $('.carousel').slick({
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 4000,
   arrows: false,
   pauseOnHover: false,
   pauseOnFocus: false,
   draggable: false
   });


// this is the last section; it disables the carousel and is not complete

// var xfarScroll = 0
// $(farScroll).scroll(){
//   var yscrollTop = $(this).scrollTop();
//
// }
// var navbarHeight =
// if (scrollTop - farScroll > 50) {
//
//   var navbarHeight = $('.navbar').css('height');
// }
 });
// Use the jQuery .animate() function to to change the top offset of the navbar to be the negative height of the navbar over 150ms (using the variable you just created).
//
// 30.
// Then, set x equal to y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.
//
// 31.
// Otherwise, if x is greater than y by 50 or more, use the .animate() function to change the top offset of the navbar to 0px over 150 milliseconds.
//
// 32.
// Set x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.
