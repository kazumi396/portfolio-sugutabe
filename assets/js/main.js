'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

    $(function(){
        $('.faq__title').on('click', function(){
            $(this).toggleClass('click-op');
        });
    });

    // slick
    
    $(document).ready(function() {
        function initializeSlick() {
            const windowWidth = $(window).width();
            let slidesToShow;
            if (windowWidth >= 768) {
                slidesToShow = 3;
            } else {
                slidesToShow = 1;
            }
    
            $('#slick-new__slideshow').slick({
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
                dotsClass: 'dots-class',
            });
        }
    
        // 初回ロード時にスライダーを初期化し実行
        initializeSlick();
    
        // ブラウザのサイズ変更時にスライダーをリセットして再初期化
        $(window).on('resize', function() {
            $('#slick-new__slideshow').slick('unslick'); // スライダーをリセット
            initializeSlick(); // 再初期化し実行
        });
    });
}