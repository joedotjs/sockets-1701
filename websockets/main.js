$(function () {

    var socket = io(window.location.origin);

    socket.on('connect', function () {

        $(document).on('mousemove', function (e) {
            var x = e.pageX;
            var y = e.pageY;
            socket.emit('mousemove', x, y);
        });

        socket.on('otherMousemove', function (x, y) {

            var $div = $('<div></div>')

            $div
              .css({width: 5, height: 5, background: 'red', position: 'fixed'})
              .css({top: `${y}px`, left: `${x}px`})
              .appendTo($('body'));

            setTimeout(function () {
                $div.remove();
            }, 400);


        });

    });

});

