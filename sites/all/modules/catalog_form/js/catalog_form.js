jQuery(function ($) {
    var default_value = $("#phone").val();
    var default_value_h = $("#h_phone").val();
    $("#phone").mask("+7 (999) 999-9999");
    $("#phone").val(default_value);
    $("#h_phone").mask("999-999");
    $("#h_phone").val(default_value_h);

    var tid = $("#hidden").val();
    if (tid != '') {
        var cat = $('[tid =' + tid + ']').text();
        $("#cat").val(cat);
    }
    $('a#child').click(function(){
        tid = $(this).data('tid');
        cat = $(this).text();
        $("#hidden").val(tid);
        $("#cat").val(cat);
    });
    // Wrap user profile fields.
    $('#edit-field-naimenovanie, #edit-field-category, #edit-field-name, #edit-field-uridicheskiy,' +
        ' #edit-field-fakticheskiy, #user-profile-form .form-item-mail, #edit-privatemsg').wrapAll('<div id="left-col"></div>');
    $('#edit-field-inn, #edit-field-ogrn, #edit-field-okpo, #edit-field-okpd, #edit-field-adress,' +
        '#edit-field-phone, #user-profile-form .form-item-current-pass, #user-profile-form .form-item-pass,' +
        '#user-profile-form #edit-actions').wrapAll('<div id="right-col"></div>');

    if ($("div").is(".captcha")) {
        $("#reload-captcha").appendTo(".form-item-captcha-response .field-prefix");
    } else {
        $("#reload-captcha").css("display", "none");
    }
    if ($("div").is("#modal_reg"))
        regmodale('#modal_reg');
    clearDefaultField($("#catalog-form-form input[type='text'], #catalog-form-form textarea, #guest-reply-form textarea"));

    $("#block-catalog-form-guest-reply h2").before("<a href='#' class='close'>Закрыть</a>");
    if (window.location.pathname.split("/")[2] == 'view') {

        $(".privatemsg-message").wrapAll("<div id='message-list'></div>");
        var current_time = $.now() / 1000;
        var waiting_time = Drupal.settings.waiting_time;
        if (waiting_time == '' || waiting_time > current_time) {
            $("#privatemsg-new").before("<a href='#' id='reply_msg'>Ответить</a>");
        } else {
            $("#privatemsg-new").before("<span id='time_left'>Время ожидания истекло</span>");
        }
        $("#privatemsg-new").before("<a href='/messages' id='messages_l'>Входящие</a>");
        $("#privatemsg-new").wrap("<div class='boxes'></div>");
        $("#privatemsg-new").after("<div class='mask'></div>");
        $("#privatemsg-new").addClass("window");
        modale("#privatemsg-new");
        modale("#block-catalog-form-guest-reply");
        if ($("form").is("#guest-reply-form")) {
            $(".boxes").css({"display":"none"});
            $("#block-catalog-form-guest-reply").wrap("<div class='boxes'></div>");
            $("#block-catalog-form-guest-reply").after("<div class='mask'></div>");
            $("#block-catalog-form-guest-reply").addClass("window");
        }
    }

    $("a#child").click(function (event) {
        event.preventDefault();
    })

    function modale(element) {
        $('#reply_msg').click(function (e) {
            //Cancel the link behavior
            e.preventDefault();
            //Get the A tag
            var id = $(this).attr('href');

            //Get the screen height and width
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            //Set heigth and width to mask to fill up the whole screen
            $('.mask').css({'width':maskWidth, 'height':maskHeight});

            //transition effect
            $('.mask').fadeIn(1000);
            $('.mask').fadeTo("slow", 0.8);

            //Get the window height and width
            var winH = $(window).height();
            var winW = $(window).width();

            //Set the popup window to center
            $(element).css('top', winH / 2 - $(element).height() / 2);
            $(element).css('left', winW / 2 - $(element).width() / 2);

            //transition effect
            $(element).fadeIn(2000);

        });
    }

    function regmodale(element) {
        var id = '#modal_reg';

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set heigth and width to mask to fill up the whole screen
        $('.mask').css({'width':maskWidth, 'height':maskHeight});

        //transition effect
        $('.mask').fadeIn(1000);
        $('.mask').fadeTo("slow", 0.8);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(element).css('top', winH / 2 - $(element).height() / 2);
        $(element).css('left', winW / 2 - $(element).width() / 2);

        //transition effect
        $(element).fadeIn(2000);

    }

    $('.mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('.mask, .window').hide();
    });
    function clearDefaultField(element) {

        element.focus(function () {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
        });
        element.blur(function () {
            if (this.value == '') {
                this.value = this.defaultValue;
            }
        });

    }

});