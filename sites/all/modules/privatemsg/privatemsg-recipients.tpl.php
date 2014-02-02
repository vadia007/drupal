<?php 
  //each file loads it's own styles because we cant predict which file will be loaded 
  drupal_add_css(drupal_get_path('module', 'privatemsg').'/styles/privatemsg-recipients.css');
?>
<span id="received_msg"><?php print t('Received messages');?></span>
<div class="privatemsg-message-participants privatemsg-message">
  <?php print $participants; ?>
</div>
