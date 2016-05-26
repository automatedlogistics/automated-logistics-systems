<?php
/**
 * Shows a single Staff Member within a loop.
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

global $post;

?>


<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
    
    <?php if ( has_post_thumbnail() ) : ?>
        <div class="thumbnail post-thumbnail-container">
            <?php the_post_thumbnail( 'thumbnail' ); ?>
        </div>
    <?php else : ?>
        <div class="thumbnail post-thumbnail-container">
            <span class="fa fa-user"></span>
        </div>
    <?php endif; ?>
    
    <h4 class="post-title">
        <?php the_title(); ?>
    </h4>
    
    <?php if ( get_field( 'staff_position_title' ) ) : ?>
        <h6>
            <?php the_field( 'staff_position_title' ); ?>
        </h6>
    <?php endif; ?>
        
</a>

<div class="post-copy">
    <?php acf_the_excerpt( 'staff_professional_bio' ); ?>
</div>