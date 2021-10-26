'use strict';

// const swiper = new Swiper('.swiper', {
//    loop: true,

// })


(function($){
	$(document).ready(function() {
		// Code

      $('.gallery__items').slick({
         prevArrow: '<div class="gallery__arrow gallery__arrow-prev"></div>',
         nextArrow: '<div class="gallery__arrow gallery__arrow-next"></div>',
         autoplay: true,
         pauseOnFocus: true,
         arrows: false,
         fade: true,
         autoplaySpeed: 3000,
         mobileFirst: true,
         slidesToShow: 1,
         responsive: [
            {
               breakpoint: 425,
               settings: {
                  arrows: true,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  fade: false,
                  slidesToShow: 2,
                  arrows: true,
               }
            },
            {
               breakpoint: 1023,
               settings: {
                  fade: false,
                  slidesToShow: 3,
                  arrows: true,
               }
            },
         ]

      });

      $('.company__slider').slick({
         dots: true,
         prevArrow: '<div class="gallery__arrow gallery__arrow-prev"></div>',
         nextArrow: '<div class="gallery__arrow gallery__arrow-next"></div>',
         /*autoplay: true,*/
         pauseOnFocus: true,
         arrows: false,
         fade: true,
         autoplaySpeed: 3000,
         mobileFirst: true,
         slidesToShow: 1,
         responsive: [
            {
               breakpoint: 425,
               settings: {
                  arrows: true,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  fade: false,
                  slidesToShow: 2,
                  arrows: true,
               }
            },
            {
               breakpoint: 1023,
               settings: {
                  fade: false,
                  slidesToShow: 3,
                  arrows: true,
                  /*centerMode: true,*/
               }
            },
         ]
      });

      $('.layout__slider').slick({
         prevArrow: '<div class="layout__arrow layout__arrow-prev"></div>',
         nextArrow: '<div class="layout__arrow layout__arrow-next"></div>',
         pauseOnFocus: true,
         arrows: true,
         fade: true,
         mobileFirst: true,
         slidesToShow: 1
      });

      $('.layout__room').click(function (operation) {
         $('.layout__slider').slick('refresh');
         operation.preventDefault();
         $('.layout__room').removeClass('layout__room--active');
         $('.layout__wrapper').removeClass('layout__wrapper--active');

         $(this).addClass('layout__room--active');
         let item = $(this).find('a').attr('href');
         $(item).addClass('layout__wrapper--active');

      })


      $('.menu__burger').on('click', function () {
         $(this).toggleClass('menu__burger--open');
         $('.menu__list').toggleClass('menu__list--open');
         $('.menu__content').toggleClass('menu__content--open');
      })

       AOS.init();
		
	});
})(jQuery);

