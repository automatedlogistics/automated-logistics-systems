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
        
        <div class="small-12 columns"> <?php // This container is closed later in the template ?>
            
            <div class="row">
                <?php the_content(); ?>
            </div>

            <?php

            $args = array(
                'post_type' => 'als_staff',
                'posts_per_page' => -1, // This seems to be an instnace where pagination would be undesirable.
            );

            $staff = new WP_Query( $args );

            if ( $staff->have_posts() ) : ?>

                <?php
                    $executive = '';
                    $lead = '';
                    $other = '';

                    while ( $staff->have_posts() ) :
                        $staff->the_post();
                        ?>
                            <?php
                                if ( get_field( 'staff_executive_lead' ) == 'executive' ) {
                                    $executive .= '<article class="' . implode( ' ', get_post_class( 'small-12 medium-3 columns' ) ) . '">';
                                        $executive .= als_load_template_part( 'partials/als_staff', 'loop-single' );
                                    $executive .= '</article>';
                                }
                                else if ( get_field( 'staff_executive_lead' ) == 'lead' ) {
                                    $lead .= '<article class="' . implode( ' ', get_post_class( 'small-12 medium-3 columns' ) ) . '">';
                                        $lead .= als_load_template_part( 'partials/als_staff', 'loop-single' );
                                    $lead .= '</article>';
                                }
                                else {
                                    $other .= '<article class="' . implode( ' ', get_post_class( 'small-12 medium-3 columns' ) ) . '">';
                                        $other .= als_load_template_part( 'partials/als_staff', 'loop-single' );
                                    $other .= '</article>';
                                }
                            ?>

                        </article>
                        <?php
                    endwhile;

                    if ( $executive !== '' ) : ?>
                        <div class="row">
                            <h2><?php _e( 'Executive Team', THEME_ID ); ?></h2>
                            <?php echo $executive; ?>
                        </div>
                    <?php endif;

                    if ( $lead !== '' ) : ?>
                        <div class="row">
                            <h2><?php _e( 'Lead Representatives', THEME_ID ); ?></h2>
                            <?php echo $lead; ?>
                        </div>

                    <?php endif;

                    if ( $other !== '' ): ?>
                        <div class="row">
                            <h2><?php _e( 'Staff', THEME_ID ); ?></h2>
                            <?php echo $other; ?>
                        </div>
                    <?php endif; ?>

            <?php 
        
            wp_reset_postdata();

            else: // If no Staff ?>

                <?php _e( 'No Staff Found', THEME_ID ); ?>

            <?php endif; ?>
        
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