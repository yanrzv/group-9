const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
  
  
  // <!-- Slider main container -->
  // <div class="swiper">
  //   <!-- Additional required wrapper -->
  //   <div class="swiper-wrapper">
  //     <!-- Slides -->
  //     <div class="swiper-slide">Slide 1</div>
  //     <div class="swiper-slide">Slide 2</div>
  //     <div class="swiper-slide">Slide 3</div>
      
  //   </div>
  //   <!-- If we need pagination -->
  //   <div class="swiper-pagination"></div>
  
  //   <!-- If we need navigation buttons -->
  //   <div class="swiper-button-prev"></div>
  //   <div class="swiper-button-next"></div>
  
  //   <!-- If we need scrollbar -->
  //   <div class="swiper-scrollbar"></div>
  // </div>