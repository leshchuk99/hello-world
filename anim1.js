 (function ($) {
    'use strict';
    $.fn.animation = function (elements, time) {
        function slider() {
            $(elements).first().animate({
                    marginLeft: 0
                }, 100,
                function () {
                    $(this).appendTo($(this).parent()).css({
                        marginLeft: 0
                    });
                });
        }
        setInterval(slider, time);
    };
}(jQuery));
        $('#row').animation('.elem', 1000);