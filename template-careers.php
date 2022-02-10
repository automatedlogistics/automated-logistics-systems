<?php
/**
 * Template Name: Careers Page
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

<?php if ( has_post_thumbnail() ) :
    $hero_image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'hero-image' );
?>

    <section class="hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
    </section>

<?php endif; ?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'careers' ) ); ?>>
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">
        
        <div class="small-12 medium-9 columns">
            <div class="page-copy">
                <?php the_content(); ?>
            </div>
        </div>
        
        <div class="small-12 medium-3 columns">
            
            <?php 
            
            $args = array(
                'post_type' => 'als_testimonial',
                'posts_per_page' => 1,
                'meta_query' => array(
                    array(
                        'key' => 'employee_testimonial',
                        'value' => '"true"',
                        'compare' => 'LIKE',
                    ),
                ),
            );
            
            global $post;
            $testimonials = new WP_Query( $args );
            
            if ( $testimonials->have_posts() ) : 
            
                while ( $testimonials->have_posts() ) : $testimonials->the_post();
            
                    get_template_part( 'partials/als_testimonial', 'sidebar-single' );
            
                endwhile;
            
            endif; 
            
            wp_reset_postdata(); ?>
            
        </div>

    </div>
    
    <div class="row">
        
        <div id="after-content-text" class="small-12 columns text-center">
            <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
        </div>
    
    </div>
    
</section>

<?php
get_footer();