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

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'carriers' ) ); ?>>
    
    <?php $content_class = ( have_rows( 'customers_carriers_ctas' ) || get_field( 'customers_carriers_phone_number' ) ) ? ' medium-9 ' : ' '; ?>
    
    <div class="row">
        
        <div class="small-12<?php echo $content_class; ?>columns">
            
            <?php als_custom_breadcrumbs(); ?>

            <div class="page-copy">
                <?php the_content(); ?>
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

        </div>
        
        <?php if ( have_rows( 'customers_carriers_ctas' ) || get_field( 'customers_carriers_phone_number' ) ) : ?>
        
        <div class="small-12 medium-3 columns sidebar-cta">
            
            <?php if ( have_rows( 'customers_carriers_ctas' ) ) : 
            
                while ( have_rows( 'customers_carriers_ctas' ) ) : the_row(); ?>
            
                    <div class="cta-block">
            
                        <?php echo apply_filters( 'the_content', get_sub_field( 'call_to_action' ) ); ?>
                        
                    </div>
            
                <?php endwhile;
            
            endif;
            
            if ( get_field( 'customers_carriers_phone_number' ) ) : ?>
            
                <div class="cta-block">
            
                    <?php echo sprintf( __( 'Call us today %s', THEME_ID ), get_phone_number_link( get_field( 'customers_carriers_phone_number' ) ) ); ?>
                    
                </div>
                    
            <?php endif; ?>
            
        </div>
        
        <?php endif; ?>

    </div>
    
</section>

<?php
get_footer();