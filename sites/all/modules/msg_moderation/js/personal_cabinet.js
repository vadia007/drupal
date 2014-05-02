jQuery(function($) {
    $('#input-msg').click(function(){
        $('.privatemsg-input').css({"display":"block"});
        $('.privatemsg-output').css({"display":"none"});
        $('.thread').removeClass("hide");
        $('#delete').removeClass('hide');
        $('#edit-delete').addClass('hide');

    })
    $('#output-msg').click(function(){
        $('.privatemsg-input').css({"display":"none"});
        $('.privatemsg-output').css({"display":"block"});
    })
    $(".marked").click(function(){
        var checked,
            id;
        id = $(this).parent().prev().children().children(".form-checkbox").val();
        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
            $(this).parent().parent().removeClass("marked");
            checked = 0;
        }else{
            $(this).addClass("checked");
            $(this).parent().parent().addClass("marked");
            checked = 1;
        }
        $.ajax({
            type: "POST",
            url: 'ajax/set_marked_messages',
            dataType: 'json',
            data: {checked: checked,
                id: id}
        });
    })
    $( document ).ready(function() {
        $.ajax({
            type: "GET",
            url: "ajax/get_marked_messages/" + Drupal.settings.uid,
            success: function(array_id) {
                if(array_id){
                    for(i = 0; i < array_id[0].length; i++){
                        var element = $("input.privatemsg-list[type='checkbox'][value="+ array_id[0][i] + "]");
                        element.parent().parent().siblings(".privatemsg-list-user").children(".marked").addClass("checked");
                        element.parent().parent().parent().addClass("marked");
                    }
                }
            }
        });
    })
    $('#delete').click(function(){
        var deleteId = new Array();
        $("input.privatemsg-list[type='checkbox']:checked").each(function() {
            deleteId.push($(this).val());
            $(this).parent().parent().parent().addClass("in-basket");
        });

        $.ajax({
            type: "POST",
            url: 'ajax/put_in_basket',
            dataType: 'json',
            data: {delete_id: deleteId}
        });
    })
    if($('input').is('#edit-delete')) {
        $('#marked-messages').click(function(){
            $('.thread').each(function(){
                $(this).removeClass("hide");
                $(this).not(".marked").addClass("hide");
            })
            $('#edit-delete').addClass('hide');
            $('#delete').removeClass('hide');
        })
        $('#basket').click(function() {
            $.ajax({
                type: "GET",
                url: "ajax/get_basket/" + Drupal.settings.uid,
                success: function(array_id) {
                    if(array_id){
                        for(i = 0; i < array_id[0].length; i++) {
                            var element = $("input.privatemsg-list[type='checkbox'][value="+ array_id[0][i] + "]");
                            element.parent().parent().parent().addClass("in-basket");
                        }
                    }
                    $('.thread').each(function() {
                        $(this).removeClass("hide");
                        $(this).not(".in-basket").addClass("hide");
                    })


                    $('#edit-delete').appendTo($("#buttons"));
                    $('#edit-delete').removeClass('hide');
                    $('#delete').addClass('hide');
                }
            });
        })
    } else {
        $('#delete').addClass('dis');
    }
});