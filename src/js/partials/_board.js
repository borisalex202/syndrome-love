var board = $('.board.thumb');
board
  .mouseover(function(){
    var boardHeight = $(this).height(),
        description = $(this).find('.description'),
        boardImg = $(this).find('img'),
        difference = $(this).data('difference');

      description.css({
        top: difference
      })
      boardImg.css({
        top: 0
      });
  })
  .mouseleave(function(){
    var description = $(this).find('.description'),
        boardImg = $(this).find('img'),
        boardImgHeight = boardImg.height();

    boardImg.css({
      top: -boardImgHeight
    });
    description.css({
      top: 0
    })
  });

function boardCounting() {
  board
    .each(function(){
      var boardImg = $(this).find('img'),
          boardHeight = $(this).height(),
          boardOffset = $(this).offset().top + boardHeight,
          description = $(this).find('.description'),
          difference = 0;

      if($(window).width() >= 361) {
        difference = boardOffset - description.offset().top + 20;
        $(this).data('difference', difference);
      }
      if($(window).width() <= 360) {
        difference = boardOffset - description.offset().top - 20;
        $(this).data('difference', difference);
      }
      setTimeout(function(){
        var boardImgHeight = boardImg.height();
        if($(window).width() >= 361) {
          boardImg.css({
            top: -boardImgHeight
          });
        }
        if($(window).width() <= 360) {
          boardImg.css({
            top: -boardImgHeight
          });
        }
      }, 100);
    })
}
$(window).on('load resize', function(){
  boardCounting();
})
