// 咲乱雀姫/咲花繚乱HP イベント記憶の共通処理（全ページで読む・body 末尾で読む前提）
// 「前回見たイベント」を localStorage に残し、総合トップの振り分けに使う
(function () {
    var KEY = 'sj_event';

    function remember(v) {
        if (!v) return;
        try { localStorage.setItem(KEY, v); } catch (e) {}
    }
    function recall() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    /* イベントページ（body data-event 付き）を開いたら記憶する */
    remember(document.body && document.body.dataset.event);

    /* イベント切替タブを押した時も記憶する */
    document.querySelectorAll('.es-tab').forEach(function (a) {
        a.addEventListener('click', function () { remember(a.dataset.event); });
    });

    /* 総合トップ用：開催日順のイベント一覧 */
    window.SJ_EVENTS = [
        { key: 'ryoran',  date: '2027-01-17', path: 'ryoran/' },
        { key: 'sakuran', date: '2027-02-28', path: 'sakuran/' }
    ];

    /* 記憶があればそれ、無ければ今日以降で最も近い開催日、全部過去なら最後のもの */
    window.sjPickEvent = function () {
        var saved = recall();
        var hit = window.SJ_EVENTS.filter(function (e) { return e.key === saved; })[0];
        if (hit) return hit;
        var now = new Date();
        var upcoming = window.SJ_EVENTS.filter(function (e) {
            return new Date(e.date + 'T23:59:59+09:00') >= now;
        }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
        return upcoming[0] || window.SJ_EVENTS[window.SJ_EVENTS.length - 1];
    };
})();
