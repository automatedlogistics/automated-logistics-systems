<?php
/**
 * Template Name: Carriers Page
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
    <div class="row">
        <div class="small-12 columns">

            <div class="page-copy">
                <?php the_content(); ?>
            </div>
            
        </div>

    </div>
    
    <?php 
    
    $args = array(
        'post_type' => 'als_service',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'tax_query' => array(
            array(
                'taxonomy' => 'als_service_type',
                'field' => 'slug',
                'terms' => 'carrier',
            ),
        ),
    );
    
    global $post;
    $services = new WP_Query( $args );
    
    if ( $services->have_posts() ) : ?>
    
        <div class="row">
            
            <div class="services-list small-12 medium-9 medium-centered">
                
                <?php while ( $services->have_posts() ) : $services->the_post(); ?>

                    <?php get_template_part( 'partials/als_service', 'loop-single' ); ?>

                <?php endwhile; ?>
                
            </div>
    
        </div>
    
    <?php 
    wp_reset_postdata();
    
    else :  ?>
    
    <div class="row">
        <div class="small-12 columns">
            <?php _e( 'No Carrier Services Found', THEME_ID ); ?>
        </div>
    </div>
    
    <?php endif; ?>
    
    <div class="row">
        <div id="after-content-text" class="small-12 columns text-center">
            <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
        </div>
    </div>
    
</section>

<?php
get_footer();