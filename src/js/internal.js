var nextArrowButton = "<svg class='icon icon-arrow-next slick-next'><use xlink:href='#icon-arrow-next'></use></svg>",
    prevArrowButton = "<svg class='icon icon-arrow-prev slick-prev'><use xlink:href='#icon-arrow-prev'></use></svg>";

(function($) {
  @@include('./partials/_typewriter.js');
  @@include('./partials/_board.js');

  $('[data-toggle]').on('click', function(){
    var el = $(this).data('toggle'),
        className = $(this).data('class-name');

    if(className){
      $(el).toggleClass(className);
    } else {
      $(el).toggleClass('active');
    }
  });

  $('.has-childs').on('click', function(){
    $(this).toggleClass('active').closest('.main-menu').toggleClass('show-childs');
  });
  $(document).mouseup(function (e){
		var div = $('.mobile-menu.active');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.removeClass('active');
      $('body').removeClass('no-scroll');
		}
	});

  $('input, textarea')
    .each(function(){
      if ($(this).val().length > 0) {
        $(this).addClass('active').closest('.input-block').addClass('active');
      }
    })
    .blur(function() {
        if (!$(this).val()) {
            $(this).closest('.input-block').removeClass('active');
        }
    })
    .focus(function() {
        $(this).closest('.input-block').addClass('active')
    })
    .change(function(){
        var el = $(this);
        if (el.val()) {
            el.addClass('active');
            el.closest('.input-block').addClass('active');
        } else {
            el.removeClass('active');
            el.closest('.input-block').removeClass('active');
        }
    });

  var linkHasChild = $('.has-childs');

	linkHasChild
  	.mouseover(function(){
  		$(this).addClass('hover');
  	})
  	.mouseleave(function(){
  		setTimeout(function(){ linkHasChild.removeClass('hover') }, 500);
  	})
    .children('a').on('click', function(e){
      e.preventDefault();
    });

 $('.js-select').each(function(){
   var flag = 0,
       optionHeight = 0;

   $(this).styler({
     onSelectOpened: function(){
       var list = $(this).find('.jq-selectbox__dropdown ul'),
           jspContainer = $(this).find('.jspContainer'),
           jsSelect = $(this).closest('.js-select'),
           dropdown = jsSelect.find('.jq-selectbox__dropdown'),
           dropdownHeight = dropdown.height();

       if(flag==0) {
         jsSelect.data('option', dropdownHeight)
         optionHeight = jsSelect.data('option');
       }
       flag = 1;

       jspContainer.height(optionHeight);
       list.jScrollPane();
     },
     onSelectClosed: function() {
       var list = $(this).find('.jq-selectbox__dropdown ul');

       list.jScrollPane('destroy');
     }
   });
 });

  $('.preventDefault').on('click',function (e) {
    e.preventDefault();
  });

  $('.tab-nav a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.accordion-link').on('click', function(){
    $(this).closest('.accordion').find('.accordion-content').slideToggle();
    $(this).closest('.accordion').toggleClass('active');
  });

  $('.icon-menu').on('click', function(){
    $('body').addClass('no-scroll');
  });
  $('.icon-cross').on('click', function(){
    $('body').removeClass('no-scroll');
  });

  $(window).on("load resize",function(){
    arrowPosition();
  });

  function arrowPosition() {
    $('.has-childs').each(function(){
      var itemWidth = $(this).width()/2 - 15;

      $(this).find('.arrow').css('left', itemWidth);
    });
  }

})(jQuery);
