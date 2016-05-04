<?php
/**
 * Template Name: Shippers Page
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

global $wp_query;

?>

<?php if ( has_post_thumbnail() ) :
    $hero_image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'hero-image' );
?>

    <section class="hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
    </section>

<?php endif; ?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'services' ) ); ?>>
    
    <?php $content_class = ( is_active_sidebar( 'shipper-carrier-sidebar' ) ) ? ' medium-9 ' : ' '; ?>
    
    <div class="row">
        
        <div class="small-12<?php echo $content_class; ?>columns">
            
            <?php als_custom_breadcrumbs(); ?>

            <div class="page-copy">
                <?php the_content(); ?>
            </div>
    
            <div class="row">
                <div id="after-content-text" class="small-12 columns text-center">
                    <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
                </div>
            </div>   

        </div>
        
        <?php if ( is_active_sidebar( 'shipper-carrier-sidebar' ) ) : ?>
        
        <div class="small-12 medium-3 columns">
            <?php dynamic_sidebar( 'shipper-carrier-sidebar' ); ?>
        </div>
        
        <?php endif; ?>

    </div>
    
</section>

<?php
get_footer();