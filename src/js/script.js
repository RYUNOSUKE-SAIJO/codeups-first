
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    
    //ハンバーガー//
    $(".js-hamburger,.js-drawer, .js-drawer a").click(function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle(600);
        event.stopPropagation();
    });

    //ヘッダー//
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
    // メインビューの高さを取得
    const mainViewHeight = document.querySelector('.mv').offsetHeight;

    if (window.scrollY > mainViewHeight) {
        // ヘッダーに背景色を追加
        header.classList.add('header--scrolled');
    } else {
        // ヘッダーから背景色を削除
        header.classList.remove('header--scrolled');
    }
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
          loop: true,
          effect: "fade", //フワッと
          speed: 3000,
          autoplay: { //自動再生
                  delay: 3000,  //切り替わる速度
              },
          breakpoints: {
              769: { //７６９px以上で...
                autoplay: false, //自動再生を停止
                clickable: true,　//クリック動作
              },
            },
      });

});
