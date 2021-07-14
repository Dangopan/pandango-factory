$(function() {
    //画面をスクロールするとイベントが発動する
    $(window).scroll(function() {
      
      //フェードインさせたい要素の位置をずらす
      $('.fadein').css({
        'opacity': '0',
        'transform': 'translateX(30px)'
      });
      
      //スクロールバーの位置を取得
      var scroll = $(window).scrollTop();
  
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
  
      $('.fadein').each(function() {
        //フェードインさせたい要素の縦位置を取得
        var elemPos = $(this).offset().top;
  
        //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        }
      });
    });
  });