/*
 * 
 * Last Updated: Dec 05th 2013
 * 
 */

(function($) {

    function applyFocus(element) {
        $('.label_radio, .label_check').removeClass('active');
        element.closest('label').addClass('active').focus();
    }

    $.fn.label_radio_check = function() {

        $(document).on('change', ':radio', function() {
            applyFocus($(this));
            setTimeout(function() {
                $(':radio:not(:checked)').closest('.label_radio').removeClass('r_on').addClass('r_off');
                $(':radio:checked').closest('.label_radio').removeClass('r_off').addClass('r_on');
                $(':radio:not(:disabled)').closest('.label_radio').removeClass('r_dis');
                $(':radio:disabled').closest('.label_radio').addClass('r_dis');
            }, 10);
        });

        $(document).on('click', 'span.label_radio', function(e) {
            if ($(e.target).closest(".label_radio").length == 0)
                $(this).find(':radio').trigger('click');
            else
                e.stopPropagation();
        });

        $(document).on('change', ':checkbox', function() {
            applyFocus($(this));
            setTimeout(function() {
                $(':checkbox:not(:checked)').closest('.label_check').removeClass('c_on').addClass('c_off');
                $(':checkbox:checked').closest('.label_check').removeClass('c_off').addClass('c_on');
                $(':checkbox:not(:disabled)').closest('.label_check').removeClass('c_dis');
                $(':checkbox:disabled').closest('.label_check').addClass('c_dis');
            }, 10);
        });

        $(document).on('click', 'span.label_check', function(e) {
            if ($(e.target).closest(".label_check").length == 0)
                $(this).find(':checkbox').trigger('click');
            else
                e.stopPropagation();
        });

        $(document).on('keydown', '.label_check.active', function(e) {
            var keyCode = e.keyCode;
            $checkbox = $(this).find(':checkbox');
            var name = $checkbox.attr('name');
            $checkboxGroup = $(':checkbox').filter('[name=' + name + ']');
            var ind = $checkboxGroup.index($checkbox);

            if (keyCode === 37 || keyCode === 38) {
                ind--;
                while ($checkboxGroup.eq(ind).is(':disabled') && ind > - 1)
                    ind--;
            }

            else if (keyCode === 39 || keyCode === 40) {
                ind++;
                while ($checkboxGroup.eq(ind).is(':disabled') && $checkboxGroup.eq(ind).length)
                    ind++;
            }
            else
                return;

            if ($checkboxGroup.eq(ind).length && ind > -1)
                applyFocus($checkboxGroup.eq(ind));
        });

        $(document).on('focus', '.label_radio, .label_check', function(e) {
            $('.label_radio, .label_check').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on('keydown', '.label_radio, .label_check', function(e) {
            if (e.keyCode == 9) {
                $('.label_radio, .label_check').removeClass('active');
                var tab = $(this).attr('tabindex');
                tab++;
                $("*[tabindex='" + tab + "']").focus();
            }
        });

        $(document).mouseup(function(e) {
            var container = $('.label_radio, .label_check');
            if (!container.is(e.target) && container.has(e.target).length === 0)
                $('.label_radio, .label_check').removeClass('active');
        });

        var d = document;
        var safari = (navigator.userAgent.toLowerCase().indexOf('safari') !== -1) ? true : false;
        var gebtn = function(parEl, child) {
            return parEl.getElementsByTagName(child);
        };
        var gebtn2 = function(parEl, child) {
            return $('.' + child);
        };

        var body = gebtn(d, 'body')[0];
        body.className = body.className && body.className !== '' ? body.className + ' has-js' : 'has-js';

        if (!d.getElementById || !d.createTextNode)
            return;
        var ls = gebtn2(d, 'label_check');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            var inp = gebtn(l, 'input')[0];

            if ($(inp).length && $(inp).is(':checkbox') && !$(inp).hasClass('c_on') && !$(inp).hasClass('c_off')) {
                if ($(inp).is(':checked'))
                    $(l).removeClass('c_off').addClass('c_on');
                else
                    $(l).removeClass('c_on').addClass('c_off');

                if ($(inp).is(':disabled'))
                    $(l).addClass('c_dis');
                else
                    $(l).removeClass('c_dis');
            }
        }

        var ls = gebtn2(d, 'label_radio');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            var inp = gebtn(l, 'input')[0];

            if ($(inp).length && $(inp).is(':radio') && !$(inp).hasClass('r_on') && !$(inp).hasClass('r_off')) {
                if ($(inp).is(':checked'))
                    $(l).removeClass('r_off').addClass('r_on');
                else
                    $(l).removeClass('r_on').addClass('r_off');

                if ($(inp).is(':disabled'))
                    $(l).addClass('r_dis');
                else
                    $(l).removeClass('r_dis');
            }
        }
    };
})(jQuery);