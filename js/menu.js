jQuery['fn']['mr'] = function(mr1) {
    var mr2 = {
        speed: 300,
        animation: 'fading',
        indicator: true
    };
    $['extend'](mr2, mr1);
    var mr3 = $('.mr-menu');
    var mr4 = window['innerWidth'];
    $(mr3)['prepend']('<li class=\'showhide\'><span class=\'title\'>MENU</span><span class=\'icon\'><em></em><em></em><em></em><em></em></span></li>');
    if (mr2['indicator'] == true) {
        $(mr3)['find']('li')['each'](function() {
            if ($(this)['children']('ul')['length'] > 0) {
                $(this)['append']('<span class=\'indicator\'></span>');
            };
        });
    };
    mr5();
    $(window)['resize'](function() {
        if (mr4 <= 768 && window['innerWidth'] > 768) {
            mrc();
            mrb();
            mr6();
        };
        if (mr4 > 768 && window['innerWidth'] <= 768) {
            mrc();
            mra();
            mr9();
        };
        mr4 = window['innerWidth'];
    });

    function mr5() {
        if (window['innerWidth'] <= 768) {
            mra();
            mr9();
        } else {
            mrb();
            mr6();
        };
    };

    function mr6() {
        if (navigator['userAgent']['match'](/Mobi/i) || window['navigator']['msMaxTouchPoints'] > 0) {
            $(mr3)['find']('a')['on']('click touchstart', function(mr7) {
                mr7['stopPropagation']();
                mr7['preventDefault']();
                $(this)['parent']('li')['siblings']('li')['find']('ul')['stop'](true, true)['fadeOut'](mr2['speed']);
                if ($(this)['siblings']('ul')['css']('display') == 'none') {
                    $(this)['siblings']('ul')['stop'](true, true)['fadeIn'](mr2['speed'])['addClass'](mr2['animation']);
                    return false;
                } else {
                    $(this)['siblings']('ul')['stop'](true, true)['fadeOut'](mr2['speed'])['removeClass'](mr2['animation']);
                    $(this)['siblings']('ul')['find']('ul')['stop'](true, true)['fadeOut'](mr2['speed'])['removeClass'](mr2['animation']);
                };
                window['location']['href'] = $(this)['attr']('href');
            });
            $(document)['bind']('click.menu touchstart.menu', function(mr8) {
                if ($(mr8['target'])['closest'](mr3)['length'] == 0) {
                    $(mr3)['find']('ul')['fadeOut'](mr2['speed']);
                };
            });
        } else {
            $(mr3)['find']('li')['bind']('mouseenter', function() {
                $(this)['children']('ul')['stop'](true, true)['fadeIn'](mr2['speed'])['addClass'](mr2['animation']);
            })['bind']('mouseleave', function() {
                $(this)['children']('ul')['stop'](true, true)['fadeOut'](mr2['speed'])['removeClass'](mr2['animation']);
            });
        };
    };

    function mr9() {
        $(mr3)['find']('li:not(.showhide)')['each'](function() {
            if ($(this)['children']('ul')['length'] > 0) {
                $(this)['children']('a')['on']('click', function() {
                    if ($(this)['siblings']('ul')['css']('display') == 'none') {
                        $(this)['siblings']('ul')['slideDown'](mr2['speed'])['addClass'](mr2['animation']);
                        $(this)['parent']('li')['siblings']('li')['find']('ul')['stop'](true, true)['slideUp'](mr2['speed']);
                        return false;
                    } else {
                        $(this)['siblings']('ul')['slideUp'](mr2['speed'])['removeClass'](mr2['animation']);
                    };
                });
            };
        });
    };

    function mra() {
        $(mr3)['children']('li:not(.showhide)')['hide'](0);
        $(mr3)['children']('li.showhide')['show'](0)['bind']('click', function() {
            if ($(mr3)['children']('li')['is'](':hidden')) {
                $(mr3)['children']('li')['slideDown'](mr2['speed']);
            } else {
                $(mr3)['children']('li:not(.showhide)')['slideUp'](mr2['speed']);
                $(mr3)['find']('ul')['hide'](mr2['speed']);
                $(mr3)['children']('li.showhide')['show'](0);
            };
        });
    };

    function mrb() {
        $(mr3)['children']('li')['show'](0);
        $(mr3)['children']('li.showhide')['hide'](0);
    };

    function mrc() {
        $(mr3)['find']('li, a')['unbind']();
        $(document)['unbind']('click.menu touchstart.menu');
        $(mr3)['find']('ul')['hide'](0);
    };
};
