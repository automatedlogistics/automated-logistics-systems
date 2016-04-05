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

<div class="post-loop media-object stack-for-small">
    
    <?php if ( has_post_thumbnail() ) : ?>
    
        <div class="media-object-section image-wrapper">

            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                <div class="thumbnail">
                    <?php the_post_thumbnail( 'medium' ); ?>
                </div>
            </a>

        </div>
    
    <?php endif; ?>
    
    <div class="media-object-section text-wrapper">
        
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">

            <h4 class="post-title">

                <?php the_title(); ?>

            </h4>

            <?php if ( get_post_type() == 'post' ) :
                the_time( 'm/d/Y' ); // the_date() only shows the first occurence
            endif; ?>

        </a>

        <div class="post-copy">
            <?php if ( get_post_type() == 'als_staff' ) : 
                acf_the_excerpt( 'staff_professional_bio' );
            else :
                the_excerpt();
            endif; ?>
        </div>
        
    </div>
    
</div>