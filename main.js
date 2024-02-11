new WOW().init();

$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    document.getElementById("page-top").scrollIntoView();

    $("#ctn-preloader").addClass("loaded");
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $(this).delay(2000).fadeOut();
    }
  }, 1500);
}

function afterLoad() {}





$(".box-video").click(function(){
  $('iframe',this)[0].src += "&amp;autoplay=1";
  $(this).addClass('open');
});











$('.owl_carousel').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})


