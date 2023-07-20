const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:100,
    slidesPerGroup:1,
    centeredSlides:true,
    slidesPerView:2,
    centeredSlidesBounds:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      formatFractionTotal:2,
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });