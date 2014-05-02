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
        $("#cat").addClass('chosen');
    });
    // Wrap user profile fields.
    if(!($('body').is('.toolbar')) && $('form').is('#user-profile-form')){
        $('#edit-field-naimenovanie, #edit-field-category, #edit-field-name, #edit-field-uridicheskiy,' +
            ' #edit-field-fakticheskiy, #user-profile-form .form-item-mail, #edit-privatemsg,' +
            ' #edit-field-remove-from-search, #edit-field-delete-user').wrapAll('<div id="left-col"></div>');
        $('#edit-field-user-picture, #edit-field-dolgnost, #edit-field-inn, #edit-field-ogrn, #edit-field-okpo, #edit-field-okpd, #edit-field-adress,' +
            '#edit-field-phone, #user-profile-form .form-item-current-pass, #user-profile-form .form-item-pass,' +
            '#user-profile-form #edit-actions').wrapAll('<div id="right-col"></div>');
    }
    if ($("div").is(".captcha")) {
        $("#reload-captcha").appendTo(".form-item-captcha-response .field-prefix");
    } else {
        $("#reload-captcha").css("display", "none");
    }
    if ($("div").is("#modal_reg")){
        setTimeout(function () {

            regmodale('#modal_reg');
        }, 5000);
    }

    clearDefaultField($("#catalog-form-form input[type='text'], #catalog-form-form textarea, #guest-reply-form textarea"));

    $("#privatemsg-list").after("<div id='buttons'>" +
        "<a id='reply' class='dis'>" + Drupal.t('Reply') + "</a>" +
        "<a id='marked' class='dis'>" + Drupal.t('Back') + "</a>" +
        "<a id='delete'>" + Drupal.t('Delete') + "</a></div>");
    $("<span class='marked'></span>").appendTo($(".privatemsg-list-user"));
    if (window.location.pathname.split("/")[2] == 'view') {
        $(".privatemsg-message").wrapAll("<div id='message-list'></div>");
        //message waiting time
//        var current_time = $.now() / 1000;
//        var waiting_time = Drupal.settings.waiting_time;
//        if (waiting_time == '' || waiting_time > current_time) {
//            $("#privatemsg-new").before("<a href='#' id='reply_msg'>Ответить</a>");
//        } else {
//            $("#privatemsg-new").before("<span id='time_left'>Время ожидания истекло</span>");
//        }
//        $("#privatemsg-new").before("<a href='/messages' id='messages_l'>Входящие</a>");
//        $("#privatemsg-new").wrap("<div class='boxes'></div>");
//        $("#privatemsg-new").after("<div class='mask'></div>");
//        $("#privatemsg-new").addClass("window");
        modale("#privatemsg-new");
        modale("#block-catalog-form-guest-reply");

        $("#message-list").after("<div id='buttons'>" +
            "<a id='marked' href='/messages'>" + Drupal.t('Back') + "</a>" +
            "<a id='delete' class='dis'>" + Drupal.t('Delete') + "</a></div>");
        var text = $(".privatemsg-message-1 .privatemsg-message-date").text();
        $(".privatemsg-message-participants").after("<div class='date-time'>" + text + "</div>");
        $("#edit-body-value").appendTo("#message-list");
        $("#edit-submit").prependTo("#buttons");
        $("#edit-message").appendTo("#message-list");
        $("#edit-submit--2").prependTo("#buttons");
    }
    //add buttons before message list
    $("#privatemsg-list").before("<div id='head-buttons'><span id='input-msg'>" + Drupal.t('Input messages') +
        "</span><span id='output-msg' class='dis'>" + Drupal.t('Output messages') + "</span><span id='basket'>" +
        Drupal.t('Basket') + "</span><span id='marked-messages'>" + Drupal.t('Marked') + "</span></div>");
    //wrap for scrollbar

    $('table.privatemsg-list, #message-list').addClass('overview');
    $("table.privatemsg-list").wrap("<div class='viewport'></div>");
    $("#message-list").wrap("<div class='scrollbar-y'></div>").wrap("<div class='viewport'></div>");

    $(".viewport").before("<div class='scrollbar'>" +
        "<div class='track'>" +
        "<div class='thumb'>" +
        "<div class='end'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>");

    jQuery(document).ready(function(){
        jQuery('#privatemsg-list-form, .scrollbar-y').tinyscrollbar({ sizethumb: 65 });
    });


    $("a#child").click(function (event) {
        event.preventDefault();
    })
    //add class to tread
    $(".thread .form-type-checkbox").click(function() {
        var row = $(this).parent().parent();
        if(row.hasClass('selected')) {
            row.removeClass('selected');
        } else {
            row.addClass('selected');
        }
    })

    //add span after delete thread
//    $('#edit-delete').click(function() {
//    $('.thread .form-type-checkbox').each(function() {
//        if(($(this).is('.checkbox'))) {
//            $(this).children().before("<span class='checkbox'></span>");
//        }
//    })
//    })
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