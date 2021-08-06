(function(e) {
    "use strict";
    var t = e(window);
    var n = t.height();
    t.resize(function() {
        n = t.height()
    });
    e.fn.parallax = function(r, i, s) {
        function l() {
            o.each(function() {
                a = o.offset().top
            });
            if (s) {
                u = function(e) {
                    return e.outerHeight(true)
                }
            } else {
                u = function(e) {
                    return e.height()
                }
            }
            if (arguments.length < 1 || r === null) r = "50%";
            if (arguments.length < 2 || i === null) i = .5;
            if (arguments.length < 3 || s === null) s = true;
            var f = t.scrollTop();
            o.each(function() {
                var t = e(this);
                var s = t.offset().top;
                var l = u(t);
                if (s + l < f || s > f + n) {
                    return
                }
                o.css("backgroundPosition", r + " " + Math.round((a - f) * i) + "px")
            })
        }
        var o = e(this);
        var u;
        var a;
        var f = 0;
        t.bind("scroll", l).resize(l);
        l()
    }
})(jQuery)