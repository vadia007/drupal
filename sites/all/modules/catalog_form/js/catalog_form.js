(function($){
    $(document).ready(function(){
        var default_value =  $("#phone").val();
        $("#phone").mask("+7 (999) 999-9999");
        $("#phone").val(default_value);
        var tid = $("#hidden").val();
        if(tid != ''){
            var cat = $('[tid ='+tid+']').text();
            $("#cat").val(cat);
        }
        $("a#child").click(function(event){
            tid = $(event.currentTarget).attr('tid')
            cat = $(event.currentTarget).text();
            $("#hidden").val(tid);
            $("#cat").val(cat);

        });

        clearDefaultField($("#catalog-form-form input[type='text'], #catalog-form-form textarea, #guest-reply-form textarea"));

        if(window.location.pathname.split("/")[3]=='view'){

            $(".privatemsg-message").wrapAll("<div id='message-list'></div>");
            $("#privatemsg-new").before("<a href='#' id='reply_msg'>Ответить</a>");
            $("#privatemsg-new").before("<a href='/messages' id='messages_l'>Сообщения</a>");
            $("#privatemsg-new").wrap("<div class='boxes'></div>");
            $("#privatemsg-new").after("<div class='mask'></div>");
            $("#privatemsg-new").addClass("window");
            modale("#privatemsg-new");
            modale("#block-catalog-form-guest-reply");
            if ($("form").is("#guest-reply-form")){
                $(".boxes").css({"display":"none"});
                $("#block-catalog-form-guest-reply").wrap("<div class='boxes'></div>");
                $("#block-catalog-form-guest-reply").after("<div class='mask'></div>");
                $("#block-catalog-form-guest-reply").addClass("window");
            }
        }

        $("a#child").click(function(event) {
            event.preventDefault();
        })

        function modale(element){
            $('#reply_msg').click(function(e) {
                //Cancel the link behavior
                e.preventDefault();
                //Get the A tag
                var id = $(this).attr('href');

                //Get the screen height and width
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();

                //Set heigth and width to mask to fill up the whole screen
                $('.mask').css({'width':maskWidth,'height':maskHeight});

                //transition effect
                $('.mask').fadeIn(1000);
                $('.mask').fadeTo("slow",0.8);

                //Get the window height and width
                var winH = $(window).height();
                var winW = $(window).width();

                //Set the popup window to center
                $(element).css('top',  winH/2-$(element).height()/2);
                $(element).css('left', winW/2-$(element).width()/2);

                //transition effect
                $(element).fadeIn(2000);

            });
        }

        $('.mask').click(function () {
            $(this).hide();
            $('.window').hide();
        });

        function clearDefaultField(element){

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
})(jQuery);