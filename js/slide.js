function prev(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',"-100vw");
    // $('.slide').css({marginLeft-1920})
    $('.slide').stop().animate({marginLeft:0},800)
}

function next(){
    $('.slide').stop().animate({marginLeft:"-100vw"},800,function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
}

setInterval(next, 3500);

