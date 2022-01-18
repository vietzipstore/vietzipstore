// 1=========================
function loadCSS(e,t,o){"use strict";var i=window.document.createElement("link"),s=t||window.document.getElementsByTagName("script")[0];i.rel="stylesheet",i.href=e,i.media="only x",s.parentNode.insertBefore(i,s),setTimeout(function(){i.media=o||"all"})}loadCSS("https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css"),"undefined"==typeof jQuery&&document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"><\/script>'),"undefined"==typeof jQuery&&document.write('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.0/slick/slick.min.js"><\/script>');
// 2=========================

var modernshop_notif_lanjut = "<span>Không được phép thêm hơn 10 sản phẩm</span>";
var modernshop_bersihkan = "Giỏ của bạn trống. Vui lòng quay lại để thêm sản phẩm.";
var modernshop_tambahkan_biaya = "Có vấn đề với giỏ hàng.";
var modernshop_notif_beli = "<span>Giỏ hàng của bạn chứa sản phẩm không tồn tại.</span>";
var refres_pembelian = "<span>Cập nhật giỏ hàng</span>";
var modernshop_notifikasi_pengiriman = "Đã thêm chi phí vận chuyển";
var modernshop_maksimal_tambahan = "10"; // Số lượng tối đa mỗi sản phẩm
var modernshop_notifikasi_harga = "Số lượng phải lớn hơn 0";
var paywithpaypal = "Tiếp tục đến Paypal";
var cashondelivery = "Thanh toán khi nhận hàng (COD)";
var banktransfer = "Chuyển khoản ngân hàng";
var currency_page = "VND";
var language_page = "Vietnamese";

// Thêm chi phí vận chuyển theo từng khu vực
var modernshop_tambah_alamat = [
["Chọn vị trí", 0],
["Quảng Nam, Đà Nẵng", 10000],
["TP. Hồ Chí Minh", 30000],
["TP. Hà Nội", 30000],
["Tỉnh khác", 45000]
];

// 3=========================
$(document).ready(function(){$('div[class="box-sidebar"]').before($("#sidebar-left").html()),$("#sidebar-left").html("")}),$(document).ready(function(){$('div[class="slide-content"]').before($("#box-slider").html()),$("#box-slider").html("")}),$(document).ready(function(){$('div[class="desc"]').before($("#desc").html()),$("#desc").html("")}),$(document).ready(function(){$('div[class="timerpost1"]').before($("#timerpost").html()),$("#timerpost").html("")});

