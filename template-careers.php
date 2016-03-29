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

    <section id="home-hero" class="hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
    </section>

<?php endif; ?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'careers' ) ); ?>>
    
    <div class="row">
        
        <div class="small-12 medium-9 columns">
            <div class="page-copy">
                <?php the_content(); ?>
            </div>
        </div>
        
        <div class="small-12 medium-3 columns">
            employee testimonials
        </div>

    </div>
            
    <?php

    $args = array(
        'post_type' => 'als_job_opening',
        'posts_per_page' => -1, // Shouldn't be so many openings to neccessitate pagination
    );

    global $post;
    $job_openings = new WP_Query( $args );

    if ( $job_openings->have_posts() ) : ?>
    
    <hr />
    
    <div class="row">
    
        <div class="small-12 columns">
            
            <h3><?php _e( 'Job Openings at ALS', THEME_ID ); ?></h3>
            
            <ul id="employment-accordion" class="vertical menu" data-accordion-menu data-multi-open="false">
                
                <?php while ( $job_openings->have_posts() ) : $job_openings->the_post(); ?>
                
                <li>
                    <a href="#"><?php the_title(); ?></a>
                    <ul class="menu vertical nested">
                        <li><?php the_content(); ?></li>
                    </ul>
                </li>
                
                <?php endwhile; ?>
                
            </ul>
            
        </div>
    
    </div>
    
    <?php 
    
    wp_reset_postdata();
    
    endif; ?>
    
</section>

<?php
get_footer();