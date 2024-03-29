/* 
* Smooth Scroll on Pageload
* Smooth scrolling on page load if URL have a hash
* Author: Franco Moya - @iamravenous
*/

if (window.location.hash) {
    var hash = window.location.hash;

    if ($(hash).length) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'swing');
    }
}