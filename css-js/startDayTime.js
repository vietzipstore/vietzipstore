<!-- //<![CDATA[ -->
   
    <!--===js thời gian ngày ===================================================-->
//    <script language="javascript" type="text/javascript">
        function startDayTime() {
            dayName = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
            monName = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");
            now = new Date
                // document.write("<b>" + dayName[now.getDay()] + ", ngày " + now.getDate() + " tháng " + monName[now
                //         .getMonth()] + " năm " + now
                //     .getFullYear() + "</b>");
            document.getElementById('timeDay').innerHTML = dayName[now.getDay()] + ", ngày " + now.getDate() + " tháng " +
                monName[now
                    .getMonth()] + " năm " + now
                .getFullYear();
        }
        startDayTime();
//    </script>
    <!--===js thời gian ngày ===================================================-->

    <!--===js thời gian giờ ===================================================-->
//    <script>
        // Hàm khởi tạo đồng hồ
        function startHoursTime() {

            // Lấy Object ngày hiện tại
            var today = new Date();

            // Giờ, phút, giây hiện tại
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();

            // Chuyển đổi sang dạng 01, 02, 03
            h = checkTime(h);
            
            m = checkTime(m);
            s = checkTime(s);

            // Ghi ra trình duyệt

            document.getElementById('timeHours').innerHTML = h + ":" + m + ":" + s;
            // document.getElementById('timeHours').innerHTML = h + " giờ " + m + " phút " + s + " giây ";

            // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
            var t = setTimeout(function() {
                startHoursTime();
            }, 1000);
        }
        // ==================================================
        // Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        startHoursTime();
//    </script>
    <!--===js thời gian giờ ===================================================-->



<!-- //]]> -->