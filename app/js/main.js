$(function () {
  $(".slider__list-items").slick({
    infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-next"></use></svg></button>',
      nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-prev"></use></svg></button>',

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $(".burger-menu, .burger-menu__link").on("click", function () {
    $(".burger-menu").toggleClass("burger-menu--active");
    $(".burger").toggleClass("burger--active");
    $("body").toggleClass("lock");
  });


$(".header__menu-link, .burger-menu__link, .footer__bottom-link, .logo, .slider__link, .header__contact-link").on("click", function(event){
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


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');	
  });
});

const burger = document.querySelector('.burger'); 
const mobileMenu = document.querySelector('.burger-menu'); 
const bodyLock = document.querySelector('body'); 

document.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('burger-menu--active'); 
    if (mobileMenu.classList.contains('burger-menu--active'))  { 
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock'); 
    }
    else { 
      burger.classList.remove('burger--active'); 
      bodyLock.classList.remove('lock'); 
    }
  });
});

document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('burger-menu--active');
    bodyLock.classList.remove('lock');
  }
});





var mixitup = mixitup('.services__cards');






