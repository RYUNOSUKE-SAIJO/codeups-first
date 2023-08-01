
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


    const slide1 = new Swiper('.slide1', {
        // Optional parameters
          loop: true,
          effect: "fade", //フワッと
          speed: 3000,
          autoplay: { //自動再生
                  delay: 3000,  //切り替わる速度
              },
      });

    const slide2 = new Swiper('.slide2', {
        // Optional parameters
          loop: true,
          effect: "fade", //フワッと
          speed: 3000,
          autoplay: { //自動再生
                  delay: 3000,  //切り替わる速度
              },

            pagination: {
            el: '.swiper-pagination', //ページネーション要素
            type: 'bullets', //ページネーションの種類
            clickable: true, //クリックに反応させる
            },
      
      });

});//end