<?php
function back_response($message){
    if($message->status == '0'){
        $message_text = t('User has given you access to personal data:')
            ."\n".t("Mobile phone").": ".$message->m_phone
            ."\n".t("Home phone").": ".$message->h_phone
            ."\n".t("E-mail").": ".$message->email_to;
        privatemsg_reply($message->mid, $message_text, array('author' => user_load(0)));
        update_status($message->id, '1');
    }
    $user = user_load($message->uid);
    $naimenovanie = $user->field_naimenovanie['und']['0']['value'];
    return theme('back_response', array('name' => $naimenovanie));
}

function update_status($id, $status){
    db_update('back_response')
        ->fields(array('status' => $status,))
        ->condition ('id', $id, '=')
        ->execute();
}