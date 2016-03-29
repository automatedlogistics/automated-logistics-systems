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
                    
                    <svg height="0" width="0">
                        <defs>
                            <path id="button-shape" d="M 16.505859 0 A 55.80645 55.80645 0 0 0 8.7089844 28.322266 A 55.80645 55.80645 0 0 0 17.333984 58 L 20.783203 58 A 52.903225 52.903225 0 0 1 11.613281 28.322266 A 52.903225 52.903225 0 0 1 19.904297 0 L 16.505859 0 z " />
                        </defs>
                        <mask id="button-clip">
                            <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white" />
                            <use xlink:href="#button-shape" fill="Black" />
                        </mask>
                    </svg>

                </header>

                <section id="site-content">