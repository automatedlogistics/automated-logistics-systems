<?php
/**
 * The theme's header file that appears on EVERY page.
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

// Start a session to preserve bucket data
if ( ! isset( $_SESSION ) ) {
    session_start();
}
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width">

        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

        <!--[if lt IE 9]>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/build/vendor/js/html5.js"></script>
<![endif]-->

        <?php wp_head(); ?>

    </head>

    <body <?php body_class( 'off-canvas-wrapper' ); ?>>

        <div id="wrapper" class = "off-canvass-wrapper-inner" data-off-canvas-wrapper>

            <div class="off-canvas position-left nav-menu" id="offCanvasLeft" data-off-canvas>

                <?php
                wp_nav_menu( array(
                    'container' => false,
                    'menu' => __( 'Primary Menu', THEME_ID ),
                    'menu_class' => 'menu',
                    'theme_location' => 'primary-nav',
                    'items_wrap'      => '<ul id="%1$s" class="vertical %2$s">%3$s</ul>',
                    'fallback_cb' => false,
                    'walker' => new Foundation_Nav_Walker(),
                ) );
                ?>

            </div>

            <div class="off-canvas-content" data-off-canvas-content>

                <?php if ( function_exists( 'als_show_inset_alerts' ) ) {
                    als_show_inset_alerts();
                } ?>

                <header id="site-header">

                    <div class="top-bar">

                        <div class="top-bar-left top-bar-title">
                            
                            <span class="show-for-small-only" data-responsive-toggle="responsive-menu" data-hide-for="medium">
                                <button class="menu-icon" type="button" data-open="offCanvasLeft"></button>
                            </span>
                            
                            <a href="<?php bloginfo( 'url' ); ?>" title="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
                            <?php 
                                echo wp_get_attachment_image( get_theme_mod( 'als_logo_image', 1 ), 'medium', false, array(
                                    'title' => get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ),
                                    'alt' => get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ),
                                ) ); 
                            ?>
                           </a>

                        </div>

                        <div class="top-bar-right hide-for-small-only nav-menu">
                            <?php
                            wp_nav_menu( array(
                                'container' => false,
                                'menu' => __( 'Primary Menu', THEME_ID ),
                                'menu_class' => 'dropdown menu',
                                'theme_location' => 'primary-nav',
                                'items_wrap'      => '<ul id="%1$s" class="%2$s" data-dropdown-menu>%3$s</ul>',
                                'fallback_cb' => false,
                                'walker' => new Foundation_Nav_Walker(),
                            ) );
                            ?>
                        </div>

                    </div>

                </header>
                
                <div id="search-overlay" class="overlay" data-path-to="m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 806" preserveAspectRatio="none">
                        <path class="overlay-path" d="m 0,0 1439.999975,0 0,805.99999 0,-805.99999 z"/>
                    </svg>
                    <button type="button" class="overlay-close"><span class="fa fa-3x fa-close"></span></button>
                    <?php echo get_search_form(); ?>
                </div>
                
                <?php if ( is_front_page() ) : ?>
                
                <div id="home-video-overlay" class="overlay" data-path-to="m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 806" preserveAspectRatio="none">
                        <path class="overlay-path" d="m 0,0 1439.999975,0 0,805.99999 0,-805.99999 z"/>
                    </svg>
                    <button type="button" class="overlay-close"><span class="fa fa-3x fa-close"></span></button>
                    <div class="overlay-contents">
                        <?php echo wp_oembed_get( get_field( 'home_video_overlay' ) ); ?>
                        <div class="row page-icons">

                            <div class="small-4 columns text-center">
                                <a href="/customers/">
                                    <span class="als-icon-stack als-icon-3x">
                                        <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                                        <span class="als-icon als-icon-stack als-icon-inverse als-icon-customers"></span>
                                    </span><br />
                                    <h6>Customers</h6>
                                </a>
                            </div>

                            <div class="small-4 columns text-center">
                                <a href="/carriers/">
                                    <span class="als-icon-stack als-icon-3x">
                                        <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                                        <span class="als-icon als-icon-stack als-icon-inverse als-icon-carriers"></span>
                                    </span><br />
                                    <h6>Carriers</h6>
                                </a>
                            </div>

                            <div class="small-4 columns text-center">
                                <a href="/careers/">
                                    <span class="als-icon-stack als-icon-3x">
                                        <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                                        <span class="als-icon als-icon-stack als-icon-inverse als-icon-careers"></span>
                                    </span><br />
                                    <h6>Careers</h6>
                                </a>
                            </div>

                        </div>
                        
                        <div class="row columns hide-for-small-only">
                            <div class="small-12 columns">
                                <?php echo apply_filters( 'the_content', get_field( 'home_video_content' ) ); ?>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <?php endif; ?>

                <section id="site-content">