$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 3000,
    direction: 'horizontal',
    loop: true,

// 切换效果
    // effect: 'fade',

// 抵抗反弹
    // freeMode : true,
    
  
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',

onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  })     
});
