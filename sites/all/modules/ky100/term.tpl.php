<div id="parent">
    <?php if (isset($image)):?>
    <a href="<?php echo base_path();?>catalog">
        <img src="<?php echo file_create_url($image['und'][0]['uri']);?>" alt="<?php print $name;?>">
    </a>
    <?php endif;?>
    <span>
        <a href="<?php echo base_path();?>catalog"><?php print $name;?></a>
    </span>
</div>