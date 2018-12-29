
$(document).ready(function () {
    deliveryApp.barStyleClick();
    deliveryApp.datePicker();


});


var deliveryApp = (function ($) {
    var barStyleClick = function (text) {
        $('.bar-option--icon').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('active')) return false;
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            if($('.control-week').hasClass('hasWeek')) {
                $('.control-week, .container_row').removeClass('hasWeek');
            }else {
                $('.control-week, .container_row').addClass('hasWeek');
            }
            e.stopPropagation();
        })

    };
    var datePicker = function() {
        try{
            var _RANGE = 7;
            var _elm = $( "#datepicker" );
            var _elmText = $( ".control-week--title" );
            $(function(){
                _elm.datepicker();
                _elm.datepicker( "setDate", new Date());
                var next_date =  moment(new Date()).add(_RANGE,'days').format('YYYY-MM-DD');
                var _str = moment(new Date()).format('MMMM D') + ' - ' + moment(next_date).format('MMMM D, YYYY');
                _elmText.html(_str);
            });
            $('.icon_date').on('click', function (e) {
                e.preventDefault();
                var _ctl = $(this).attr('data-date');
                var _date = _elm.datepicker( "getDate");
                var next_date =  moment(_date).add(_RANGE,'days').format('YYYY-MM-DD');
                var prev_date =  moment(_date).add(-_RANGE,'days').format('YYYY-MM-DD');
                switch (_ctl) {
                    case 'next':
                        _elm.datepicker("setDate", new Date(next_date));
                        // November 4 - 10, 2018
                        var _str = moment(_date).format('MMMM D') + ' - ' + moment(next_date).format('MMMM D, YYYY');
                        _elmText.html(_str);
                        break;
                    case 'prev':
                        _elm.datepicker("setDate", new Date(prev_date));
                        var _str = moment(_date).format('MMMM D') + ' - ' + moment(prev_date).format('MMMM D, YYYY');
                        _elmText.html(_str);
                        break;
                    default:
                        break;
                }
                e.stopPropagation();
                return false;
            })

        }catch (e) {
            console.log('datetimepicker', e.message);
        }
    }
    var onChangeDate = function() {};
    window.deliveryApp = deliveryApp;
    return {
        barStyleClick: barStyleClick,
        datePicker: datePicker,
        onChangeDate: onChangeDate
    };

})($);


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

