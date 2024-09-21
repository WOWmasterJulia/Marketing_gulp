
// ANIMATION
const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    console.log('hello!!!!!!!!!!!')
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// слайдер Слик вариант 4 (работает)
$(function () {
  console.log("jQuery загружен и работает!!!!!!!!!!!");
  $(".slider").slick({
    dots: true,
    // arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
       '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
       breakpoint: 769,
         settings: {
           arrows: false,
         },
       },
     ],
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });
});


$(function () {
  $(".menu a, .go-top, .header__icon, .home__icon").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });


  $(".menu__btn, .menu a").on("click", function () {
    // $('.menu__list').toggleClass('menu__list--active');
    // $(".logo").toggleClass("logo--active");
    // $(".menu__btn").toggleClass("menu__btn--active");
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  var mixer = mixitup(".portfolio__content");
});


  // слайдер Слик вариант 2
  // $(".slider-blog__inner").slick({
  //   dots: true,
  //   prevArrow:
  //     '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow-left"></button>',
  //   nextArrow:
  //     '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow-right"></button>',
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         arrows: false,
  //       },
  //     },
  //   ],
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //  fade: true,
  // });


  // слайдер Слик вариант 1
  //  $(".slider-blog").slick({
  //    dots: true,
  //    prevArrow:
  //      '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow-left"></button>',
  //    nextArrow:
  //      '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow-right"></button>',
  //    responsive: [
  //      {
  //        breakpoint: 769,
  //        settings: {
  //          arrows: false,
  //        },
  //      },
  //    ],
//  });
  
 // слайдер Слик вариант 3
// $(document).ready(function () {
//   console.log("jQuery загружен и работает!");
//   $(".slider").slick({
//     dots: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
    // плавное переключение
  // });

  // Функция для анимации при прокрутке
  // function animOnScroll() {
  // Ваша логика анимации
  //}

  // setTimeout(() => {
  //   animOnScroll();
  // }, 300);
// });


// слайдер Свайпер вариант 1
const swiper = new Swiper(".project__slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});



