<div id="parent">
    <?php if (isset($image)):?>
    <img src="<?php echo file_create_url($image['und'][0]['uri']);?>" alt="<?php print $name;?>">
    <?php endif;?>
    <span>
        <?php print $name;?>
    </span>
</div>