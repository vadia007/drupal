(function($){
    $(document).ready(function(){
        $("div#search input").focus(function(){
            setTimeout(function(){
                window.location.href = "catalog";
            }, 500)
        })
    });
})(jQuery);