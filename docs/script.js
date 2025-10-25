$(document).ready(function() { // DOM準備完了を保証
    $('.hamburger').click(function() {
        // メニューの開閉状態を切り替える
        $('.menu').toggleClass('open');
        // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
        $(this).toggleClass('active');
    });
});
