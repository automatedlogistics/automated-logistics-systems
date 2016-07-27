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
    'Font Awesome' => '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
    'Oswald' => '//fonts.googleapis.com/css?family=Oswald:400,700',
    'Quattrocento Sans' => '//fonts.googleapis.com/css?family=Quattrocento+Sans:400,400italic,700,700italic',
);

/**
 * Setup theme properties and stuff.
 *
 * @since 0.1.0
 */
add_action( 'after_setup_theme', function () {
    
    // Image sizes
    add_image_size( 'timeline-image', 500, false );
    
    add_image_size( 'hero-image', false, 400 );
    
    add_image_size( 'thumbnail-tall', 200, false );
    
    add_image_size( 'staff-badge', 55, 55 );
    
    add_image_size( 'product-icon', false, 160 );

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
        'label'        => __( 'Header Logo', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_logo_image',
        'mime_type'  => 'image',
    ) ) );
    
    $wp_customize->add_setting( 'als_footer_logo_image', array(
            'default'     => 1,
            'transport'   => 'refresh',
        ) 
    );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'als_footer_logo_image', array(
        'label'        => __( 'Footer Logo', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_footer_logo_image',
        'mime_type'  => 'image',
    ) ) );
    
    $wp_customize->add_setting( 'als_phone_number', array(
            'default'     => '1-800-551-9399',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_phone_number', array(
        'label'        => __( 'Phone Number', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_phone_number',
    ) ) );
    
    $wp_customize->add_setting( 'als_fax_number', array(
            'default'     => '1-888-764-6225',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_fax_number', array(
        'label'        => __( 'Fax Number', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_fax_number',
    ) ) );
    
    $wp_customize->add_setting( 'als_address', array(
            'default'     => "3517 Scheele Drive\nJackson, MI 49202",
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_address', array(
        'type' => 'textarea',
        'label'        => __( 'Physical Address', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_address',
    ) ) );
    
    $wp_customize->add_setting( 'als_facebook', array(
            'default'     => '',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_facebook', array(
        'type' => 'url',
        'label'        => __( 'Facebook URL', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_facebook',
    ) ) );
    
    $wp_customize->add_setting( 'als_twitter', array(
            'default'     => '',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_twitter', array(
        'type' => 'url',
        'label'        => __( 'Twitter URL', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_twitter',
    ) ) );
    
    $wp_customize->add_setting( 'als_pinterest', array(
            'default'     => '',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_pinterest', array(
        'type' => 'url',
        'label'        => __( 'Pinterest URL', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_pinterest',
    ) ) );
    
    $wp_customize->add_setting( 'als_linkedin', array(
            'default'     => '',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_linkedin', array(
        'type' => 'url',
        'label'        => __( 'LinkedIn URL', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_linkedin',
    ) ) );
    
    $wp_customize->add_setting( 'als_instagram', array(
            'default'     => '',
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_instagram', array(
        'type' => 'url',
        'label'        => __( 'Instagram URL', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_instagram',
    ) ) );
    
    $wp_customize->add_setting( 'als_rss_show', array(
            'default'     => false,
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'als_rss_show', array(
        'type' => 'checkbox',
        'label'        => __( 'Show RSS Button', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => 'als_rss_show',
    ) ) );
    
    $wp_customize->add_setting( 'als_footer_columns', array(
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
    
    $wp_customize->add_setting( '404_image', array(
            'default'     => 1,
            'transport'   => 'refresh',
        ) 
    );
    $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, '404_image', array(
        'label'        => __( '404 Hero Image', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => '404_image',
        'mime_type'  => 'image',
    ) ) );
    
    $wp_customize->add_setting( '404_text', array(
            'default'     =>  __( "Sorry, but this page doesn't seem to be here!", THEME_ID ),
            'transport'   => 'refresh',
        )
    );
    $wp_customize->add_control( new Text_Editor_Custom_Control( $wp_customize, '404_text', array(
        'label'        => __( '404 Page Message', THEME_ID ),
        'section'    => 'als_customizer_section',
        'settings'   => '404_text',
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
        array( 'jquery', 'google-iframe-api' ),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );
    
    wp_localize_script( THEME_ID, THEME_ID . '_data', array( 'ajaxUrl' => admin_url( 'admin-ajax.php' ) ) );
    
    // Quick Edit Screen
    wp_register_script(
        THEME_ID . '-quick-edit',
        get_template_directory_uri() . '/quick-edit.js',
        array( 'jquery' ),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );
    
    // Customizer Controls
    wp_register_script(
        THEME_ID . '-customizer-controls',
        get_template_directory_uri() . '/customizer-controls.js',
        array( 'jquery', 'editor' ),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );
    
    wp_register_script(
        'google-iframe-api',
        '//www.youtube.com/iframe_api',
        array(),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );

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
    
    // 404 Sidebar
    register_sidebar( array(
        'name' => __( '404 Page Sidebar', THEME_ID ),
        'id' => '404-sidebar',
        'description' => __( 'This is the sidebar that shows on 404 Pages.', THEME_ID ),
    ) );
    
    if ( class_exists( 'ALS_Countdown' ) ) {
        
        // Overlay Sidebars
        register_sidebar( array(
            'name' => __( 'Countdown Left', THEME_ID ),
            'id' => 'als-countdown-left',
            'description' => __( 'Countdown Left', THEME_ID ),
        ) );
        
        register_sidebar( array(
            'name' => __( 'Countdown Right', THEME_ID ),
            'id' => 'als-countdown-right',
            'description' => __( 'Countdown Left', THEME_ID ),
        ) );
        
    }
    
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

    if ( ! file_exists( get_stylesheet_directory() . '/images/favicon.ico' ) ) {
        return;
    }
?>
<!--[if lte IE 10]>
<link rel="shortcut icon" type="image/x-icon" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon.ico'; ?>" />
<![endif]-->
<link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon16x16.png'; ?>" />
<link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon32x32.png'; ?>" />
<link rel="apple-touch-icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon152x152.png'; ?>">

<link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon196x196.png'; ?>" />
<meta name="theme-color" content="#005790">

<?php
}

/**
 * Enqueue theme files.
 *
 * @since 0.1.0
 */
add_action( 'wp_enqueue_scripts', function() {

    global $als_fonts;

    // Theme styles
    wp_enqueue_style( THEME_ID );

    // Theme script
    wp_enqueue_script( 'google-iframe-api' );
    wp_enqueue_script( THEME_ID );

    // Theme fonts
    if ( ! empty( $als_fonts ) ) {
        foreach ( $als_fonts as $ID => $link ) {
            wp_enqueue_style( THEME_ID . "-font-$ID" );
        }
    }

} );

add_action( 'admin_enqueue_scripts', function( $hook ) {
    
    if ( $hook == 'edit.php' ) {
        
        wp_enqueue_script( THEME_ID . '-quick-edit' );
        
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
 * Add JavaScript for Customizer Controls
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

add_filter( 'wp_nav_menu_items','als_add_search_to_menu', 10, 2 ); 
function als_add_search_to_menu( $items, $args ) {

    if ( $args->theme_location == 'primary-nav' ) {
        $items .= '<li class="menu-search-icon-kt panel"><a id="trigger-search-overlay"><span class="fa fa-search"></span><span class="show-for-small-only"> ' . __( "Search", THEME_ID ) . '</a></li>';
    }

    return $items;    

}

/**
 * Force WP Search to work across Post Types
 * 
 * @since 0.1.0
 */
add_filter( 'pre_get_posts', 'als_post_types_in_search' );
function als_post_types_in_search( $query ) {
    
    if ( $query->is_search ) {
        
	   $query->set( 'post_type', array(
           'post',
           'page',
           'als_service',
           'als_staff',
           'als_job_opening',
       ) );
        
    }
    
    return $query;
    
};

/**
 * Set Excerpt More Text
 * 
 * @since 0.1.0
 */
add_filter( 'excerpt_more', 'als_excerpt_more_text' );
function als_excerpt_more_text( $more ) {
    
    global $post;
    
    $more = '<a href="' . get_permalink() . '" title="' . get_the_title() . '"> ' . __( 'Read More...', THEME_ID ) . '</a>';
    
    return $more;
    
}

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
 * Creates the Products CPT
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_cpt_als_service' );
function register_cpt_als_service() {
    $labels = array(
        'name' => _x( 'Products/Services', THEME_ID ),
        'all_items' => __( 'All Products/Services', THEME_ID ),
        'singular_name' => _x( 'Product/Service', THEME_ID ),
        'add_new' => _x( 'Add New Product/Service', THEME_ID ),
        'add_new_item' => _x( 'Add New Product/Service', THEME_ID ),
        'edit_item' => _x( 'Edit Product/Service', THEME_ID ),
        'new_item' => _x( 'New Product/Service', THEME_ID ),
        'view_item' => _x( 'View Product/Service', THEME_ID ),
        'search_items' => _x( 'Search Products/Services', THEME_ID ),
        'not_found' => _x( 'No Products/Services found', THEME_ID ),
        'not_found_in_trash' => _x( 'No Products/Services found in Trash', THEME_ID ),
        'parent_item_colon' => _x( 'Parent Product:', THEME_ID ),
        'menu_name' => _x( 'Products/Services', THEME_ID ),
        'featured_image'        => _x( 'Product/Service Header Image', THEME_ID ),
        'remove_featured_image' => _x( 'Remove Product/Service Header Image', THEME_ID ),
        'set_featured_image'    => _x( 'Set Product/Service Header Image', THEME_ID ),
        'use_featured_image'    => _x( 'Use as Product/Service Header Image', THEME_ID ),
    );
    $args = array(
        'labels' => $labels,
        'menu_icon' => 'dashicons-share-alt',
        'hierarchical' => false,
        'description' => 'Products/Services',
        'supports' => array( 'title', 'editor', 'author', 'thumbnail' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array(
            'slug' => 'product-service',
            'with_front' => false,
            'feeds' => false,
            'pages' => true
        ),
        'capability_type' => 'post',
        /*
        'capability_type' => 'als_service',
        'capabilities' => array(
            // Singular
            'edit_post'	=>	'edit_als_service',
            'read_post'	=>	'read_als_service',
            'delete_post'	=>	'delete_als_service',
            // Plural
            'edit_posts'	=>	'edit_als_services',
            'edit_others_posts'	=>	'edit_others_als_services',
            'publish_posts'	=>	'publish_als_services',
            'read_private_posts'	=>	'read_private_als_services',
            'delete_posts'	=>	'delete_als_services',
            'delete_private_posts'	=>	'delete_private_als_services',
            'delete_published_posts'	=>	'delete_published_als_services',
            'delete_others_posts'	=>	'delete_others_als_services',
            'edit_private_posts'	=>	'edit_private_als_services',
            'edit_published_posts'	=>	'edit_published_als_services',
        ),
		*/
    );
    register_post_type( 'als_service', $args );
}

/**
 * Creates the Product/Service Type Category
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_taxonomy_als_service_type' );
function register_taxonomy_als_service_type() {
    $labels = array(
        'name' => _x( 'Product/Service Type', THEME_ID ),
        'singular_name' => _x( 'Product/Service Type', THEME_ID ),
        'search_items' => __( 'Search Product/Service Types', THEME_ID ),
        'popular_items' => __( 'Popular Product/Service Types', THEME_ID ),
        'all_items' => __( 'All Product/Service Types', THEME_ID ),
        'parent_item' => __( 'Parent Product/Service Type', THEME_ID ),
        'parent_item_colon' => __( 'Parent Product/Service Type:', THEME_ID ),
        'edit_item' => __( 'Edit Product/Service Type', THEME_ID ),
        'update_item' => __( 'Update Product/Service Type', THEME_ID ),
        'add_new_item' => __( 'Add New Product/Service Type', THEME_ID ),
        'new_item_name' => __( 'New Product/Service Type Name', THEME_ID ),
        'separate_items_with_commas' => __( 'Separate Product/Service Types with commas', THEME_ID ),
        'add_or_remove_items' => __( 'Add or remove Product/Service Type', THEME_ID ),
        'choose_from_most_used' => __( 'Choose from the most used Product/Service Types', THEME_ID ),
        'not_found' => __( 'No Product/Service Types found.', THEME_ID ),
        'menu_name' => __( 'Product/Service Type', THEME_ID ),
    );
    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'product-service-type' ),
    );
    register_taxonomy( 'als_service_type', 'als_service', $args );
}

/**
 * Creates the Staff CPT
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_cpt_als_staff' );
function register_cpt_als_staff() {
    $labels = array(
        'name' => _x( 'Staff', THEME_ID ),
        'all_items' => __( 'All Staff', THEME_ID ),
        'singular_name' => _x( 'Staff', THEME_ID ),
        'add_new' => _x( 'Add New Staff', THEME_ID ),
        'add_new_item' => _x( 'Add New Staff', THEME_ID ),
        'edit_item' => _x( 'Edit Staff', THEME_ID ),
        'new_item' => _x( 'New Staff', THEME_ID ),
        'view_item' => _x( 'View Staff', THEME_ID ),
        'search_items' => _x( 'Search Staff', THEME_ID ),
        'not_found' => _x( 'No Staff found', THEME_ID ),
        'not_found_in_trash' => _x( 'No Staff found in Trash', THEME_ID ),
        'parent_item_colon' => _x( 'Parent Staff:', THEME_ID ),
        'menu_name' => _x( 'Staff', THEME_ID ),
        'featured_image'        => _x( 'Staff Image (170px * 213px)', THEME_ID ),
        'remove_featured_image' => _x( 'Remove Staff Image', THEME_ID ),
        'set_featured_image'    => _x( 'Set Staff Image', THEME_ID ),
        'use_featured_image'    => _x( 'Use as Staff Image', THEME_ID ),
    );
    $args = array(
        'labels' => $labels,
        'menu_icon' => 'dashicons-businessman',
        'hierarchical' => false,
        'description' => 'staff',
        'supports' => array( 'title', 'editor', 'author', 'thumbnail' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array(
            'slug' => 'staff-member',
            'with_front' => false,
            'feeds' => false,
            'pages' => true
        ),
        'capability_type' => 'post',
        /*
        'capability_type' => 'als_staff',
        'capabilities' => array(
            // Singular
            'edit_post'	=>	'edit_als_staff',
            'read_post'	=>	'read_als_staff',
            'delete_post'	=>	'delete_als_staff',
            // Plural
            'edit_posts'	=>	'edit_als_staffs',
            'edit_others_posts'	=>	'edit_others_als_staffs',
            'publish_posts'	=>	'publish_als_staffs',
            'read_private_posts'	=>	'read_private_als_staffs',
            'delete_posts'	=>	'delete_als_staffs',
            'delete_private_posts'	=>	'delete_private_als_staffs',
            'delete_published_posts'	=>	'delete_published_als_staffs',
            'delete_others_posts'	=>	'delete_others_als_staffs',
            'edit_private_posts'	=>	'edit_private_als_staffs',
            'edit_published_posts'	=>	'edit_published_als_staffs',
        ),
		*/
    );
    register_post_type( 'als_staff', $args );
}

/**
 * Creates the Job Openings CPT
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_cpt_als_job_opening' );
function register_cpt_als_job_opening() {
    $labels = array(
        'name' => _x( 'Job Openings', THEME_ID ),
        'all_items' => __( 'All Job Openings', THEME_ID ),
        'singular_name' => _x( 'Job Opening', THEME_ID ),
        'add_new' => _x( 'Add New Job Opening', THEME_ID ),
        'add_new_item' => _x( 'Add New Job Opening', THEME_ID ),
        'edit_item' => _x( 'Edit Job Opening', THEME_ID ),
        'new_item' => _x( 'New Job Opening', THEME_ID ),
        'view_item' => _x( 'View Job Opening', THEME_ID ),
        'search_items' => _x( 'Search Job Openings', THEME_ID ),
        'not_found' => _x( 'No Job Openings found', THEME_ID ),
        'not_found_in_trash' => _x( 'No Job Openings found in Trash', THEME_ID ),
        'parent_item_colon' => _x( 'Parent Job Opening:', THEME_ID ),
        'menu_name' => _x( 'Job Openings', THEME_ID ),
        'featured_image'        => _x( 'Job Opening Image', THEME_ID ),
        'remove_featured_image' => _x( 'Remove Job Opening Image', THEME_ID ),
        'set_featured_image'    => _x( 'Set Job Opening Image', THEME_ID ),
        'use_featured_image'    => _x( 'Use as Job Opening Image', THEME_ID ),
    );
    $args = array(
        'labels' => $labels,
        'menu_icon' => 'dashicons-id-alt',
        'hierarchical' => false,
        'description' => 'job opening',
        'supports' => array( 'title', 'editor', 'author' ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => false,
        'has_archive' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array(
            'slug' => 'job-opening',
            'with_front' => false,
            'feeds' => false,
            'pages' => true
        ),
        'capability_type' => 'post',
        /*
        'capability_type' => 'als_job_opening',
        'capabilities' => array(
            // Singular
            'edit_post'	=>	'edit_als_job_opening',
            'read_post'	=>	'read_als_job_opening',
            'delete_post'	=>	'delete_als_job_opening',
            // Plural
            'edit_posts'	=>	'edit_als_job_openings',
            'edit_others_posts'	=>	'edit_others_als_job_openings',
            'publish_posts'	=>	'publish_als_job_openings',
            'read_private_posts'	=>	'read_private_als_job_openings',
            'delete_posts'	=>	'delete_services',
            'delete_private_posts'	=>	'delete_private_als_job_openings',
            'delete_published_posts'	=>	'delete_published_als_job_openings',
            'delete_others_posts'	=>	'delete_others_als_job_openings',
            'edit_private_posts'	=>	'edit_private_als_job_openings',
            'edit_published_posts'	=>	'edit_published_als_job_openings',
        ),
		*/
    );
    register_post_type( 'als_job_opening', $args );
}

/**
 * Creates the Testimonials CPT
 *
 * @since 0.1.0
 */
add_action( 'init', 'register_cpt_als_testimonial' );
function register_cpt_als_testimonial() {
    $labels = array(
        'name' => _x( 'Testimonials', THEME_ID ),
        'all_items' => __( 'All Testimonials', THEME_ID ),
        'singular_name' => _x( 'Testimonial', THEME_ID ),
        'add_new' => _x( 'Add New Testimonial', THEME_ID ),
        'add_new_item' => _x( 'Add New Testimonial', THEME_ID ),
        'edit_item' => _x( 'Edit Testimonial', THEME_ID ),
        'new_item' => _x( 'New Testimonial', THEME_ID ),
        'view_item' => _x( 'View Testimonial', THEME_ID ),
        'search_items' => _x( 'Search Testimonials', THEME_ID ),
        'not_found' => _x( 'No Testimonials found', THEME_ID ),
        'not_found_in_trash' => _x( 'No Testimonials found in Trash', THEME_ID ),
        'parent_item_colon' => _x( 'Parent Testimonial:', THEME_ID ),
        'menu_name' => _x( 'Testimonials', THEME_ID ),
        'featured_image'        => _x( 'Testimonial Image', THEME_ID ),
        'remove_featured_image' => _x( 'Remove Testimonial Image', THEME_ID ),
        'set_featured_image'    => _x( 'Set Testimonial Image', THEME_ID ),
        'use_featured_image'    => _x( 'Use as Testimonial Image', THEME_ID ),
    );
    $args = array(
        'labels' => $labels,
        'menu_icon' => 'dashicons-awards',
        'hierarchical' => false,
        'description' => 'Testimonial',
        'supports' => array( 'title', 'editor', 'author', 'thumbnail' ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array(
            'slug' => 'testimonial',
            'with_front' => false,
            'feeds' => false,
            'pages' => true
        ),
        'capability_type' => 'post',
        /*
        'capability_type' => 'als_testimonial',
        'capabilities' => array(
            // Singular
            'edit_post'	=>	'edit_als_testimonial',
            'read_post'	=>	'read_als_testimonial',
            'delete_post'	=>	'delete_als_testimonial',
            // Plural
            'edit_posts'	=>	'edit_als_testimonials',
            'edit_others_posts'	=>	'edit_others_als_testimonials',
            'publish_posts'	=>	'publish_als_testimonials',
            'read_private_posts'	=>	'read_private_als_testimonials',
            'delete_posts'	=>	'delete_als_testimonials',
            'delete_private_posts'	=>	'delete_private_als_testimonials',
            'delete_published_posts'	=>	'delete_published_als_testimonials',
            'delete_others_posts'	=>	'delete_others_als_testimonials',
            'edit_private_posts'	=>	'edit_private_als_testimonials',
            'edit_published_posts'	=>	'edit_published_als_testimonials',
        ),
		*/
    );
    register_post_type( 'als_testimonial', $args );
}

/**
 * Use Footer Logo for the Login Screen
 * The Footer Logo is used since it works best against White
 * 
 * @since 1.0
 *
 */
add_action( 'login_head', 'als_custom_login_logo' );
function als_custom_login_logo() {

    // We're using the Footer Logo since it works best against White
    $attachment_id = get_theme_mod( 'als_footer_logo_image', 1 );
    $image_src = wp_get_attachment_image_src( $attachment_id, 'medium', false );
    $image_url = $image_src[0];
    $image_width = $image_src[1];
    $image_height = $image_src[2];
    
    ?>

    <style type="text/css">
        .login h1 a { 
            background-image: url('<?php echo $image_url; ?>') !important; 
            background-size: <?php echo $image_width; ?>px <?php echo $image_height; ?>px !important; 
            height: <?php echo $image_height; ?>px !important; 
            width: <?php echo $image_width; ?>px !important; 
            margin-bottom: 0 !important; 
            padding-bottom: 0 !important; 
        }
        .login form { 
            margin-top: 10px !important; 
        }
        .login .message, .login #login_error {
            margin-top: 1em;
        }
    </style>

    <?php
}

/**
 * Use the Site URL instead of wordpress.org for the Logo link
 * 
 * @since 1.0
 * 
 */
add_filter( 'login_headerurl', 'als_url_login_logo' );
function als_url_login_logo() {

    return get_bloginfo( 'url' );

}

/**
 * Change the Logo link's title attribute to match the new Link
 * 
 * @since 1.0
 *
 */
add_filter( 'login_headertitle', 'als_login_logo_url_title' );
function als_login_logo_url_title() {

    return get_bloginfo( 'name' ) . ' - Home';

}

/**
 * Add Button Shortcode to TinyMCE
 *
 * @since 1.0
 * 
 */
add_action( 'admin_init', 'add_als_button_tinymce_filters' );
function add_als_button_tinymce_filters() {
    
    if ( current_user_can( 'edit_posts' ) && current_user_can( 'edit_pages' ) ) {
        
        add_filter( 'mce_buttons', function( $buttons ) {
            array_push( $buttons, 'als_button_shortcode' );
            return $buttons;
        } );
        
        // Attach script to the button rather than enqueueing it
        add_filter( 'mce_external_plugins', function( $plugin_array ) {
            $plugin_array['als_button_shortcode_script'] = get_stylesheet_directory_uri() . '/build/js/tinymce/button-shortcode.js';
            return $plugin_array;
        } );
        
    }
    
}

/**
 * Add Button Shortcode
 *
 * @since 1.0
 *
 */
add_shortcode( 'als_button', 'add_als_button_shortcode' );
function add_als_button_shortcode( $atts, $content ) {
    
    $atts = shortcode_atts(
        array( // a few default values
            'url' => '#',
            'color' => 'secondary',
            'size' => 'small',
            'with_arc' => 'true',
            'expand' => 'false',
            'new_tab' => 'false',
        ),
        $atts,
        'als_button'
    );
    
    ob_start(); 
    
    if ( ( strpos( $atts['url'], '#' ) !== 0 ) && ( strpos( $atts['url'], 'http' ) !== 0 ) && ( strpos( $atts['url'], '/' ) !== 0 ) ) :
        $atts['url'] = '//' . $atts['url'];
    endif;
    ?>

    <a href="<?php echo $atts['url']; ?>" class="<?php echo $atts['color'] . ' ' . $atts['size'] . ' button' . ( strtolower( $atts['with_arc'] == 'true' ) ? ' with-arc' : '' ) . ( strtolower( $atts['expand'] == 'true' ) ? ' expanded' : '' ); ?>" target="<?php echo ( strtolower( $atts['new_tab'] ) == 'true' ? '_blank' : '_self' ); ?>"><?php echo $content; ?></a>

    <?php
    
    $output = ob_get_contents();
    ob_end_clean();
    
    return html_entity_decode( $output );
    
}

/**
 * Add Products/Services List Shortcode
 *
 * @since 1.1
 *
 */
add_shortcode( 'als_products_services_list', 'add_products_services_list_shortcode' );
function add_products_services_list_shortcode( $atts, $content ) {
    
    $atts = shortcode_atts(
        array(
            'columns' => 3,
        ),
        $atts,
        'als_products_services_list'
    );
    
    $column_class = 'medium-' . 12 / $atts['columns'];
    
    $base_args = array(
        'post_type' => 'als_service',
        'post_status' => 'publish',
        'posts_per_page' => -1, // This seems to be an instnace where pagination would be undesirable.
        'orderby' => 'post_title',
        'order' => 'ASC',
        'tax_query' => array(
            'relation' => 'AND',
            array(
                'taxonomy' => 'als_service_type',
                'field' => 'term_id',
            ),
            array(
                'taxonomy' => 'als_service_type',
                'field' => 'term_id',
                'operator' => 'NOT IN',
            ),
        ),
    );

    // We need the Term IDs later anyway, so we will just query using them for everything
    $product_term = get_term_by( 'slug', 'products', 'als_service_type' );                
    $service_term = get_term_by( 'slug', 'services', 'als_service_type' );

    $product_children = get_terms( array(
        'taxonomy' => 'als_service_type',
        'child_of' => $product_term->term_id,
        'order' => 'DESC',
        'orderby' => 'count',
    ) );

    $service_children = get_terms( array(
        'taxonomy' => 'als_service_type',
        'child_of' => $service_term->term_id,
        'order' => 'DESC',
        'orderby' => 'count',
    ) );

    $exclude_product_children = array();
    foreach ( $product_children as $term ) {

        $exclude_product_children[] = $term->term_id;

    }

    $exclude_service_children = array();
    foreach ( $service_children as $term ) {

        $exclude_service_children[] = $term->term_id;

    }

    $product_args = $base_args;
    $product_args['tax_query'][0]['terms'] = $product_term->term_id; // Query for non-organized Products
    $product_args['tax_query'][1]['terms'] = $exclude_product_children; // Exclude organized for now

    $service_args = $base_args;
    $service_args['tax_query'][0]['terms'] = $service_term->term_id;
    $service_args['tax_query'][1]['terms'] = $exclude_service_children;

    $output_loop = array( 
        array(
            'main_query' => new WP_Query( $product_args ),
            'label' => __( 'Products', THEME_ID ),
            'children' => $product_children,
        ),
        array(
            'main_query' => new WP_Query( $service_args ),
            'label' => __( 'Services', THEME_ID ),
            'children' => $service_children,
        ),
    );
    
    ob_start();

    foreach ( $output_loop as $section ) : ?>

        <div class="small-12 columns products-services-list" data-equalizer data-equalize-by-row="true">

            <h3 class="animate-on-scroll scale-in-up"><?php echo $section['label']; ?></h3>

            <?php if ( $section['main_query']->have_posts() ) : ?>
    
                <div class="queue-on-scroll scale-in-up">

                <?php while ( $section['main_query']->have_posts() ) : $section['main_query']->the_post(); 
    
                    $product_toggle = get_field( 'product_in_progress' );
        
                    if ( ! is_array( $product_toggle ) ) $product_toggle = array( $product_toggle ); ?>

                    <div class="small-12 <?php echo $column_class; ?> columns queued-item<?php echo ( in_array( 'in_progress', $product_toggle ) ? ' no-link' : '' ); ?>" data-equalizer-watch>
                        
                        <?php if ( ! in_array( 'in_progress', $product_toggle ) ) : ?>
                        
                            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                                
                        <?php endif; ?>
                            
                                <?php if ( get_field( 'product_icon' ) ) : 
                                    echo wp_get_attachment_image( get_field( 'product_icon' ), 'product-icon', false ); ?>
                                <?php else : ?>
                                    <span class="fa fa-fw fa-10x fa-truck"></span>
                                <?php endif; ?>
                                
                                    <h5><?php the_title(); ?></h5>
                            
                        <?php if ( ! in_array( 'in_progress', $product_toggle ) ) : ?>
                                
                            </a>
                        
                        <?php endif; ?>
                        
                    </div>

                <?php endwhile; ?>
            
                </div>
            
            <?php endif;

            foreach ( $section['children'] as $term ) : ?>

                <div class="small-12 columns sub-list">
                    
                    <div class="row">

                        <h4 class="animate-on-scroll scale-in-up"><?php echo $term->name; ?></h4>

                        <?php

                        $term_args = $base_args;
                        $term_args['tax_query'][0]['terms'] = $term->term_id;
                        $term_args['tax_query'][1]['terms'] = array();

                        $term_query = new WP_Query( $term_args );

                        if ( $term_query->have_posts() ) : ?>
    
                            <div class="queue-on-scroll scale-in-up">

                            <?php while( $term_query->have_posts() ) : $term_query->the_post(); 
    
                                $product_toggle = get_field( 'product_in_progress' );
        
                                if ( ! is_array( $product_toggle ) ) $product_toggle = array( $product_toggle ); ?>

                                <div class="small-12 <?php echo $column_class; ?> columns queued-item<?php echo ( in_array( 'in_progress', $product_toggle ) ? ' no-link' : '' ); ?>" data-equalizer-watch>
                                    
                                    <?php if ( ! in_array( 'in_progress', $product_toggle ) ) : ?>
                                    
                                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                                            
                                    <?php endif; ?>
                                        
                                        <?php if ( get_field( 'product_icon' ) ) : 
                                            echo wp_get_attachment_image( get_field( 'product_icon' ), 'product-icon', false ); ?>
                                        <?php else : ?>
                                            <span class="fa fa-fw fa-10x fa-truck"></span>
                                        <?php endif; ?>
                                            
                                            <h5><?php the_title(); ?></h5>
                                    
                                    <?php if ( ! in_array( 'in_progress', $product_toggle ) ) : ?>
                                            
                                        </a>
                                    
                                    <?php endif; ?>
                                    
                                </div>

                            <?php endwhile; ?>

                            </div>

                        <?php endif; ?>
                    
                    </div>
                        
                </div>

            <?php endforeach; ?>

        </div>

    <?php endforeach;
    
    $output = ob_get_contents();
    ob_end_clean();

    wp_reset_postdata();
    
    return $output;
    
}

/**
 * Register Columns for Staff
 *
 * @since 1.0
 *
 */
add_filter( 'manage_edit-als_staff_columns', 'als_staff_columns_register' ) ;
function als_staff_columns_register( $columns ) {

    $columns = array(
        'cb' => '<input type="checkbox" />',
        'title' => __( 'Name', THEME_ID ),
        'department' => __( 'Department', THEME_ID ),
        'position_title' => __( 'Position/Title', THEME_ID ),
        'author' => __( 'Author', THEME_ID ),
        'date' => __( 'Date', THEME_ID ),
    );

    return $columns;
    
}

/**
 * Make Columns for Staff Sortable
 *
 * @since 1.0
 *
 */
add_filter( 'manage_edit-als_staff_sortable_columns', 'als_staff_columns_sortable' );
function als_staff_columns_sortable( $columns ) {
    
    $columns['department'] = 'department';
    $columns['position_title'] = 'position_title';

    return $columns;
    
}

/**
 * Tell Staff Columns how to Sort
 *
 * @since 1.0
 *
 */
add_action( 'pre_get_posts', 'als_staff_columns_orderby' );
function als_staff_columns_orderby( $query ) {
    
    if ( ! is_admin() )
        return;

    $orderby = $query->get( 'orderby' );
    
    if ( $query->get( 'post_type' ) == 'als_staff' ) {

        if ( 'department' == $orderby ) {
            $query->set( 'meta_key', 'staff_department' );
            $query->set( 'orderby', 'meta_value' );
        }

        if ( 'position_title' == $orderby ) {
            $query->set( 'meta_key', 'staff_position_title' );
            $query->set( 'orderby', 'meta_value' );
        }
        
    }
    
}

/**
 * Populate Columns for Staff
 *
 * @since 1.0
 *
 */
add_action( 'manage_als_staff_posts_custom_column', 'als_staff_columns_data', 10, 2 );
function als_staff_columns_data( $column, $post_id ) {
    
    switch ( $column ) {
        case 'department' :
            $department = get_field_object( 'staff_department', $post_id );
            $department = $department['choices'][ get_field( 'staff_department', $post_id ) ];
            echo $department;
            break;
        case 'position_title' : 
            the_field( 'staff_position_title', $post_id );
            break;
    }
    
}

/**
 * Quick and Bulk Edit Fields for Staff
 *
 * @since 1.0
 *
 */
add_action( 'bulk_edit_custom_box', 'als_staff_quick_edit_fields', 10, 2 );
add_action( 'quick_edit_custom_box', 'als_staff_quick_edit_fields', 10, 2 );
function als_staff_quick_edit_fields( $column_name, $post_type ) {
    
    static $print_nonce = true;
    if ( $print_nonce ) {

        $print_nonce = false;
        wp_nonce_field( 'als_staff_edit_nonce', 'als_staff_edit_nonce_field' );

    }

    ?>

    <fieldset class="inline-edit-als_staff">
        <div class="inline-edit-col column-<?php echo $column_name; ?>">
            <label class="inline-edit-group">
                <?php 
    
                    switch ( $column_name ) {
                        case 'department' : 
                            
                            // get_field_object() requires a Post ID, which is kind of useless
                            // The data it returns isn't very Post-specific, so it seems like an unncessary parameter
                            $random_post = get_posts( array(
                                'post_type' => 'als_staff',
                                'posts_per_page' => 1,
                            ) );
                            
                            $post_id = $random_post[0]->ID;
                            
                            $departments = get_field_object( 'staff_department', $post_id );
                            $departments = $departments['choices'];
                
                        ?>
                        <span class="title"><?php _e( 'Department:', THEME_ID ); ?></span><br />
                        <?php 
                            foreach ( $departments as $key => $value ) : ?>
                                <label for="department-<?php echo $key; ?>">
                                    <input id="department-<?php echo $key; ?>" type="radio" value="<?php echo $key; ?>" name="department" /> <?php echo $value; ?>
                                </label>
                            <?php endforeach;
                        break;
                        case 'position_title' : ?>
                        <span class="title"><?php _e( 'Position/Title', THEME_ID ); ?></span><input name="position_title" value="<?php the_field( 'staff_position_title', get_the_ID() ); ?>" />
                        <?php break;
                    }

                ?>
            </label>
        </div>
    </fieldset>

    <?php
    
}

/**
 * Save Data for Staff after Quick Editing
 *
 * @since 1.0
 *
 */
add_action( 'save_post_als_staff', 'als_staff_save_quick_edit_data' );
function als_staff_save_quick_edit_data( $post_id ) {
    
    if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return;
    }
    
    $_POST += array( 'als_staff_edit_nonce_field' => '' );
    
    if ( ! wp_verify_nonce( $_POST[ 'als_staff_edit_nonce_field' ], 'als_staff_edit_nonce' ) ) {
        return;
    }

    if ( isset( $_REQUEST['department'] ) ) {
        update_field( 'staff_department', $_REQUEST['department'], $post_id );
    }
    
    if ( isset( $_REQUEST['position_title'] ) ) {
        update_field( 'staff_position_title', $_REQUEST['position_title'], $post_id );
    }
    
}

/**
 * Save Data for Staff after Bulk Editing
 *
 * @since 1.0
 *
 */
add_action( 'wp_ajax_save_bulk_edit_als_staff', 'als_staff_save_bulk_edit_data' );
function als_staff_save_bulk_edit_data() {
    
    check_ajax_referer( 'als_staff_edit_nonce', 'security', true );
    
    $post_ids = ( ! empty( $_POST['post_ids'] ) ) ? $_POST['post_ids'] : array();
    $department = ( ! empty( $_POST['department'] ) ) ? $_POST['department'] : '';
    $position_title = ( ! empty( $_POST['position_title'] ) ) ? $_POST['position_title'] : '';
    
    if ( ! empty( $post_ids ) && is_array( $post_ids ) ) {

        foreach( $post_ids as $post_id ) {
            
            if ( ! current_user_can( 'edit_post', $post_id ) ) {
                continue;
            }

            if ( $department !== '' ) {
                update_field( 'staff_department', $department, $post_id );
            }

            if ( $position_title !== '' ) {
                update_field( 'staff_position_title', $position_title, $post_id );
            }

        }

    }

    wp_die();
    
}

/**
 * Google Analytics Script
 * 
 * @since 1.0
 * 
 */
add_action( 'wp_footer', function() { ?>
    
    <script>
        
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11042518-1', 'auto');
        ga('send', 'pageview');

    </script>

<?php
} );

/**
 * Give Editors the Ability to use Flamingo
 * 
 * @since 1.0
 * 
 */ 
remove_filter( 'map_meta_cap', 'flamingo_map_meta_cap' );
add_filter( 'map_meta_cap', 'als_flamingo_map_meta_cap', 9, 4 );
function als_flamingo_map_meta_cap( $caps, $cap, $user_id, $args ) {
    
    $meta_caps = array(
        'flamingo_edit_contacts' => 'publish_posts',
        'flamingo_edit_contact' => 'publish_posts',
        'flamingo_delete_contact' => 'publish_posts',
        'flamingo_edit_inbound_messages' => 'publish_posts',
        'flamingo_delete_inbound_message' => 'publish_posts',
        'flamingo_delete_inbound_messages' => 'publish_posts',
        'flamingo_spam_inbound_message' => 'publish_posts',
        'flamingo_unspam_inbound_message' => 'publish_posts'
    );

    $caps = array_diff( $caps, array_keys( $meta_caps ) );

    if ( isset( $meta_caps[$cap] ) )
    $caps[] = $meta_caps[$cap];

    return $caps;
    
}

/**
 * Show a 404 to Users who guess the in-progress Product/Services URLs
 * 
 * @since 1.1
 * 
 */ 
add_filter( 'template_include', 'als_product_service_404' );
function als_product_service_404( $template ) {
    
    global $wp_query;
    global $post;
    
    if ( get_post_type() == 'als_service' ) {
        
        $product_toggle = get_field( 'product_in_progress' );
        
        if ( ! is_array( $product_toggle ) ) $product_toggle = array( $product_toggle );
        
        if ( in_array( 'in_progress', $product_toggle ) && ! is_preview() ) {
            
            $wp_query->set_404();
            
            return get_query_template( '404' );
            
        }
        
    }
    
    return $template;
    
}

/**
 * Relabel the Posts Post Type
 * @param  object $labels Post Type Labels casted to an Object for some reason
 * @return object Post Type Labels
 *                     
 * @since 1.1
 */
add_filter( 'post_type_labels_post', function( $labels ) {
    
    $labels->name = _x( 'News', THEME_ID );
    $labels->all_items = _x( 'All News Posts', THEME_ID );
    $labels->singular_name = _x( 'News Post', THEME_ID );
    $labels->add_new = _x( 'Add News Post', THEME_ID );
    $labels->add_new_item = _x( 'Add News Post', THEME_ID );
    $labels->edit_item = _x( 'Edit News Post', THEME_ID );
    $labels->new_item = _x( 'New News Post', THEME_ID );
    $labels->view_item = _x( 'View News Post', THEME_ID );
    $labels->search_items = _x( 'Search News Posts', THEME_ID );
    $labels->not_found = _x( 'No News Posts found', THEME_ID );
    $labels->not_found_in_trash = _x( 'No News Posts found in trash', THEME_ID );
    $labels->parent_item_colon = _x( 'Parent News Post:', THEME_ID );
    $labels->menu_name = _x( 'News', THEME_ID );
    $labels->name_admin_bar = _x( 'News Post', THEME_ID );
    $labels->archives = _x( 'News Archives', THEME_ID );
    
    return $labels;
    
} );

/**
 * Switch Menu Icon for Posts Post Type
 * @param  array $args Post Type Args
 * @param  string $post_type Post Type Key
 * @return array Post Type Args
 *                    
 * @since 1.1
 */
add_filter( 'register_post_type_args', function( $args, $post_type ) {
    
    if ( $post_type == 'post' ) {
        
        $args['menu_icon'] = 'dashicons-welcome-widgets-menus';
        
    }
    
    return $args;
    
}, 10, 2 );

/**
 * Make YouTube videos not show suggested videos at the end
 * 
 * @param string $return HTML
 * @param object $data Data Object returned from oEmbed provider
 * @param string $url URL String
 * 
 * @since 1.1.0
 * @return HTML
 */
add_filter( 'oembed_dataparse', function( $return, $data, $url ) {
    
    if ( $data->provider_name == 'YouTube' ) {
        
        $return = str_replace( '?feature=oembed"', '?feature=oembed&rel=0" class="youtube-embed"', $return );
    }
    
    return $return;
    
}, 10, 3 );

/**
 * Add Google Site Verification
 * 
 * @since 1.1.0
 * @return void
 */
add_action( 'wp_head', function() { ?>
    
    <meta name="google-site-verification" content="MGsz3BKi1TcU9W_pdthu_Jv4FNaHjFd0PBengL4Wuvg" />
    
<?php } );