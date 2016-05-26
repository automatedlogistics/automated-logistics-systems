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
        <article <?php post_class( array( 'small-12', 'columns' ) ); ?>>
            
            <h1 class="post-title">
                <?php the_title(); ?>
                <?php if ( get_field( 'staff_nickname' ) ) : ?>
                    - "<?php the_field( 'staff_nickname' ); ?>"
                <?php endif; ?>
            </h1>
            
            <div class="row staff-meta-information">
                
                <div class="small-6 medium-2 columns">

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="thumbnail alignleft post-thumbnail-container">
                            <?php the_post_thumbnail( 'thumbnail-tall' ); ?>
                        </div>
                    <?php else: ?>
                        <div class="thumbnail alignleft post-thumbnail-container">
                            <span class="fa fa-user"></span>
                        </div>
                    <?php endif; ?>
                    
                </div>
                
                <div class="small-6 medium-4 columns">
                
                    <?php if ( $hired_date = get_field( 'staff_hired_date' ) ) : 
                    
                    $hired_date = new DateTime( $hired_date );
                    $hired_date = $hired_date->format( 'F, Y' );
                    
                    ?>
                        <span class="fa fa-calendar fa-fw staff-meta-icon"></span> <?php echo sprintf( __( '%s &mdash; Present', THEME_ID ), $hired_date ); ?><br />
                    <?php endif; ?>

                    <?php if ( get_field( 'staff_position_title' ) ) : ?>
                        <span class="fa fa-user fa-fw staff-meta-icon"></span> <?php the_field( 'staff_position_title' ); ?><br />
                    <?php endif; ?>

                    <span class="fa fa-envelope fa-fw staff-meta-icon"></span> <a href="mailto:<?php the_field( 'staff_email' ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with %s via Email', THEME_ID ), get_the_title() ); ?>">
                        <?php the_field( 'staff_email' ); ?>
                    </a><br />

                    <?php if ( get_field( 'staff_phone' ) ) : ?>
                        <span class="fa fa-volume-control-phone fa-fw staff-meta-icon"></span> <?php echo get_phone_number_link( get_field( 'staff_phone' ), get_field( 'staff_extension' ) ); ?><br />
                    <?php endif; ?>
                    
                    <div class="staff-media-accounts">

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

                        $shown_find_me = false;
                        foreach ( $contact as $key => $social ) {

                            if ( get_field( $key ) ) : ?>

                                <?php if ( ! $shown_find_me ) : ?>

                                <h3 class="find-me-on"><?php _e( 'Find me on:', THEME_ID ); ?></h3>

                                <?php $shown_find_me = true;

                                endif; ?>

                                <a class="social-icon" href="<?php the_field( $key ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with %s on %s', THEME_ID ), get_the_title(), $social['label'] ); ?>">
                                    <span class="fa fa-fw fa-<?php echo $social['icon']; ?>"></span>
                                </a>

                            <?php endif;

                        }

                        ?>
                        
                    </div>
                    
                </div>
                
                <div class="small-12 medium-6 columns badges">
                    
                    <?php if ( have_rows( 'staff_badges' ) ) : 
                    
                        while( have_rows( 'staff_badges' ) ) : the_row(); ?>
                    
                            <div class="badge-container">
                    
                                <span class="has-tip bottom" data-tooltip data-disable-hover="false" title="<?php echo get_sub_field( 'description' ); ?>">
                                    <?php echo wp_get_attachment_image( get_sub_field( 'badge' ), 'staff-badge', false, array(
                                        'alt' => get_sub_field( 'description' ),
                                    ) ); ?>
                                </span>
                                
                            </div>
                    
                        <?php endwhile;
                    
                    endif; ?>
                    
                </div>
                
            </div>
            
            <div class="row body-copy">
                
                <div class="small-12 medium-2 columns">
                    <h3><?php _e( 'About Me:', THEME_ID ); ?></h3>
                </div>
                
                <div class="small-12 medium-10 columns">
                
                    <?php if ( get_field( 'staff_professional_bio' ) ) : 
                        echo apply_filters( 'the_content', get_field( 'staff_professional_bio' ) );
                    endif; ?>

                    <?php if ( get_field( 'staff_personal_bio' ) ) : 
                        echo apply_filters( 'the_content', get_field( 'staff_personal_bio' ) );
                    endif; ?>
                    
                </div>
            
            </div>

        </article>
        
    </div>
</section>

<?php
get_footer();