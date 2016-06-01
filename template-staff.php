<?php
/**
 * Template Name: Staff Archive
 *
 * @since 0.1.0
 * @package automated-logistics-systems
 *
 * @global WP_Query $wp_query
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

<section id="staff-index" class="page-content">
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">
        
        <div class="small-12 columns"> <?php // This container is closed later in the template ?>
            
            <?php the_content(); ?>

            <?php
            
            $column_counter = 0;
            $columns = 4;
            $column_class = 'medium-' . ( 12 / $columns );

            $base_args = array(
                'post_type' => 'als_staff',
                'post_status' => 'publish',
                'posts_per_page' => -1, // This seems to be an instnace where pagination would be undesirable.
                'orderby' => 'als_last_word', // Custom Ordering function
                'order' => 'ASC',
                'meta_key' => 'staff_department',
            );
            
            $executive_args = $base_args;
            $executive_args['meta_value'] = 'executive';
            
            $lead_args = $base_args;
            $lead_args['meta_value'] = 'operations';
            
            $staff_args = $base_args;
            $staff_args['meta_value'] = 'sales';

            $output_loop = array(
                array(
                    'query' => new WP_Query( $executive_args ),
                    'label' => __( 'Executive Team', THEME_ID ),
                ),
                array(
                    'query' => new WP_Query( $lead_args ),
                    'label' => __( 'Operations', THEME_ID ),
                ),
                array(
                    'query' => new WP_Query( $staff_args ),
                    'label' => __( 'Sales', THEME_ID ),
                ),
            );
            
            foreach ( $output_loop as $section ) { // Foundation wouldn't handle things how I wanted without a horrible loop.
                
                if ( $column_counter != 1 ) : ?>
                    </div>
                <?php 
                    $column_counter = 0; // Reset counter after each section
                endif;
                
                if ( ( $column_counter == 0 ) || $column_counter == 1 ) : 
                    $column_counter = 0; // In a section ends at the maximum, the counter will be 1 with a closed <div>. This ensures things go as expected
                ?>
                    <div class="small-12 columns">
                    <h2><?php echo $section['label']; ?></h2>
                <?php endif;

                if ( $section['query']->have_posts() ) : 

                        while ( $section['query']->have_posts() ) :
                            $section['query']->the_post(); 
                
                            if ( $column_counter == 1 ) : ?>
                                <div class="small-12 columns">
                            <?php 
                            elseif ( $column_counter == 0 ) : // If we're a new section, let's set it back to 1 for the rest of the loop
                                $column_counter = 1;
                            endif; ?>
                            
                            <article <?php post_class( "small-12 $column_class columns" ); ?>>
                                <?php get_template_part( 'partials/als_staff', 'loop-single' ); ?>
                            </article>
                                    
                            <?php
                            
                            if ( $column_counter == $columns ) : ?>
                                </div>
                            <?php 
                                $column_counter = 1;
                            else : 
                                $column_counter++;
                            endif;
                                                      
                        endwhile;

                wp_reset_postdata();

                else: // If no Staff ?>

                <?php endif;
                
            } ?>
        
        </div> <?php // Close Main Content Column ?>
        
    </div>
    
    <div class="row">
        <div id="after-content-text" class="small-12 columns text-center">
            <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
        </div>
    </div>

</section>

<?php
get_footer();