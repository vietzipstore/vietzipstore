var searchFormConfig = { summaryPost: !0, resultThumbnail: !0, fallbackThumb: "http://1.bp.blogspot.com/-41xX9MKBr-w/U1Tt0T8gNRI/AAAAAAAABZw/SocPS0qeq1k/s50-c/Noim.png", thumbSize: 50, summaryLength: 100 };
! function(e) {
    var r = e("#ajax-search-form"),
        a = r.find(":text");
    config = searchFormConfig, r.append('<div id="search-result"></div>');
    var t = e("#search-result");
    r.on("submit", function() {
        var r = a.val();
        return t.slideDown(500, "easeOutBounce").html("Loading..."), e.ajax({
            url: "/feeds/posts/summary?alt=json-in-script&q=" + r + "&max-results=9999",
            type: "get",
            dataType: "jsonp",
            success: function(e) {
                var a, s, n, l, o = e.feed.entry,
                    i = "";
                if (void 0 !== o) {
                    i = "<h4>Search results for keyword &quot;" + r + "&quot;</h4>", i += '<a class="close" href="/">&times;</a><ul>';
                    for (var c = 0; c < o.length; c++) {
                        for (var m = new RegExp(r, "ig"), n = o[c].title.$t.replace(m, "<mark>" + r + "</mark>"), u = 0; u < o[c].link.length; u++) "alternate" == o[c].link[u].rel && (l = o[c].link[u].href);
                        config.summaryPost === !0 && (a = "content" in o[c] ? o[c].content.$t : "summary" in o[c] ? o[c].summary.$t : ""), config.resultThumbnail === !0 && (s = "media$thumbnail" in o[c] ? o[c].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + config.thumbSize + "-c") : config.fallbackThumb), a = a.replace(/<\S[^>]*>/g, ""), a.length > config.summaryLength && (a = a.substring(0, config.summaryLength) + "..."), a = a.replace(m, "<mark>" + r + "</mark>"), i += '<li><a href="' + l + '"><span><img src="' + s + '" alt="" /></span><h5>' + n + "</h5></a><p>" + a + "</p></li>"
                    }
                    i += "</ul>", t.html(i)
                } else t.html('<a class="close" href="/">&times;</a><strong>No result!</strong>')
            },
            error: function() { t.html('<a class="close" href="/">&times;</a><strong>Error loading feed.</strong>') }
        }), !1
    }), r.on("click", ".close", function() { return t.slideUp(500, "easeInExpo"), !1 })
}(jQuery);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) { return jQuery.easing[jQuery.easing.def](n, e, t, u, a) },
    easeInQuad: function(n, e, t, u, a) { return u * (e /= a) * e + t },
    easeOutQuad: function(n, e, t, u, a) { return -u * (e /= a) * (e - 2) + t },
    easeInOutQuad: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t },
    easeInCubic: function(n, e, t, u, a) { return u * (e /= a) * e * e + t },
    easeOutCubic: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e + 1) + t },
    easeInOutCubic: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t },
    easeInQuart: function(n, e, t, u, a) { return u * (e /= a) * e * e * e + t },
    easeOutQuart: function(n, e, t, u, a) { return -u * ((e = e / a - 1) * e * e * e - 1) + t },
    easeInOutQuart: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t },
    easeInQuint: function(n, e, t, u, a) { return u * (e /= a) * e * e * e * e + t },
    easeOutQuint: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e * e * e + 1) + t },
    easeInOutQuint: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t },
    easeInSine: function(n, e, t, u, a) { return -u * Math.cos(e / a * (Math.PI / 2)) + u + t },
    easeOutSine: function(n, e, t, u, a) { return u * Math.sin(e / a * (Math.PI / 2)) + t },
    easeInOutSine: function(n, e, t, u, a) { return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t },
    easeInExpo: function(n, e, t, u, a) { return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t },
    easeOutExpo: function(n, e, t, u, a) { return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t },
    easeInOutExpo: function(n, e, t, u, a) { return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t },
    easeInCirc: function(n, e, t, u, a) { return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t },
    easeOutCirc: function(n, e, t, u, a) { return u * Math.sqrt(1 - (e = e / a - 1) * e) + t },
    easeInOutCirc: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t },
    easeOutBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t },
    easeInOutBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t },
    easeInBounce: function(n, e, t, u, a) { return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t },
    easeOutBounce: function(n, e, t, u, a) { return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t },
    easeInOutBounce: function(n, e, t, u, a) { return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t }
});
"use strict";
$(function() {
    function t(t, e) {
        for (var a = 0; a < t[e].link.length; a++)
            if ("alternate" == t[e].link[a].rel) { var s = t[e].link[a].href; break }
        return s
    }

    function e(t, e, a) {
        var s = t[e].title.$t,
            i = '<a href="' + a + '">' + s + "</a>";
        return i
    }

    function a(t, e) {
        var a = t[e].title.$t,
            s = t[e].content.$t,
            i = $("<div>").html(s);
        if ("media$thumbnail" in t[e]) {
            var n = t[e].media$thumbnail.url,
                r = n.replace("/s72-c", "/w680");
            s.indexOf("youtube.com/embed") > -1 && (r = n.replace("/default.", "/hqdefault."))
        } else r = s.indexOf("<img") > -1 ? i.find("img:first").attr("src") : noThumbnail;
        var l = '<img alt="' + a + '" src="' + r + '"/>';
        return l
    }

    function s(t, e) {
        var a = t[e].content.$t,
            s = $("<div>").html(a),
            i = s.find('strike:contains("price/")'),
            n = s.find('strike:contains("off/")');
        if (i.length > 0) var r = i.text(),
            l = r.split("/"),
            o = l[1];
        if (n.length > 0) { r = n.text(), l = r.split("/"); var d = l[1] }
        if (void 0 != o) var c = '<span class="harga">' + o + "</span>";
        else c = "";
        if (void 0 != d) var f = '<span class="produk_diskon show">' + d + "</span>";
        else f = "";
        var h = [c, f];
        return h
    }

    function i(i, n, r, l) {
        if (n.match("recent-label") || n.match("recent-flash") || n.match("related")) {
            var o = "";
            if ("recent" == l) o = "/feeds/posts/default?alt=json-in-script&max-results=" + r;
            else if ("random" == l) {
                var d = Math.floor(Math.random() * r) + 1;
                o = "/feeds/posts/default?max-results=" + r + "&start-index=" + d + "&alt=json-in-script"
            } else o = "/feeds/posts/default/-/" + l + "?alt=json-in-script&max-results=" + r;
            $.ajax({
                url: o,
                type: "get",
                dataType: "jsonp",
                beforeSend: function() { n.match("recent-label") && i.html("").parent().addClass("") },
                success: function(r) {
                    if (n.match("content_b")) var o = "<ul>";
                    else n.match("recent-label") ? o = '<ul class="recent-label">' : n.match("recent-flash") ? o = '<ul class="recent-widget">' : n.match("related") && (o = '<ul class="related-posts">');
                    var d = r.feed.entry;
                    if (void 0 != d) {
                        for (var c = 0, f = d; c < f.length; c++) {
                            var h = t(f, c),
                                p = e(f, c, h),
                                u = a(f, c),
                                m = s(f, c),
                                v = "";
                            n.match("bx") ? v += "" : n.match("recent-label") ? v += '<li class="hot-item item-' + c + '"><div class="hot-item-inner"><a href="' + h + '">' + u + "</a>" + m[1] + '<div class="product-info"><h2 class="post-title">' + p + "</h2>" + m[0] + "</div></div></li>" : n.match("recent-flash") ? v += '<li class="item-' + c + '"><a class="post-image-link" href="' + h + '">' + u + '</a><div class="product-info"><h2 class="post-title">' + p + "</h2>" + m[0] + "</div></div></li>" : n.match("related") && (v += '<li class="related-item item-' + c + '"><div class="post-image-wrap"><a class="post-image-link" href="' + h + '">' + u + "</a>" + m[1] + '</div><h2 class="post-title">' + p + "</h2>" + m[0] + "</li>"), o += v
                        }
                        o += "</ul>"
                    }
                    n.match("bx") ? (i.addClass("").append(o), i.find("").attr("", function(t, e) { return e = "" == l || "" == l ? e.replace(e, "") : e.replace(e, "") })) : n.match("recent-label") ? i.html(o).parent().addClass("show-hot") : i.html(o)
                }
            })
        }
    }
    $(".post-shop-info").each(function() {
        var t = $(this),
            e = t.data("id");
        $.ajax({
            url: "/feeds/posts/default/" + e + "?alt=json",
            type: "get",
            dataType: "jsonp",
            success: function(e) {
                var a = e.entry.content.$t,
                    s = $("<div>").html(a),
                    i = s.find('strike:contains("price1/")');
                if (i.length > 0) {
                    var n = i.text(),
                        r = n.split("/"),
                        l = r[1];
                    t.find(".diskon").text(l).parent().addClass("show")
                }
            }
        })
    }), $(".post-shop-info").each(function() {
        var t = $(this),
            e = t.data("id");
        $.ajax({
            url: "/feeds/posts/default/" + e + "?alt=json",
            type: "get",
            dataType: "jsonp",
            success: function(e) {
                var a = e.entry.content.$t,
                    s = $("<div>").html(a),
                    i = s.find('strike:contains("price/")'),
                    n = s.find('strike:contains("off/")');
                if (i.length > 0) {
                    var r = i.text(),
                        l = r.split("/"),
                        o = l[1];
                    t.find(".harga").text(o).parent().addClass("show")
                }
                if (n.length > 0) {
                    r = n.text(), l = r.split("/");
                    var d = l[1];
                    t.find(".produk_diskon").text(d).addClass("show")
                }
            }
        })
    }), $(".produk-postingan .post-body").each(function() {
        var t = $(this),
            e = t.find('strike:contains("price/")'),
            a = t.find('strike:contains("off/")');
        if (e.length > 0) {
            var s = e.text(),
                i = s.split("/"),
                n = i[1];
            $(".bks-produk").find(".harga").text(n).parent().addClass("show"), e.hide()
        }
        if (a.length > 0) {
            s = a.text(), i = s.split("/");
            var r = i[1];
            $(".bks-produk").find(".produk_diskon").text(r).addClass("show"), a.hide()
        }
    }), $(".produk-postingan .post-body").each(function() {
        var t = $(this),
            e = t.find('strike:contains("price1/")');
        if (e.length > 0) {
            var a = e.text(),
                s = a.split("/"),
                i = s[1];
            $(".bks-produk").find(".diskon").text(i).parent().addClass("show"), e.hide()
        }
    }), $(".recent-section .widget-content").each(function() {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/"),
            n = s[0];
        i(t, a, 9, n)
    }), $(".common-widget .widget-content").each(function() {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/"),
            n = s[0],
            r = s[1];
        i(t, a, n, r)
    }), $(".related-ready").each(function() {
        var t = $(this),
            e = t.find(".related-tag").data("label");
        i(t, "related", 5, e)
    })
});
$(function() {
    function a() { pagerPos = p, $("#pager a.active").removeClass("active"), $('#pager a[data-img="' + pagerPos + '"]').addClass("active") }

    function i(i) { t.animate({ "margin-left": "-=" + i }, 325, function() { p == n ? (p = 1, t.css("margin-left", -c)) : pagerPos > p ? p = pagerPos : p++, a() }) }

    function e(i) { t.animate({ "margin-left": "+=" + i }, 325, function() { 1 == p ? (p = n, t.css("margin-left", -(c * n))) : pagerPos < p ? p = pagerPos : p--, a() }) }
    var r = $("#boxslider"),
        t = $("#boxslider ul"),
        s = $("#boxslider ul li"),
        l = $("#boxsliderPrev"),
        o = $("#boxsliderNext"),
        n = s.length,
        c = s.width(),
        d = c / n;
    t.width(c * (n + 2)), r.after('<div id="pager"></div>');
    var g = 1;
    s.each(function() { $(this).attr("data-img", g), $("#pager").append('<a data-img="' + g + '"><img src=' + $("img", this).attr("src") + " width=" + d + "></a>"), g++ }), $("#boxslider ul li:first-child").clone().appendTo("#boxslider ul"), $("#boxslider ul li:nth-child(" + n + ")").clone().prependTo("#boxslider ul"), t.css("margin-left", -c), $("#boxslider ul li:nth-child(2)").addClass("active");
    var p = pagerPos = $("#boxslider ul li.active").attr("data-img");
    $("#pager a:nth-child(" + pagerPos + ")").addClass("active"), $("#pager a").on("click", function() {
        if (pagerPos = $(this).attr("data-img"), $("#pager a.active").removeClass("active"), $(this).addClass("active"), pagerPos > p) {
            var a = c * (pagerPos - p);
            i(a)
        }
        if (pagerPos < p) {
            var a = c * (p - pagerPos);
            e(a)
        }
        return !1
    }), o.on("click", function() { return i(c), !1 }), l.on("click", function() { return e(c), !1 })
});
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".quantity input"), jQuery(".quantity").each(function() {
    var t = jQuery(this),
        i = t.find('input[type="number"]'),
        a = t.find(".quantity-up"),
        n = t.find(".quantity-down"),
        d = i.attr("min"),
        e = i.attr("max");
    a.click(function() {
        var a = parseFloat(i.val());
        if (a >= e) var n = a;
        else var n = a + 1;
        t.find("input").val(n), t.find("input").trigger("change")
    }), n.click(function() {
        var a = parseFloat(i.val());
        if (d >= a) var n = a;
        else var n = a - 1;
        t.find("input").val(n), t.find("input").trigger("change")
    })
}), $(document).ready(function() {
    var t = $(".tab-wrapper"),
        i = t.find(".tab-content > div"),
        a = t.find(".tab-menu li"),
        n = $('<div class="line"></div>').appendTo(a);
    i.not(":first-of-type").hide(), a.filter(":first-of-type").find(":first").width("100%"), a.each(function(t) { $(this).attr("data-tab", "tab" + t) }), i.each(function(t) { $(this).attr("data-tab", "tab" + t) }), a.on("click", function() {
        var d = $(this).data("tab"),
            e = $(this).closest(t);
        e.find(a).removeClass("active"), $(this).addClass("active"), e.find(".line").width(0), $(this).find(n).animate({ width: "100%" }, "fast"), e.find(i).hide(), e.find(i).filter("[data-tab=" + d + "]").show()
    })
});
$(function() {
    "use strict";

    function t() { a++, $(".counter").html(a).animate({ opacity: "0" }, 300, function() { $(".counter").delay(300).animate({ opacity: "1" }) }) }
    var n = "No items yet!",
        a = 0;
    $(".counter").html(n), $(".addpro").on("click", function() { t(), $(this).parent().parent().find(".product_overlay").css({ transform: " translateY(0px)", opacity: "1", transition: "all ease-in-out .45s" }).delay(1500).queue(function() { $(this).css({ transform: "translateY(-500px)", opacity: "0", transition: "all ease-in-out .45s" }).dequeue() }) })
});
$(document).ready(function() { $(".modernshop-slider").slick({ autoplay: !0, autoplaySpeed: 1e4, speed: 600, slidesToShow: 1, slidesToScroll: 1, pauseOnHover: !0, dots: !0, pauseOnDotsHover: !0, cssEase: "linear", draggable: !0, prevArrow: '<button class="PrevArrow"></button>', nextArrow: '<button class="NextArrow"></button>' }) });
jQuery(document).ready(function(e) {
        function n() {
            var n = !e(".modernshop-drop").hasClass("dropdown-is-active");
            e(".modernshop-drop").toggleClass("dropdown-is-active", n), e(".modernshop-trigger").toggleClass("dropdown-is-active", n), n || e(".modernshop-drop").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() { e(".has-children ul").addClass("is-hidden"), e(".move-out").removeClass("move-out"), e(".is-active").removeClass("is-active") })
        }
        e(".modernshop-trigger").on("click", function(e) { e.preventDefault(), n() }), e(".modernshop-drop .cd-close").on("click", function(e) { e.preventDefault(), n() }), e(".has-children").children("a").on("click", function(n) {
            n.preventDefault();
            var t = e(this);
            t.next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")
        });
        var t = e(".modernshop-menu").hasClass("open-to-left") ? "left" : "right";
        e(".modernshop-dropdown").menuAim({ activate: function(n) { e(n).children().addClass("is-active").removeClass("fade-out"), 0 == e(".modernshop-dropdown .fade-in").length && e(n).children("ul").addClass("fade-in") }, deactivate: function(n) { e(n).children().removeClass("is-active"), (0 == e("li.has-children:hover").length || e("li.has-children:hover").is(e(n))) && (e(".modernshop-dropdown").find(".fade-in").removeClass("fade-in"), e(n).children("ul").addClass("fade-out")) }, exitMenu: function() { return e(".modernshop-dropdown").find(".is-active").removeClass("is-active"), !0 }, submenuDirection: t }), e(".go-back").on("click", function() {
            var n = e(this);
            e(this).parent("ul").parent(".has-children").parent("ul");
            n.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")
        }), (e("[placeholder]").focus(function() {
            var n = e(this);
            n.val() == n.attr("placeholder") && n.val("")
        }).blur(function() { var n = e(this); "" != n.val() && n.val() != n.attr("placeholder") || n.val(n.attr("placeholder")) }).blur(), e("[placeholder]").parents("form").submit(function() {
            e(this).find("[placeholder]").each(function() {
                var n = e(this);
                n.val() == n.attr("placeholder") && n.val("")
            })
        }))
    }),
    function(e) {
        function n(n) {
            var t = e(this),
                o = null,
                i = [],
                r = null,
                a = null,
                l = e.extend({ rowSelector: "> li", submenuSelector: "*", submenuDirection: "right", tolerance: 75, enter: e.noop, exit: e.noop, activate: e.noop, deactivate: e.noop, exitMenu: e.noop }, n),
                s = 3,
                u = 300,
                c = function(e) { i.push({ x: e.pageX, y: e.pageY }), i.length > s && i.shift() },
                d = function() { a && clearTimeout(a), l.exitMenu(this) && (o && l.deactivate(o), o = null) },
                h = function() { a && clearTimeout(a), l.enter(this), m(this) },
                f = function() { l.exit(this) },
                v = function() { p(this) },
                p = function(e) { e != o && (o && l.deactivate(o), l.activate(e), o = e) },
                m = function(e) {
                    var n = x();
                    n ? a = setTimeout(function() { m(e) }, n) : p(e)
                },
                x = function() {
                    function n(e, n) { return (n.y - e.y) / (n.x - e.x) }
                    if (!o || !e(o).is(l.submenuSelector)) return 0;
                    var a = t.offset(),
                        s = { x: a.left, y: a.top - l.tolerance },
                        c = { x: a.left + t.outerWidth(), y: s.y },
                        d = { x: a.left, y: a.top + t.outerHeight() + l.tolerance },
                        h = { x: a.left + t.outerWidth(), y: d.y },
                        f = i[i.length - 1],
                        v = i[0];
                    if (!f) return 0;
                    if (v || (v = f), v.x < a.left || v.x > h.x || v.y < a.top || v.y > h.y) return 0;
                    if (r && f.x == r.x && f.y == r.y) return 0;
                    var p = c,
                        m = h;
                    "left" == l.submenuDirection ? (p = d, m = s) : "below" == l.submenuDirection ? (p = h, m = d) : "above" == l.submenuDirection && (p = s, m = c);
                    var x = n(f, p),
                        g = n(f, m),
                        C = n(v, p),
                        y = n(v, m);
                    return C > x && g > y ? (r = f, u) : (r = null, 0)
                };
            t.mouseleave(d).find(l.rowSelector).mouseenter(h).mouseleave(f).click(v), e(document).mousemove(c)
        }
        e.fn.menuAim = function(e) { return this.each(function() { n.call(this, e) }), this }
    }(jQuery);

function countdown() {
    var e = new Date("Decamber 31, 2021 24:00:00"),
        t = (new Date).getTime(),
        o = e - t,
        l = setInterval(function() {
            o -= 1e3;
            var e = Math.floor(o / 864e5),
                t = Math.floor(o % 864e5 / 36e5),
                n = Math.floor(o % 36e5 / 6e4),
                a = Math.floor(o / 1e3 % 60);
            $(".days").html(e), $(".hours").html(("0" + t).slice(-2)), $(".minutes").html(("0" + n).slice(-2)), $(".seconds").html(("0" + a).slice(-2)), 0 > o && clearInterval(l)
        }, 1e3)
}
countdown();
$(".button").click(function() { $(".flash").addClass("animate--drop-in-fade-out"), setTimeout(function() { $(".flash").removeClass("animate--drop-in-fade-out") }, 2500) });