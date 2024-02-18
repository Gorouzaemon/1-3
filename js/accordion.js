$(function(){
  $('.title').click(function(){
    $('.box').slideUp(600);
    if($(this).hasClass('close')){
     $(this).removeClass('close');
    } else{
        $('.close').removeClass('close');
      $(this).addClass('close');
       $(this).next('.box').slideDown(600);
    };
  });
});
$(window).on('load',function(){
  $('.accordion-area li:first-of-type section').addClass('open');
  $('.open').each(function(index,element){
    $(element).find('.title').addClass('close');
    $(element).find('.box').slideDown(600);
  });
});
//　上記のコードはもう一度書きましょう