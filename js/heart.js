$(document).ready(function(){
    $('.text1img img:nth-of-type(1)').click(function(){
        $('.text1img img:nth-of-type(2)').show();
        $('.text1img img:nth-of-type(1)').hide();
    });
    $('.text1img img:nth-of-type(2)').click(function(){
        $('.text1img img:nth-of-type(1)').show();
        $('.text1img img:nth-of-type(2)').hide();
    });
})