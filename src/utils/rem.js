(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var u = navigator.userAgent;
            var clientWidth = docEl.clientWidth;
            console.log(u)
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) > 40 ? 40 + 'px' : 20 * (clientWidth / 375) + 'px';
            console.log(docEl.style.fontSize)
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);