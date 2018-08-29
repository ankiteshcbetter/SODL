$('.collapse').collapse();



// $('.btn-link').click(function(){
//     $('.card-header')
// })


$('.page-scroll').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    console.log(id);
    $('html, body').animate({scrollTop: $(id).offset().top}, 1000);


});

$(window).scroll(function () {

    var scrollPos = jQuery(this).scrollTop();
    var digital =

    if (scrollPos > 300) {
        jQuery('nav.navbar').addClass('sticky__color');
    } else {
        jQuery('nav.navbar').removeClass('sticky__color');
    }


});
