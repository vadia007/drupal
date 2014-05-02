<?php
//each file loads it's own styles because we cant predict which file will be loaded
drupal_add_css(drupal_get_path('module', 'privatemsg').'/styles/privatemsg-recipients.css');
?>
<div id="head-buttons">
    <span id="input-msg"><?php print t('Input messages');?></span>
    <span id="output-msg"><?php print t('Output messages');?></span>
    <span id="basket" class="dis"><?php print t('Basket');?></span>
    <span id="marked-messages" class="dis"><?php print t('Marked');?></span>
</div>
<div class="privatemsg-message-participants privatemsg-message">
    <?php print $participants; ?>
</div>
