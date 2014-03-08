<?php
function back_response($message){
    global $user;
    if($user->uid == $message->uid and $user->uid != '0'){
        return theme('back_response', array('name' => false));
    }
    if($message->status == '0'){
        $message_text = t('User has given you access to personal data:')
            ."<div>"."\n".t("Mobile phone").": ".$message->m_phone."</div>";
        $message_text .= $message->h_phone ? "<div>"."\n".t("Home phone").": ".$message->h_phone."</div>" : '';
        $message_text .= "<div>"."\n".t("E-mail").": ".$message->email_to."</div>";
        privatemsg_reply($message->mid, $message_text, array('author' => user_load($message->recipient_id)));
        update_status($message->id, '1');
    }
    $user_data = user_load($message->uid);
    $naimenovanie = $user_data->field_naimenovanie['und']['0']['value'];
    return theme('back_response', array('name' => $naimenovanie));
}

function update_status($id, $status){
    db_update('back_response')
        ->fields(array('status' => $status,))
        ->condition ('id', $id, '=')
        ->execute();
}