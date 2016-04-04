<?php
/**
 * Shows a single Staff Service within a loop.
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

<div class="media-object stack-for-small">

    <div class="media-object-section image-wrapper">
        <?php the_post_thumbnail( 'medium' ); ?>
    </div>

    <div class="media-object-section">
        <h4><?php the_title(); ?></h4>
        <?php the_excerpt(); ?>
        <a class="secondary tiny button with-arc" href="<?php the_permalink(); ?>"><?php _e( 'Find Out More', THEME_ID ); ?></a>
    </div>

</div>