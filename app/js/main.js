$(function () {
  $(".slider__list-items").slick({
    infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-next"></use></svg></button>',
      nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-prev"></use></svg></button>'
  });


$(".header__menu-link, .footer__bottom-link, .logo, .slider__link, .header__contact-link").on("click", function(event){
	event.preventDefault();
	const scrollAnchor = $(this).attr("href");
	let scrollPoint = $(scrollAnchor).offset().top;

	if (scrollAnchor === "#home") {
		scrollPoint = scrollPoint;

	}

	$("html, body").animate (
		{
			scrollTop: scrollPoint,
		},
		1500
	);
return false;
});


$(window).on("scroll", function (){
	if ($(window).scrollTop() > 50) {
		$(".header__wrapper").addClass("header-fixed");
	} else {
		$(".header__wrapper").removeClass("header-fixed");
	}
});



});

var mixitup = mixitup('.services__cards');






