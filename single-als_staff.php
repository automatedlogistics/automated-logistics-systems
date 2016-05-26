<?php
/**
 * Single Staff template
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

<section id="post-<?php the_ID(); ?>" class="page-content">
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">
        <article <?php post_class( array( 'small-12', 'medium-9', 'columns' ) ); ?>>
            
            <div class="row">

                <?php if ( has_post_thumbnail() ) : ?>
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                        <div class="thumbnail alignleft post-thumbnail-container">
                            <?php the_post_thumbnail( 'thumbnail' ); ?>
                        </div>
                    </a>
                <?php else: ?>
                    <div class="thumbnail alignleft post-thumbnail-container">
                        <span class="fa fa-user"></span>
                    </div>
                <?php endif; ?>

                <h1 class="post-title">
                    <?php the_title(); ?>
                    <?php if ( get_field( 'staff_nickname' ) ) : ?>
                        - "<?php the_field( 'staff_nickname' ); ?>"
                    <?php endif; ?>
                </h1>

                <?php if ( get_field( 'staff_position_title' ) ) : ?>
                    <h4>
                        <?php the_field( 'staff_position_title' ); ?>
                    </h4>
                <?php endif; ?>
                
            </div>
            
            <div class="row">
                
                <?php if ( get_field( 'staff_professional_bio' ) ) : 
                    echo apply_filters( 'the_content', get_field( 'staff_professional_bio' ) );
                endif; ?>
                
                <?php if ( get_field( 'staff_personal_bio' ) ) : 
                    echo apply_filters( 'the_content', get_field( 'staff_personal_bio' ) );
                endif; ?>
                
                <?php
                
                $contact = array(
                    'staff_facebook' => array(
                        'label' => 'Facebook',
                        'icon' => 'facebook-square',
                    ),
                    'staff_twitter' => array(
                        'label' => 'Twitter',
                        'icon' => 'twitter-square',
                    ),
                    'staff_pinterest' => array(
                        'label' => 'Pinterest',
                        'icon' => 'pinterest-square',
                    ),
                    'staff_linkedin' => array(
                        'label' => 'LinkedIn',
                        'icon' => 'linkedin-square',
                    ),
                    'staff_instagram' => array(
                        'label' => 'Instagram',
                        'icon' => 'instagram',
                    )
                );
                
                ?>
                
                <h6><?php echo sprintf( __( 'Connect with %s:', THEME_ID ), get_the_title() ); ?></h6>
                
                <a class="social-icon" href="mailto:<?php the_field( 'staff_email' ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with %s via Email', THEME_ID ), get_the_title() ); ?>">
                    <span class="fa fa-envelope-square"></span> <?php _e( 'Via Email', THEME_ID ); ?>
                </a><br />
                
                <?php
                
                foreach ( $contact as $key => $social ) {
                    
                    if ( get_field( $key ) ) : ?>

                        <a class="social-icon" href="<?php the_field( $key ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with %s on %s', THEME_ID ), get_the_title(), $social['label'] ); ?>">
                            <span class="fa fa-<?php echo $social['icon']; ?>"></span> <?php echo sprintf( __( 'Via %s', THEME_ID ), $social['label'] ); ?>
                        </a><br />

                    <?php endif;
                    
                }
                
                ?>
            
            </div>

        </article>

        <div class="small-12 medium-3 columns sidebar">

            <?php dynamic_sidebar( 'main-sidebar' ); ?>

        </div>
    </div>
</section>

<?php
get_footer();