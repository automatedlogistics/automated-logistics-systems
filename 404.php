<?php
/**
 * The theme's 404 page for showing not found pages.
 *
 * @since 0.3.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

the_post();
?>

<?php // Ensure that it is set and not the default
if ( ( get_theme_mod( '404_image' ) ) && ( get_theme_mod( '404_image' ) !== 1 ) ) :
    $hero_image = wp_get_attachment_image_src( get_theme_mod( '404_image', 1 ), 'hero-image' );
?>

    <section class="hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
    </section>

<?php endif; ?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content' ) ); ?>>
    
    <div class="row">
        
        <div class="small-12 medium-9 columns">
    
            <div class="row">
                <div class="small-12 columns">
                    <?php als_custom_breadcrumbs(); ?>
                </div>
            </div>
            
            <h1 class="page-title"><?php echo __( '404 - Page Not Found', THEME_ID ); ?></h1>

            <div class="page-copy">
                <?php echo apply_filters( 'the_content', get_theme_mod( '404_text', __( "Sorry, but this page doesn't seem to be here!", THEME_ID ) ) ); ?>
            </div>
            
        </div>
        
        <div class="small-12 medium-3 columns sidebar">

            <?php dynamic_sidebar( '404-sidebar' ); ?>

        </div>

    </div>
</section>

<?php
get_footer();