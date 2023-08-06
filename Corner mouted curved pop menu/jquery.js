$(function(){
    $('.menu').on('click', function(){
        $('.option1').css({'top':'var(--y)', 'left':'var(--x)'});
        $('.close-button').css({'z-index':1})
    })
    
    $('.close-button').on('click', function(){
        $('.option1').css({'top':'50%', 'left':'50%'});
        $('.close-button').css({'z-index':-1})
    })
})