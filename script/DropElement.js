var winload = function () {//елементи для перетягування
    "use strict";
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    var yellow = document.getElementById('yellow');
    var drop_zone;
    var style_zone;
    var wreaper;
    if (document.getElementsByClassName) {//визначаємо дроп-зону, зону перетягування
        drop_zone = document.getElementsByClassName('drop_zone')[0];
        style_zone = document.getElementsByClassName('style')[0];
        wreaper = document.getElementsByClassName('wreaper')[0];
    } else {
        drop_zone = document.querySelectorAll('.drop_zone')[0];
        style_zone = document.querySelectorAll('.style')[0];
        wreaper = document.querySelectorAll('.wreaper')[0];
    }
    var drag_el;//ел-т draggable
    red.onmousedown = down_handler;
    green.onmousedown = down_handler;
    blue.onmousedown = down_handler;
    yellow.onmousedown = down_handler;
    function down_handler(e) {
        drag_el = this;
        e = e || window.event;
        drag_el.ondragstart = function () {
            return false;
        };
        drag_el.style.position = 'absolute';//визначаємо положення
        moving(e);
        drag_el.style.zIndex = 1000; //встановлюємо поверх інших ел-в

        function moving(e) {
            e = e || window.event;
            if (!e.pageX) {
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }//далі - переміщення квадратиків у межах відповідного блока
            if (e.pageX - drag_el.offsetWidth / 2 > style_zone.offsetLeft && e.pageX + drag_el.offsetWidth / 2 < style_zone.offsetLeft + style_zone.offsetWidth) {
                drag_el.style.left = e.pageX - drag_el.offsetWidth / 2 + 'px';
            } else if (e.pageX + drag_el.offsetWidth / 2 < style_zone.offsetLeft + style_zone.offsetWidth) {
                drag_el.style.left = style_zone.offsetLeft + 'px';
            }
            if (e.pageY - drag_el.offsetHeight / 2 > style_zone.offsetTop && e.pageY + drag_el.offsetHeight / 2 < style_zone.offsetTop + style_zone.offsetHeight) {
                drag_el.style.top = e.pageY - drag_el.offsetHeight / 2 + 'px';
            } else if (e.pageY + drag_el.offsetHeight / 2 < style_zone.offsetTop + style_zone.offsetHeight) {
                drag_el.style.top = style_zone.offsetTop + 'px';
            }
        }
        document.onmousemove = moving;
        drag_el.onmouseup = function (e) {
            e = e || window.event;
            if (!e.pageX) {
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            document.onmousemove = null;
            drag_el.onmouseup = null;
            if (red !== drag_el && red.style.zIndex !== 1) {
                red.style.zIndex = 1;
            }
            if (green !== drag_el && green.style.zIndex !== 1) {
                green.style.zIndex = 1;
            }
            if (blue !== drag_el && blue.style.zIndex !== 1) {
                blue.style.zIndex = 1;
            }
            if (yellow !== drag_el && yellow.style.zIndex !== 1) {
                yellow.style.zIndex = 1;
            }
            drag_el.style.zIndex = 2;
            //якщо ел-т кинули в дроп-зону, то змінити фон сторінки, оновити положення ел-в
            if (e.pageX > drop_zone.offsetLeft && e.pageX < drop_zone.offsetLeft + drop_zone.offsetWidth && e.pageY > drop_zone.offsetTop && e.pageY < drop_zone.offsetHeight + drop_zone.offsetTop) {
                if (drag_el === red) {
                    wreaper.style.backgroundImage = 'url(images/redchunk.png)';
                } else if (drag_el === green) {
                    wreaper.style.backgroundImage = 'url(images/greenchunk.png)';
                } else if (drag_el === blue) {
                    wreaper.style.backgroundImage = 'url(images/chunk.png)';
                } else {
                    wreaper.style.backgroundImage = 'url(images/yellowchunk.png)';
                }
                reset_blocks();
            }
        };
    }
    window.onresize = reset_blocks;
    function reset_blocks() {//встановлення ел-в в початкове положення
        red.style.position = 'relative';
        green.style.position = 'relative';
        blue.style.position = 'relative';
        yellow.style.position = 'relative';
        red.style.left = '5px';
        green.style.left = '5px';
        blue.style.left = '5px';
        yellow.style.left = '5px';
        red.style.top = '5px';
        green.style.top = '5px';
        blue.style.top = '5px';
        yellow.style.top = '5px';
    }
};


if (window.addEventListener) {
    window.addEventListener('load', winload);
} else {
    window.attachEvent('onload', winload);
}