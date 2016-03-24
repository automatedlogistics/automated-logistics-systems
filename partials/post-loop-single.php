<?php
/**
 * Shows a single Post within a loop.
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 *
 * @global WP_Query $wp_query
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {

    die;

}

?>


<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
    
    <h4 class="post-title">
        
        <?php the_title(); ?>
        
    </h4>

    <?php the_time( 'm/d/Y' ); // the_date() only shows the first occurence ?>
        
</a>

<div class="post-copy">
    <?php the_excerpt(); ?>
</div>