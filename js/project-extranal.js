$(document).ready(function() { 
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    }, 
  });
  $('.collapse.show').each(function(){
    $(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }),  
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
	}),
  $('.rera-close').click(function() {
    $('.rera-div .overview-itm-bg').removeClass('active');
  }),
  $('.rera-div .overview-itm-bg').click(function() {
    $(this).toggleClass('active');
  }),
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  }),
  $(".menu ul li a").click(function() {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  }),  
  $('.menu ul li a[href^="#"]').on("click", function(t) {
    t.preventDefault();
    var i = this.hash,
        e = $(i);
    $("html, body").stop().animate({
        scrollTop: e.offset().top - 80
    }, 1000, "swing", function() {})
  }),
  function(e) {
      e.fn.loadScroll = function(t) {
          var n, i, o = e(window),
              r = this;
          r.one("loadScroll", function() {
              if (this.getAttribute("data-src")) {
                  if (this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src"), !t) return !1;
                  e(this).hide().fadeIn(t).add("img").removeAttr("style")
              }
          }), o.scroll(function() {
              n = r.filter(function() {
                  var t = o.scrollTop(),
                      n = o.height(),
                      i = e(this).offset().top;
                  return i + e(this).height() >= t && i <= t + n
              }), i = n.trigger("loadScroll"), r = r.not(i)
          })
      }
  }(jQuery), $(function() {
      $("img").loadScroll(500)
  })
}); 


$(window).scroll(function(){
    if ($(this).scrollTop() > 70) {
       $('.fix-form').addClass('new-fix-form-class');
    } else {
       $('.fix-form').removeClass('new-fix-form-class');
    } 
});