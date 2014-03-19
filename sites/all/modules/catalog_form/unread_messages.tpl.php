<a id="unread-messages-count" href="/messages" class="<?php print $class;?>" >
    <?php print t('Unread messages') . "(<span>$count</span>)"?>
</a>
<audio id="unread-messages-audio">
    <source src="<?php print $path . '/sounds/message.ogg'?>" type="audio/ogg; codecs=vorbis">
    <source src="<?php print $path . '/sounds/message.mp3'?>" type="audio/mpeg" >
    Тег audio не поддерживается вашим браузером.
</audio>