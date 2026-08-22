// 咲乱雀姫HP 計測ヘルパー（Umami Cloud）
// 新規/再訪の印は自前の localStorage（Cookie不使用・IPは送らない）
(function () {
    const KEY = 'sj_seen';
    let visitor = 'returning';
    try {
        if (!localStorage.getItem(KEY)) { visitor = 'new'; localStorage.setItem(KEY, String(Date.now())); }
    } catch (e) { visitor = 'unknown'; }
    window.SJ_VISITOR = visitor;

    // umami の読み込み完了を待ってから送る
    window.sjTrack = function (name, data) {
        const send = () => { if (window.umami && umami.track) umami.track(name, Object.assign({ visitor: visitor }, data || {})); };
        if (window.umami) send(); else window.addEventListener('load', send, { once: true });
    };
})();
