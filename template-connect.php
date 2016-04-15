<?php
/**
 * Template Name: Connect Page
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

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'connect' ) ); ?>>
    <div class="row">
        
        <div class="small-12 medium-9 columns">

            <div class="page-copy">
                <?php the_content(); ?>
                
                <?php 
                    if ( get_field( 'als_contact_form' ) !== '' ) : ?>
                        <h3><?php _e( 'Connect With Us', THEME_ID ); ?></h3>
                        <?php the_field( 'als_contact_form' ); 
                    endif;
                ?>
                
            </div>
            
        </div>
        
        <div class="small-12 medium-3 columns">
            
            <?php 
                $social_accounts = array(
                    'als_facebook' => array( 
                        'label' => 'Facebook',
                        'icon' => 'facebook-square',
                    ),
                    'als_twitter' => array( 
                        'label' => 'Twitter',
                        'icon' => 'twitter-square',
                    ),
                    'als_pinterest' => array( 
                        'label' => 'Pinterest',
                        'icon' => 'pinterest-square',
                    ),
                    'als_linkedin' => array( 
                        'label' => 'LinkedIn',
                        'icon' => 'linkedin-square',
                    ),
                    'als_instagram' => array( 
                        'label' => 'Instagram',
                        'icon' => 'instagram',
                    ),
                );

            foreach ( $social_accounts as $key => $social ) :

                if ( get_theme_mod( $key, '' ) !== '' ) : ?>

                    <a class="social-icon" href="<?php echo get_theme_mod( $key, '' ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with us on %s', THEME_ID ), $social['label'] ); ?>">
                        <span class="fa fa-<?php echo $social['icon']; ?>"></span>
                    </a>

                <?php endif;

            endforeach;

            if ( get_theme_mod( 'als_rss_show', false ) === true ) : ?>

                <a class="social-icon" href="<?php bloginfo( 'rss2_url' ); ?>" title="<?php _e( 'Get our RSS Feed', THEME_ID ); ?>">
                    <span class="fa fa-rss-square"></span>
                </a>

            <?php endif; ?>
            
            <?php echo apply_filters( 'the_content', get_theme_mod( 'als_address', "3517 Scheele Drive\nJackson, MI 49202" ) ); ?>
            
            <iframe class="google-map" frameborder="0" scrolling="no" src="//maps.google.com/maps?&q=<?php echo get_theme_mod( 'als_address', urlencode( "3517 Scheele Drive\nJackson, MI 49202" ) ); ?>&output=embed"></iframe>
            
            <?php echo sprintf( __( 'Phone: %s', THEME_ID ), get_phone_number_link( get_theme_mod( 'als_phone_number', '1-800-551-9399' ) ) ); ?><br />
            <?php echo sprintf( __( 'Fax: %s', THEME_ID ), get_phone_number_link( get_theme_mod( 'als_fax_number', '1-888-764-6225' ) ) ); ?><br />
        
        </div>
        
        <div id="after-content-text" class="small-12 columns text-center">
            <?php echo apply_filters( 'the_content', get_field( 'after_content_text' ) ); ?>
        </div>

    </div>
</section>

<?php
get_footer();