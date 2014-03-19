jQuery(function($) {
    setInterval(function() {
        $.ajax({
            type: "GET",
            url: Drupal.settings.basePath + "ajax/unread_messages/" + Drupal.settings.uid,
            success: function(count) {
                var countElement = $('#unread-messages-count span'),
                    defaultCount = countElement.text();
                if (defaultCount != count) {
                    countElement.text(count);
                    if (count > defaultCount){
                        $("#unread-messages-audio").get(0).play();
                    }
                }
                if (count == 0) {
                    if (!($("#unread-messages-count").hasClass("hidden"))) {
                        $('#unread-messages-count').addClass('hidden');
                    }
                } else{
                    if ($("#unread-messages-count").hasClass("hidden")) {
                        $("#unread-messages-count").removeClass('hidden');
                    }
                }
            },
            error: function() {
                console.error('unread_messages error');
            }
        });
    }, 60 * 1000);
});