'use strict'

$(document).ready(function(){
    $('.hambarger').on('click',function(){
        $('#header').toggleClass('open');
    });
    $('.mask').on('click',function(){
        $('#header').removeClass('open');
    })
});

// const y = window.scrollY; 
// const x = document.getElementById('footer');
// if(y<900){
//     x.classList.add('show');
// }
$(document).ready(function(){
    let btn = $('#to-top');
    btn.hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 700){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    })
    btn.click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    })
})
