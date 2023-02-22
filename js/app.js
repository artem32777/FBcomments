(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.querySelector(".fbcomments__showmore").addEventListener("click", (() => document.querySelector(".fbcomments__comments").classList.add("_showmore")));
    window["FLS"] = false;
})();