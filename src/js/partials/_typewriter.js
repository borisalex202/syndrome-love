$.fn.typewriter = function (params) {
    function writer(elem, text, speed, repeat) {
    var i = 0,
        TextNode = document.createTextNode("");
        elem.appendChild(TextNode);
        elem.timer = setInterval(function () {
            if (text.length === i) repeat ? (i = 0, TextNode.data = "") : clearInterval(elem.timer);
            else
                for (TextNode.data += text[i++];" " === text[i];) TextNode.data += text[i++]
        }, speed)
    }
    var options = {
        speed: 500,
        repeat: false
    }, options = $.extend(options, params);
    return this.each(function () {
        var text = $(this).text(),
            elemHeight = $(this).height();

        $(this).css({
            display: 'block',
            height: elemHeight,
            width: '100%'
        });
        $(this).text("");
        writer(this, text, options.speed, options.repeat)
    })
};
