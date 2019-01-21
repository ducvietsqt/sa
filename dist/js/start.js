
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
            paddingTop: isMobile.any() ? '70px' : '23.6vh',
            // paddingBottom: '10px',
            // autoScrolling: true,
            fitToSection: false,
            fitToSectionDelay: 5000,
            lazyLoading: false,
            navigationPosition: 'left',
            css3: false,
            // responsiveWidth: 0,
            // responsiveHeight: 0,
            afterLoad: function(origin, destination, direction){
                var loadedSection = this;
                //using index
                if(destination === 1) {
                    $('#fullpage').css('top','0');
                }

            },
            afterResize: function(width, height){
                // fullpage_api.destroy();
                $.fn.fullpage.reBuild();
                // $.fn.fullpage.setResponsive(true);

            },
            afterResponsive: function () {
                // $.fn.fullpage.reBuild();
            }
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

