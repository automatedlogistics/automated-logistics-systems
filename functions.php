<?php
/**
 * The theme's functions file that loads on EVERY page, used for uniform functionality.
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

// Make sure PHP version is correct
if ( ! version_compare( PHP_VERSION, '5.3.0', '>=' ) ) {
    wp_die( 'ERROR in Automated Logistics Systems theme: PHP version 5.3 or greater is required.' );
}

// Make sure no theme constants are already defined (realistically, there should be no conflicts)
if ( defined( 'THEME_VERSION' ) || defined( 'THEME_ID' ) || isset( $als_fonts ) ) {
    wp_die( 'ERROR in Automated Logistics Systems theme: There is a conflicting constant. Please either find the conflict or rename the constant.' );
}

/**
 * The theme's current version (make sure to keep this up to date!)
 */
define( 'THEME_VERSION', '0.1.0' );

/**
 * The theme's ID (used in handlers).
 */
define( 'THEME_ID', 'als_theme' );

/**
 * Fonts for the theme. Must be hosted font (Google fonts for example).
 */
$als_fonts = array(
    'Font Awesome' => '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
    'Oswald' => '//fonts.googleapis.com/css?family=Oswald:400,700',
    'Quattrocento Sans' => '//fonts.googleapis.com/css?family=Quattrocento+Sans:400,400italic,700,700italic',
);

/**
 * Setup theme properties and stuff.
 *
 * @since 0.1.0
 */
add_action( 'after_setup_theme', function () {

    // Add theme support
    require_once __DIR__ . '/includes/theme-support.php';
    
    // Add Customizer Controls
    add_action( 'customize_register', 'als_customize_register' );

    require_once __DIR__ . '/includes/class-foundation_nav_walker.php';
    
    require_once __DIR__ . '/includes/theme-functions.php';

    // Allow shortcodes in text widget
    add_filter( 'widget_text', 'do_shortcode' );

} );

/**
 * Adds custom Customizer Controls.
 *
 * @since 0.1.0
 */
function als_customize_register( $wp_customize ) {
    
    require_once __DIR__ . '/includes/class-text_editor_custom_control.php';
    
    // General Theme Options
    $wp_customize->add_section( 'als_customizer_section' , array(
            'title'      => __( 'Automated Logistics Systems Settings', THEME_ID ),
            'priority'   => 30,
        ) 
    );
    
    $wp_customize->add_setting( 'als_logo_image', array(
            'default'     => 1,
            'transport'   => 'refresh',
        ) 
    );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'als_logo_image', array(
        'label'        => __( 'Logo', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_logo_image',
        'mime_type'  => 'image',
    ) ) );
    
    $wp_customize->add_setting( 'als_footer_columns' , array(
            'default'     => 4,
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_footer_columns', array(
        'type' => 'number',
        'label'        => __( 'Footer Number of Columns/Widget Areas', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_footer_columns',
    ) ) );
    
}

/**
 * Register theme files.
 *
 * @since 0.1.0
 */
add_action( 'init', function () {

    global $als_fonts;

    // Theme styles
    wp_register_style(
        THEME_ID,
        get_template_directory_uri() . '/style.css',
        null,
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION
    );

    // Theme script
    wp_register_script(
        THEME_ID,
        get_template_directory_uri() . '/script.js',
        array( 'jquery' ),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );
    
    wp_localize_script( THEME_ID, THEME_ID . '_data', array( 'ajaxUrl' => admin_url( 'admin-ajax.php' ) ) );

    // Theme fonts
    if ( ! empty( $als_fonts ) ) {
        foreach ( $als_fonts as $ID => $link ) {
            wp_register_style(
                THEME_ID . "-font-$ID",
                $link
            );
        }
    }

} );

/**
 * Register sidebars.
 *
 * @since 0.1.0
 */
add_action( 'widgets_init', function () {

    // Main Sidebar
    register_sidebar( array(
        'name' => __( 'Main Sidebar', THEME_ID ),
        'id' => 'main-sidebar',
        'description' => __( 'This is the default sidebar that appears.', THEME_ID ),
    ) );
    
    // Footer
    $footer_columns = get_theme_mod( 'als_footer_columns', 4 );
    for ( $index = 0; $index < $footer_columns; $index++ ) {
        register_sidebar(
            array(
                'name'          =>  'Footer ' . ( $index + 1 ),
                'id'            =>  'footer-' . ( $index + 1 ),
                'description'   =>  sprintf( __( 'This is Footer Widget Area %d', THEME_ID ), ( $index + 1 ) ),
                'before_widget' =>  '<aside id="%1$s" class="widget %2$s">',
                'after_widget'  =>  '</aside>',
                'before_title'  =>  '<h3 class="widget-title">',
                'after_title'   =>  '</h3>',
            )
        );
    }

} );

/**
 * Adds a favicon.
 *
 * @since 0.1.0
 */
add_action( 'wp_head', '_als_favicon' );
add_action( 'admin_head', '_als_favicon' );
function _als_favicon() {

    if ( ! file_exists( get_stylesheet_directory() . '/assets/images/favicon.ico' ) ) {
        return;
    }
?>
<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri() . '/assets/images/favicon.ico'; ?>" />
<?php
}

/**
 * Enqueue theme files.
 *
 * @since 0.1.0
 */
add_action( 'wp_enqueue_scripts', function () {

    global $als_fonts;

    // Theme styles
    wp_enqueue_style( THEME_ID );

    // Theme script
    wp_enqueue_script( THEME_ID );

    // Theme fonts
    if ( ! empty( $als_fonts ) ) {
        foreach ( $als_fonts as $ID => $link ) {
            wp_enqueue_style( THEME_ID . "-font-$ID" );
        }
    }

} );

/**
 *
 * @since 0.1.0
 * 
 */
add_action( 'customize_controls_enqueue_scripts', function() {
    
    wp_enqueue_script( THEME_ID . '-customizer-controls' );
    
} );

/**
 * Register nav menus.
 *
 * @since 0.1.0
 */
add_action( 'after_setup_theme', function () {

    register_nav_menu( 'primary-nav', 'Primary Menu' );

} );

/*
 * Since WP Smilies load as Images, MailChimp makes them HUGE. For RSS Feeds, let's make sure they are straight text.
 *
 * @since 0.1.0
 */
add_action( 'pre_get_posts', 'remove_wp_smilies_from_feed' );
function remove_wp_smilies_from_feed( $query ) {
    
    if ( $query->is_feed ) {
        remove_filter( 'the_content', 'convert_smilies' );
    }
    
}

/**
 * Creates the Services CPT
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_cpt_als_service' );
function register_cpt_als_service() {
    $labels = array(
        'name' => _x( 'Services', THEME_ID ),
        'all_items' => __( 'All Services', THEME_ID ),
        'singular_name' => _x( 'Service', THEME_ID ),
        'add_new' => _x( 'Add New Service', THEME_ID ),
        'add_new_item' => _x( 'Add New Service', THEME_ID ),
        'edit_item' => _x( 'Edit Service', THEME_ID ),
        'new_item' => _x( 'New Service', THEME_ID ),
        'view_item' => _x( 'View Service', THEME_ID ),
        'search_items' => _x( 'Search Services', THEME_ID ),
        'not_found' => _x( 'No Services found', THEME_ID ),
        'not_found_in_trash' => _x( 'No Services found in Trash', THEME_ID ),
        'parent_item_colon' => _x( 'Parent Services:', THEME_ID ),
        'menu_name' => _x( 'Services', THEME_ID ),
        'featured_image'        => _x( 'Service Image', THEME_ID ),
        'remove_featured_image' => _x( 'Remove Service Image', THEME_ID ),
        'set_featured_image'    => _x( 'Set Service Image', THEME_ID ),
        'use_featured_image'    => _x( 'Use as Service Image', THEME_ID ),
    );
    $args = array(
        'labels' => $labels,
        'menu_icon' => 'dashicons-share-alt',
        'hierarchical' => false,
        'description' => 'service',
        'supports' => array( 'title', 'editor', 'author', 'thumbnail' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array(
            'slug' => 'service',
            'with_front' => false,
            'feeds' => false,
            'pages' => true
        ),
        'capability_type' => 'post',
        /*
        'capability_type' => 'service',
        'capabilities' => array(
            // Singular
            'edit_post'	=>	'edit_service',
            'read_post'	=>	'read_service',
            'delete_post'	=>	'delete_service',
            // Plural
            'edit_posts'	=>	'edit_services',
            'edit_others_posts'	=>	'edit_others_services',
            'publish_posts'	=>	'publish_services',
            'read_private_posts'	=>	'read_private_services',
            'delete_posts'	=>	'delete_services',
            'delete_private_posts'	=>	'delete_private_services',
            'delete_published_posts'	=>	'delete_published_services',
            'delete_others_posts'	=>	'delete_others_services',
            'edit_private_posts'	=>	'edit_private_services',
            'edit_published_posts'	=>	'edit_published_services',
        ),
		*/
    );
    register_post_type( 'als_service', $args );
}

/**
 * Creates the Service Type Category
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_taxonomy_als_service_type' );
function register_taxonomy_als_service_type() {
    $labels = array(
        'name' => _x( 'Service Type', THEME_ID ),
        'singular_name' => _x( 'Service Type', THEME_ID ),
        'search_items' => __( 'Search Service Types', THEME_ID ),
        'popular_items' => __( 'Popular Service Types', THEME_ID ),
        'all_items' => __( 'All Service Types', THEME_ID ),
        'parent_item' => __( 'Parent Service Type', THEME_ID ),
        'parent_item_colon' => __( 'Parent Service Type:', THEME_ID ),
        'edit_item' => __( 'Edit Service Type', THEME_ID ),
        'update_item' => __( 'Update Service Type', THEME_ID ),
        'add_new_item' => __( 'Add New Service Type', THEME_ID ),
        'new_item_name' => __( 'New Service Type Name', THEME_ID ),
        'separate_items_with_commas' => __( 'Separate Service Types with commas', THEME_ID ),
        'add_or_remove_items' => __( 'Add or remove Service Type', THEME_ID ),
        'choose_from_most_used' => __( 'Choose from the most used Service Types', THEME_ID ),
        'not_found' => __( 'No Service Types found.', THEME_ID ),
        'menu_name' => __( 'Service Type', THEME_ID ),
    );
    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'service-type' ),
    );
    register_taxonomy( 'als_service_type', 'als_service', $args );
}