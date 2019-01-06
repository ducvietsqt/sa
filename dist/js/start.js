
$(document).ready(function () {
    $(document).ready(function() {
        $(window).on('load', function () {
            // alert(1);
            $('body').addClass('loaded');
        })
        $('#fullpage').fullpage({
            //options here
            scrollHorizontally: true,
            navigation: true,
            scrollOverflow: true,
            sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
            paddingTop: '23.6vh',
            // paddingBottom: '10px',
            autoScrolling: true,
            fitToSection: false,
            fitToSectionDelay: 5000,

            navigationPosition: 'left',
        });
        //methods
        $.fn.fullpage.setAllowScrolling(true);
    });
});



var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

