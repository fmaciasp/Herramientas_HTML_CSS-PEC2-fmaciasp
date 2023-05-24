import '../../node_modules/swiper/swiper-bundle.min.css';
import Swiper, { Navigation, Pagination } from '../../node_modules/swiper';


const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    parallax:true,
    
    modules: [Navigation, Pagination],
  
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  
  });
