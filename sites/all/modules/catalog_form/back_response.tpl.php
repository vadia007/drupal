<?php
if(!$name){
    $link = base_path().'messages';
    header("location: {$link}");
}
?>
<div id='back_response'>
    <?php
    print "<div>".t('You have granted access to your personal data company ')."\"".$name."\""."</div>"
        ."<div>".l(t('To main page'), '')."</div>";
    ?>
</div>