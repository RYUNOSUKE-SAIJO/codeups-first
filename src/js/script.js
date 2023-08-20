
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

    // ヘッダー高さ分だけコンテンツを下げる
    $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top-80;//idの上部の距離からHeaderの高さを引いた値を取得
        $('body,html').animate({scrollTop: pos}, 200); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
    });


    // swiper //
    const slide1 = new Swiper(".slide1", {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false, },
        effect: "fade", // フェード切り替え
        speed: 2000, // 2秒かけてフェード
    });

    const slide2 = new Swiper(".slide2", {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false, },
        effect: "fade", // フェード切り替え
        speed: 2000, // 2秒かけてフェード
        // ページネーション
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    const slide3 = new Swiper(".slide3", {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false, },
        effect: "fade", // フェード切り替え
        speed: 2000, // 2秒かけてフェード
        // ページネーション
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });


    jQuery(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.floating').show();
        } else {
            jQuery('.floating').hide();
        }
    });
    
    jQuery('.floating').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});//end
