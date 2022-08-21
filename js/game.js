$(window).on('load',function(){
    2
    // ここから文字を<span></span>で囲む記述
    3
    $('.typ').children().andSelf().contents().each(function() {
    4
    if (this.nodeType == 3) {
    5
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    6
    }
    7
    });
    8
    // ここから一文字ずつフェードインさせる記述
    9
    $('.typ').css({'opacity':1});
    10
    for (var i = 0; i <= $('.typ').children().size(); i++) {
    11
    $('.typ').children('span:eq('+i+')').delay(100*i).animate({'opacity':1},1000);
    12
    };
    13
    });
    