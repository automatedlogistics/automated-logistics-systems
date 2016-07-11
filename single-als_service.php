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

            
            
        </div>
        
        <div class="small-12 medium-8 columns product-content">
            
            <?php if ( have_rows( 'product_content_blocks' ) ) : ?>
            
                <div class="container">
            
                    <?php while ( have_rows( 'product_content_blocks' ) ) : the_row(); ?>
                    
                        <div class="row">
                            
                            <div class="small-12 columns">
                            
                                <div class="timeline-dot"></div>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'block' ) ); ?>
                            
                            </div>
                    
                        </div>

                    <?php endwhile; ?>
                    
                </div>
            
            <?php endif; ?>
            
        </div>
        
    </div>
</section>

<?php
get_footer();