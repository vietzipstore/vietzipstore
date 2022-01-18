// ===js hotline.js ===================================================
(function(b) {
    var a = "https://web.cmbliss.com/webtools/hotline/";
    b.fn.hotline = function(d) {
        var f = b.extend({
            themes: "default",
            phone: "08.6888.6905",
            top: 0,
            p_top: false,
            left: 0,
            p_left: true,
            bottom: 0,
            p_bottom: true,
            right: 0,
            p_right: false,
            img_icon: a + "images/icon-call.png",
            bg_color: "#e60808",
            abg_color: "rgba(230, 8, 8, 0.7)",
            show_bar: true,
            position: "fixed"
        }, d);
        var c = f.phone.split("");
        var h = "";
        for (var e = 0; e < c.length; e++) {
            if (isNaN(c[e])) {} else {
                if (c[e] != " ") {
                    h += c[e]
                }
            }
        }
        switch (f.themes) {
            case "default":
                b(":root").css({
                    "--cmbHl-bg": f.bg_color,
                    "--cmbHl-abg": f.abg_color
                });
                var g = '<div class="hotline-phone-ring-wrap">                    <div class="hotline-phone-ring">                        <div class="hotline-phone-ring-circle"></div>                        <div class="hotline-phone-ring-circle-fill"></div>                        <div class="hotline-phone-ring-img-circle">                            <a href="tel:' + h + '" class="pps-btn-img">                                <img src="' + f.img_icon + '" alt="Gá»i Ä‘iá»‡n thoáº¡i" width="50">                            </a>                        </div>                    </div>                </div>';
                var j = '<div class="hotline-bar">                        <a href="tel:' + h + '">                            <span class="text-hotline">' + f.phone + "</span>                        </a>                    </div>";
                b(this).append(g);
                if (f.show_bar) {
                    b(this).find(".hotline-phone-ring-wrap").append(j)
                }
                b(this).find(".hotline-phone-ring-wrap").css({
                    position: f.position
                });
                if (f.p_top) {
                    b(this).find(".hotline-phone-ring-wrap").css({
                        top: f.top
                    })
                }
                if (f.p_right) {
                    b(this).find(".hotline-phone-ring-wrap").css({
                        right: f.right
                    });
                    b(this).find(".hotline-phone-ring-wrap").find(".hotline-bar").css({
                        left: "auto",
                        right: "33px"
                    });
                    b(this).find(".hotline-phone-ring-wrap").find(".hotline-bar a").css({
                        "text-indent": "10px"
                    })
                }
                if (f.p_bottom) {
                    b(this).find(".hotline-phone-ring-wrap").css({
                        bottom: f.bottom
                    })
                }
                if (f.p_left) {
                    b(this).find(".hotline-phone-ring-wrap").css({
                        left: f.left
                    })
                }
                b("body").append('<link rel="stylesheet" href="' + a + "css/hotline-themes/" + f.themes + '.css" type="text/css" />');
                break;
            case "hero":
                b(":root").css({
                    "--cmbHl-H-bg": f.bg_color,
                    "--cmbHl-H-abg": f.abg_color
                });
                var g = '<div class="hotline-hero hero-btn">                    <a href="tel:' + h + '" class="btn">                        <img src="' + f.img_icon + '" alt="Gá»i Ä‘iá»‡n thoáº¡i">                    </a>                    <span class="particles-circle"></span>                    <span class="particles-circle"></span>                    <span class="particles-circle"></span>                    <span class="particles-circle"></span>                    <span class="particles-circle"></span>                    <span class="particles-circle"></span>                </div>';
                var j = '<span class="hotline-hero-text">' + f.phone + "</span>";
                b(this).append(g);
                if (f.show_bar) {
                    b(this).find(".hotline-hero a").append(j)
                }
                b(this).find(".hotline-hero").css({
                    position: f.position
                });
                if (f.p_top) {
                    b(this).find(".hotline-hero").css({
                        top: f.top + 20
                    })
                }
                if (f.p_right) {
                    b(this).find(".hotline-hero").css({
                        right: f.right
                    });
                    b(this).find(".hotline-hero").css({
                        left: "auto",
                        right: b(this).find(".hotline-hero .btn").width() + 33
                    });
                    b(this).find(".hotline-hero").css({
                        "text-indent": "10px"
                    })
                }
                if (f.p_bottom) {
                    b(this).find(".hotline-hero").css({
                        bottom: f.bottom + 70
                    })
                }
                if (f.p_left) {
                    b(this).find(".hotline-hero").css({
                        left: f.left + 80
                    })
                }
                b("body").append('<link rel="stylesheet" href="' + a + "css/hotline-themes/" + f.themes + '.css" type="text/css" />');
                b(this).find(".hero-btn").click(function() {
                    if (!b(".hero-btn").parent().hasClass("active")) {
                        b(this).parent().stop().addClass("active");
                        setTimeout(function() {
                            b(".hero-btn").parent().removeClass("active")
                        }, 2000)
                    }
                });
                break
        }
    }
}(jQuery));

// ===js hotline.js ===================================================



$("body").hotline({
    phone: "08.6888.6905",
    p_bottom: true,
    bottom: 0,
    p_left: true,
    left: 0,
    bg_color: "#117968",
    abg_color: "#06a80f",
    show_bar: true,
    position: "fixed",
});
// ===js hotline.js ===================================================