<?php
/**
 * Template Name: Connect Page
 *
 * @since 0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

the_post();
?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'connect' ) ); ?>>
    <div class="row">
        
        <div class="small-12 columns">

            <?php if ( has_post_thumbnail() ) : ?>
            <div class="page-image">
                <?php the_post_thumbnail( 'full' ); ?>
            </div>
            <?php endif; ?>
            
            <h1 class="page-title"><?php the_title(); ?></h1>

            <div class="page-copy">
                <?php the_content(); ?>
            </div>
            
        </div>
        
        <div id="after-content-text" class="small-12 columns text-center">
            <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
        </div>

    </div>
</section>

<?php
get_footer();