$(function(){
    // ハンバーガーメニュークリックした時
    $('.hamburger').on('click',function(){
        hamburger();
    });
    $('.navi a').on('click',function(){
        hamburger();
    });
})
    // ハンバーガーメニューの処理
    function hamburger(){
        $('.hamburger').toggleClass('active');

        if($('.hamburger').hasClass('active')){
            $('.navi').addClass('active');

        }else{
            $('.navi').removeClass('active');
        }
    }

$(function(){
    $('.imgbox').on('inview',function(event,isInView,visiblePartX,visiblePartY){
        if(isInView){
            $(this).stop().addClass('slide');
        }
    });
})