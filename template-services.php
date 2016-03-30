<?php
/**
 * Template Name: Services Page
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

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'services' ) ); ?>>
    <div class="row">
        <div class="small-12 columns">

            <div class="page-copy">
                <?php the_content(); ?>
            </div>
            
        </div>

    </div>
    
    <?php if ( have_rows( 'services_fields' ) ) : ?>
    
        <div class="row">
            
            <div class="services-list small-12 medium-9 medium-centered">
                
                <?php while ( have_rows( 'services_fields' ) ) : the_row(); ?>

                <div class="media-object stack-for-small">

                    <div class="media-object-section image-wrapper">
                        <?php echo wp_get_attachment_image( get_sub_field( 'image' ), 'medium' ); ?>
                    </div>

                    <div class="media-object-section">
                        <h4><?php echo get_sub_field( 'service_name' ); ?></h4>
                        <?php echo apply_filters( 'the_content', get_sub_field( 'content' ) ); ?>
                        <a class="secondary tiny button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>
                    </div>

                </div>

                <?php endwhile; ?>
                
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