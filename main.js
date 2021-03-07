  AOS.init({
  	duration:1000
  });



  

/** * jQuery Line Progressbar * Author: Sharifur Rahman * Author URI : https:devrobin.com * Version: 1.0.0 */ ;
(function($) {
    'use strict';
    $.fn.rProgressbar = function(options) {
        options = $.extend({ percentage: null, ShowProgressCount: true, duration: 1000, fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '100%' }, options);
        $.options = options;
        return this.each(function(index, el) {
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
            var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');
                progressFill.css({ backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius });
                progressBar.css({ width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius });
                progressFill.animate({ width: options.percentage + "%" }, { step: function(x) { if (options.ShowProgressCount) { $(el).find(".percentCount").text(Math.round(x) + "%"); } }, duration: options.duration });
            }
            $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
        });
    }
})(jQuery);



 $('.progressbarHTML').rProgressbar({
    percentage: 95,
    fillBackgroundColor: '#007bff',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '20px',
width: '100%'
});

 $('.progressbarCSS').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#6610f2',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '20px',
width: '100%'
});

 $('.progressbarBOOTSTRAP').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#28a745',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '20px',
width: '100%'
});

 $('.progressbarJQUARY').rProgressbar({
    percentage: 60,
    fillBackgroundColor: '#17a2b8',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '20px',
width: '100%'
});

 $('.progressbarJS').rProgressbar({
    percentage: 70,
    fillBackgroundColor: 'red',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
height: '20px',
width: '100%'
});



// owl

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,


    responsive:{
        0:{
            items: 1                    
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})