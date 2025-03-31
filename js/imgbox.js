$(document).ready(function(){
    $('.imgbox img:nth-of-type(2)').mouseover(function(){
        $('.imgbox img:nth-of-type(1)').attr('src','img/keyring1.jpg');
    });

    $('.imgbox img:nth-of-type(3)').mouseover(function(){
        $('.imgbox img:nth-of-type(1)').attr('src','img/keyring4.jpg');
    });
});