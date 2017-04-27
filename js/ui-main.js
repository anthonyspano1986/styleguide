var continuousElements = document.getElementsByClassName('category-head')

var sidebarItem = $('.sidebar-nav-list a').html();

//for (var i = 0; i < continuousElements.length; i++) {
//    new Waypoint({
//        element: continuousElements[i],
//        handler: function () {
//            var currentEl = this.element.innerHTML;
//            console.log(currentEl);
//            $('.header-headline').html(currentEl);
//        },
//        offset: 75,
//        continuous: true
//    })
//}

$(function () {

    var loginPanelBtn = $('.login-ribbon__button');
    var loginPanel = $('.login-menu > .row-inner');

    loginPanel.hide();

    loginPanelBtn.click(function () {
        $(loginPanel).toggle(); // or:
        $(loginPanel).find('.login-widget--default').toggleClass('login-widget--open');
    });

    // Open menu
    $('.qmoney-openMenu').click(function () {
        $('.qmoney-sidebar').toggleClass('is-open');
        $('body').toggleClass('has-openSidebar');
    });

    // Close menu
    $('.qmoney-closeMenu').click(function () {
        $('.qmoney-sidebar').removeClass('is-open');
        $('body').removeClass('has-openSidebar');
    });


    $('.search-top__button').click(function () {

        $('.search-top__text-input').toggleClass('search-top__active');
        $('.search-top__text-input').focus();

    });

    $('.region-selector-display').click(function () {

        $('.region-selector-display').toggleClass('open');
        $('.region-selector-content').toggleClass('open');

    });



    $(".primary-navigation__level--level1 > .primary-navigation__level-item").hover(
        function () {
            $(this).addClass('primary-navigation__level-item--active-menu');

        }, function () {
            $(this).removeClass('primary-navigation__level-item--active-menu');
        }
    );

    $('.logo a').click(function () {
        $('.header-headline').html('Qantas Web Component Library');
    });

    $('.sidebar-nav-list a').click(function () {

        var sidebarItem = $(this).html();

        $('.sidebar-nav-list a').removeClass('active');

        $(this).addClass('active');

        //console.log(sidebarItem + "hhh");
        //
        $('.header-headline').html(sidebarItem);

    });




    $('.sidebar-nav-list a').click(function () {
        //alert();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 400);
                return false;
            }
        }
    });
    $('.logo a').click(function () {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, 400
        );
    });

    $('[data-toggle="tooltip"]').tooltip(
        {
            element: 'tooltip-trigger',
            attachment: 'bottom right'
        }
    );

    $('[data-toggle="tooltip"]').click(function () {
        $(this).toggleClass('text-info');
    });

    $('[data-toggle="popover"]').popover();

    $('#AddButton').click(function () {
        var counter = $('#amountPicker').val();
        counter++;
        $('#amountPicker').val(counter);
    });
    $('#MinusButton').click(function () {
        var counter = $('#amountPicker').val();
        counter--;
        $('#amountPicker').val(counter);
    });

    // Open menu
    $('.js-toggleMenu').click(function () {
        $('.sidebar').addClass('is-open');
        $('.cover').addClass('is-open');
    });

    // Close menu - cover click
    $('.cover').click(function () {
        $(this).removeClass('is-open');
        $('.sidebar').removeClass('is-open');
    });

    // Close menu - menu item click
    $('.sidebar-nav-list li a, .logo a').click(function () {
        $('.cover').removeClass('is-open');
        $('.sidebar').removeClass('is-open');
    });

    // Simple accordion
    $('.accordion-simple a[data-toggle="collapse"]').click(function () {
        $(this).children('i').toggleClass('icon-chevron-down icon-chevron-up');
    });

    // Complex accordion
    $('.accordion-complex a[data-toggle="collapse"]').click(function () {
        //$(this).children('i').toggleClass('icon-chevron-down icon-chevron-up');
    });


    // Find all data-toggle="form-tooltips" elements
    // =========================
    var $formToolTips = $('[data-toggle="form-tooltips"] .form-group');
    var mobileWidth = 400; // controls when alignmobile setting should kick in

    $.each($formToolTips, function () {
        var $this = $(this),
            $formToolTipControl = $this.find('.form-control'), // form input
            $formToolTipText = $this.find('.form-text'), // form help text
            $parent = $this.parent('[data-toggle="form-tooltips"]'),
            options = $parent.data('settings') || {};

        if ($formToolTipText.size() > 0) {
            $formToolTipText.hide(); // hide .form-text elements

            // Enforced options
            options.title = $formToolTipText.text();
            options.placement = function (tooltip, trigger) {
                if ($(window).width() < mobileWidth) {
                    return this.config.alignmobile || 'top';
                }
                return this.config.align || 'top';
            };
            $formToolTipControl.tooltip(options);
        }
    });


    $(window).scroll(function () {

        var height = $(window).scrollTop();
        //console.log(height);

        // replace logo header with CTA button

        if (height > 180) {
            $('body').addClass('is-scrolled');
        }
        else {
            $('body').removeClass('is-scrolled');
        }

        if (height == 0) {
            $('.header-headline').html('Qantas Web Component Library');
        }

    });


});