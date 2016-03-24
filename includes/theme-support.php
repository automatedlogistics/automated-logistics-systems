<?php
/**
 * Adds theme support for the theme.
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * Adds support for the "Featured Image". Pass the second argument to only allow for specified post types.
 */
add_theme_support( 'post-thumbnails' );

/**
 * Declares the use of HTML5 in WP templates. Pass the second argument to only allow for specified templates.
 */
add_theme_support( 'html5' );

/**
 * If enabled, WP will deal with providing the title tag, instead of the theme (since 4.1).
 */
add_theme_support( 'title-tag' );