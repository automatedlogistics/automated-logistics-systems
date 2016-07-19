<?php
/**
 * Single Product/Service template
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

<section id="post-<?php the_ID(); ?>" <?php post_class( array( 'page-content' ) ); ?>>
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">
            
        <div class="small-12 medium-4 columns product-expert">
            
            <h2><?php _e( 'MEET THE EXPERT', THEME_ID ); ?></h2>
            
            <?php $expert = get_field( 'product_expert' ); ?>
            
            <a href="<?php echo get_permalink( $expert->ID ); ?>" title="<?php echo get_the_title( $expert->ID ); ?>">
                <?php echo wp_get_attachment_image( get_post_thumbnail_id( $expert->ID ), 'medium', false, array( 'class' => 'thumbnail product-expert-image' ) ); ?>
                <h2><?php echo get_the_title( $expert->ID ); ?></h2>
            </a>
            <?php echo get_field( 'staff_position_title', $expert->ID ); ?><br />
            <a href="mailto:<?php echo get_field( 'staff_email', $expert->ID ); ?>" title="<?php echo sprintf( __( 'Connect with %s via Email', THEME_ID ), get_the_title( $expert->ID ) ); ?>"><?php echo get_field( 'staff_email', $expert->ID ); ?></a><br />
            <?php the_field( 'product_expert_qualifications' ); ?><br />
            
            <?php if ( $url = get_field( 'product_video_url' ) ) : ?>

            <p>
                
                <div class="video-popover-container">
                
                <?php 
                    
                    echo wp_oembed_get( $url );
                
                ?>
                
                </div>
                
            </p>
        
            <?php endif; ?>
            
        </div>
        
        <div class="small-12 medium-8 columns product-content">
            
            <?php if ( have_rows( 'product_content_blocks' ) || get_field( 'product_testimonail' ) ) : ?>
            
                <div class="container">
                    
            <?php endif; ?>
            
            <?php if ( have_rows( 'product_content_blocks' ) ) : ?>
            
                    <?php while ( have_rows( 'product_content_blocks' ) ) : the_row(); ?>
                    
                        <div class="row">
                            
                            <div class="small-12 columns">
                            
                                <div class="timeline-dot"></div>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'block' ) ); ?>
                            
                            </div>
                    
                        </div>

                    <?php endwhile; ?>
            
            <?php endif; ?>
            
            <?php if ( $testimonial = get_field( 'product_testimonial' ) ): ?>
            
                <div class="row">
                    
                    <div class="small-12 columns">
                        
                        <div class="timeline-dot"></div>
                        
                        <div class="media-object stack-for-small">
                            
                            <div class="media-object-section">
                                <?php echo wp_get_attachment_image( get_post_thumbnail_id( $testimonial->ID ), 'medium' ); ?>
                            </div>
                            
                            <div class="media-object-section">
                                
                                <?php 
                                    $quote = $testimonial->post_content;
                                    $quote = '"' . $quote . '"';
                                    $quote = apply_filters( 'the_content', $quote );
                                ?>
                                
                                <blockquote class="testimonial-quote"><?php echo $quote; ?></blockquote>
                                <strong class="testimonial-name"><?php echo get_the_title( $testimonial->ID );?></strong><br />
                                
                                <?php if ( get_field( 'employee_testimonial', $testimonial->ID ) !== '' ) : 
                                    $hired_date = new DateTime( get_field( 'employee_hired_date', $testimonial->ID ) );
                                    $hired_date = $hired_date->format( 'F, Y' );
                                ?>
                                    <span class="testimonial-title"><?php the_field( 'employee_title', $testimonial->ID ); ?></span><br />
                                    <span class="testimonial-hired-date"><?php echo sprintf( __( 'Hired: %s', THEME_ID ), $hired_date ); ?></span>
                                <?php else : ?>
                                    <span class="testimonial-company"><?php the_field( 'company_and_title', $testimonial->ID ); ?></span><br />
                                    <span class="testimonial-location"><?php the_field( 'company_location', $testimonial->ID ); ?></span>
                                <?php endif; ?>
                                
                            </div>
                            
                        </div>
                    
                    </div>
                    
                </div>
            
            <?php endif; ?>
                    
            <?php if ( have_rows( 'product_content_blocks' ) || get_field( 'product_testimonail' ) ) : ?>

                </div>

            <?php endif; ?>
            
        </div>
        
    </div>
</section>

<?php if ( $url = get_field( 'product_video_url' ) ) : ?>

<div class="reveal large video-popover" data-reveal data-reset-on-close="true">
    
    <div class="row">
        <div class="small-12 columns video-container">
            <?php echo wp_oembed_get( $url ); ?>
        </div>
    </div>
    
    <button class="close-button" data-close aria-label="<?php _e( 'Close modal', THEME_ID ); ?>" type="button">
        <span aria-hidden="true">&times;</span>
    </button>

</div>
            
<?php endif; ?>

<?php
get_footer();