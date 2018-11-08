// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var u = navigator.userAgent;
//             var clientWidth = docEl.clientWidth;
//             console.log(clientWidth)
//             if (!clientWidth) return;
//             docEl.style.fontSize = (clientWidth / 375) > 2 ? 10 + 'px' : 10 * (clientWidth / 375) + 'px';
//             console.log(docEl.style.fontSize)
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);