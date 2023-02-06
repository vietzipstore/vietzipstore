$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll_go_top').fadeIn()
        } else {
            $('#scroll_go_top').fadeOut()
        }
    });
    $('#scroll_go_top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return !1
    });
    $(".tooltip-product ul").each(function() {
        $(this).prepend('<h5>Khuyến mãi</h5>')
    });
    var width_nav_sub = $(".header_top_bar .container").first().width() - $(".top_bar_nav").width() - 10;
    var height_nav_sub = ($("#nav_pc > ul > li").length) * 40;
    $(".sub_nav").css({
        'width': width_nav_sub,
        'min-height': height_nav_sub
    });
    $(".show-popup-call-center").on('click', function() {
        $.fancybox.open({
            'src': '#popup-modal-call-center'
        })
    });
    $(".show-popup-chat-online").on('click', function() {
        $.fancybox.open({
            'src': '#popup-support-chat'
        })
    });
    $(".show-popup-support-local").on('click', function() {
        $.fancybox.open({
            'src': '#popup-support-local'
        })
    });
    $("#lst_pro_sup li").on('click', function() {
        var val = $(this).data('val');
        if ($(this).hasClass('active')) {
            $(this).parent().find('li').removeClass('active');
            $("#product_view_more").val('').hide();
            $("#product_support").val(0)
        } else {
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            if (val == -1) $("#product_view_more").show();
            else
                $("#product_view_more").val('').hide();
            $("#product_support").val($(this).data('val'))
        }
    });
    orderAddress()
});
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});

function orderAddress() {
    $(".area-group-2").prependTo('#popup-support-local ul');
    $(".area-group-1").prependTo('#popup-support-local ul');
    $(".area-group-0").prependTo('#popup-support-local ul')
}
$(window).resize(function() {
    fix_height_product_image()
});
$(window).load(function(e) {
    $(".icon-cart").fancybox({
        width: '500px',
        type: 'iframe',
        autoSize: !0,
        afterClose: function() {
            $.getJSON("../inc/ajax-update-price-cart.php", function(data) {
                $(".cart_all_number").html(decodeURIComponent(data.so_luong))
            })
        }
    })
});
$(".btn-close-popup").on('click', function() {
    $.fancybox.close("all")
});
if ($("#thuonghieu_carousel").length) {
    var thuonghieu_carousel = $("#thuonghieu_carousel");
    thuonghieu_carousel.owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    })
};
if ($("#catalog-ads-banner").length) {
    $(window).load(function() {
        var catalog_ads_banner = $("#catalog-ads-banner");
        catalog_ads_banner.owlCarousel({
            loop: !0,
            margin: 10,
            autoplay: !0,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                    autoHeight: !0
                },
                600: {
                    items: 1,
                    autoHeight: !0
                },
                1000: {
                    items: 3
                }
            }
        });
        $('.icon-nav-sl-cat-left').click(function() {
            catalog_ads_banner.trigger('next.owl.carousel')
        });
        $('.icon-nav-sl-cat-right').click(function() {
            catalog_ads_banner.trigger('prev.owl.carousel', [300])
        })
    })
};
if ($("#gift_img").length) {
    var gift_img = $("#gift_img");
    gift_img.owlCarousel({
        margin: 10,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })
};
if ($(".gift_slider").length) {
    var gift_slider = $(".gift_slider");
    gift_slider.owlCarousel({
        margin: 5,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 1000,
        stageElement: 'ul',
        itemElement: 'li',
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
};

function call_slider_gift() {
    var gift_slider = $(".gift_slider");
    gift_slider.owlCarousel({
        margin: 5,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 1000,
        stageElement: 'ul',
        itemElement: 'li',
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
}
if ($(".add-cart").length) {
    $(".add-cart").on("click", function() {
        var soluong = 1;
        var idSP = $(this).attr('idSP');
        var price = $(this).data('price');
        var id_gift = $('input[name="QuaTang[]"]:checked').val();
        var huongvi = $(".list-huongvi-new li.active").data('value');
        var gift = "[0";
        $('input[name="QuaTang[]"]').each(function() {
            if (this.checked) gift += "," + $(this).val()
        });
        gift += "]";
        if (id_gift == undefined) id_gift = 0;
        var add_cart = 0

        if (huongvi == undefined) {
            if ($(".list-huongvi-new li").length > 2) {
                huongvi = 'Chưa chọn'
                add_cart = 1
            } else {
                add_cart = 1
            }
        } else {
            add_cart = 1
        }
        var productsupport = $("#product_support").val();
        var more = $("#product_view_more").val();
        if (add_cart == 1) {
            var bien = "action=add&soluong=" + soluong + "&idSP=" + idSP + "&id_gift=" + gift + "&HuongVi=" + huongvi + "&support=" + productsupport + "&more=" + more;

            var data_href = $(this).attr('data-href');
            var href = 'luu-don-hang-' + idSP + '.html';
            $.ajax({
                url: 'lib/cart.php',
                type: 'GET',
                dataType: 'json',
                data: bien
            }).done(function(data) {
                if (data.status == 1) {
                    if (data_href == 'ajax') {
                        show_popup('sản phẩm đã được thêm vào giỏ hàng')
                    } else {
                        window.location.replace(href)
                    }
                } else {
                    show_popup('có lỗi vui lòng thử lại sau')
                }
            }).fail(function(response) {
                console.log("có lỗi")
            })
        }
        return !1
    })
}
if ($('.choose_gifts').length) {
    $('.choose_gifts').change(function() {
        if ($(this).is(":checked")) {
            var total_gift = 1;
            if ($("#total_gift").length) {
                total_gift = $("#total_gift").val()
            }
            var checked = $('input[name="QuaTang[]"]:checked').length;
            if (checked == total_gift) {
                $('input[name="QuaTang[]"]').each(function() {
                    if (!this.checked) {
                        $(this).prop('disabled', !0)
                    }
                })
            }
        } else {
            $('input[name="QuaTang[]"]').each(function() {
                $(this).prop('disabled', !1)
            })
        }
    })
}

function fix_height_product_image() {};

function notify_show(title, content, type) {
    $(document).notifyMe('top', type, title, content, 00, 1500)
};
$(document).ready(function() {
    show_widget_footer();
    $(".widget-01 ul").css('display', 'block')
});
$(window).resize(function() {
    var w = $(window).width();
    if (w > 640) {
        $(".list-widget-cnt").find("ul").show()
    }
});

function show_widget_footer() {
    $(".widget-00 h3").on('click', function() {
        var w = $(window).width();
        if (w < 640) {
            $(this).parent().find("ul").toggle('100')
        }
    })
};
$(document).ready(function() {
    $(".footer-icon-nav-mobile").on('click', function(e) {
        e.preventDefault();
        $("#open-menu-mobile").trigger('click');
    })
});

function fix_menu_mobile() {
    $("#open-menu-mobile").click(function() {
        if ($(this).hasClass("close_nav_mobile")) {
            $(".background-full-op").css('display', 'block');
            $('body').css({
                'overflow-y': 'hidden'
            });
            $(this).removeClass("close_nav_mobile").addClass("open_nav_mobile");
            $(this).parent().css({
                'background-color': "#ffffff",
                'z-index': '11111'
            });
            var pos_top = $(this).offset().top;
            var width_full = $(window).width();
            var height_full = $(window).height();
            $(this).next().css({
                'width': width_full,
                'height': height_full - 95,
                'overflow-y': 'auto'
            }).toggle();
            $(this).next().find('ul').css('display', 'none');
            $(".list-menu-main-mobile li i").removeClass("fa-caret-up").addClass('fa-caret-down');
            $(".list-menu-main-mobile li").removeClass("active")
        } else if ($(this).hasClass("open_nav_mobile")) {
            $(".background-full-op").css('display', 'none');
            $('body').css({
                'overflow-y': 'auto'
            });
            $(this).removeClass("open_nav_mobile").addClass("close_nav_mobile");
            $(this).parent().css('background', 'none');
            var pos_top = $(this).offset().top;
            var width_full = $(window).width();
            var height_full = $(window).height();
            $(this).next().css({
                'width': width_full,
                'height': height_full - 95,
                'overflow-y': 'auto'
            }).toggle(100)
        }
    });
    $(".background-full-op").click(function() {
        $(".background-full-op").css('display', 'none');
        $('body').css({
            'overflow-y': 'auto'
        });
        $(".list-menu-main-mobile").css({
            'display': 'none'
        });
        $("#open-menu-mobile").removeClass("open_nav_mobile").addClass("close_nav_mobile");
        $("#open-menu-mobile").parent().css('background', 'none')
    });
    $(".list-menu-main-mobile li a i").click(function() {
        if ($(this).hasClass("fa-caret-down")) {
            $(".list-menu-main-mobile li ul").css('display', 'none');
            $(".list-menu-main-mobile li i").removeClass("fa-caret-up").addClass('fa-caret-down');
            $(".list-menu-main-mobile li").removeClass("active");
            $(this).removeClass("fa-caret-down").addClass('fa-caret-up');
            $(this).parent().parent('li').addClass('active');
            $(this).parent().next('ul').toggle().find('ul').toggle()
        } else if ($(this).hasClass("fa-caret-up")) {
            $(".list-menu-main-mobile li").removeClass("active");
            $(this).removeClass("fa-caret-up").addClass('fa-caret-down');
            $(this).parent().parent().find('ul').toggle()
        }
        return !1
    })
};
$(".more-view-content div.more_view").on('click', function() {
    $(this).hide();
    $(this).parent().css({
        'max-height': 'none'
    })
});
if ($("#owl-new-footer").length) {
    var owl_new_footer = $("#owl-new-footer").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.nav_footer_news .btn-pre').click(function() {
        owl_new_footer.trigger('next.owl.carousel')
    });
    $('.nav_footer_news .btn-next').click(function() {
        owl_new_footer.trigger('prev.owl.carousel', [300])
    })
};
if ($("#owl-img-footer").length) {
    var owl_img_footer = $("#owl-img-footer").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.nav_footer_img .btn-pre').click(function() {
        owl_img_footer.trigger('next.owl.carousel')
    });
    $('.nav_footer_img .btn-next').click(function() {
        owl_img_footer.trigger('prev.owl.carousel', [300])
    })
};

function show_popup(msg) {
    $("#content_popup p").html(msg);
    $.fancybox.open({
        src: "#content_popup",
        modal: !0
    })
};
$(".show-hotline").on('click', function() {
    $.fancybox.open({
        src: "#list_phone_popup"
    });
    return !1
})