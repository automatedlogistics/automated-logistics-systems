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
    
    // Image sizes
    add_image_size( 'timeline-image', 500, false );
    
    add_image_size( 'hero-image', false, 400 );

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
        array( 'jquery' ),
        defined( 'WP_DEBUG' ) && WP_DEBUG ? time() : THEME_VERSION,
        true
    );
    
    wp_localize_script( THEME_ID, THEME_ID . '_data', array( 'ajaxUrl' => admin_url( 'admin-ajax.php' ) ) );
    
    // Customizer Controls
    wp_register_script(
        THEME_ID . '-customizer-controls',
        get_template_directory_uri() . '/customizer-controls.js',
        array( 'jquery', 'editor' ),
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
    
    register_sidebar( array(
        'name' => __( 'Customers Sidebar', THEME_ID ),
        'id' => 'customer-sidebar',
        'description' => __( 'This is the sidebar that shows on the Customer Page' ),
    ) );
    
    register_sidebar( array(
        'name' => __( 'Carriers Sidebar', THEME_ID ),
        'id' => 'carrier-sidebar',
        'description' => __( 'This is the sidebar that shows on the Carrier Page' ),
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

    if ( ! file_exists( get_stylesheet_directory() . '/images/favicon.ico' ) ) {
        return;
    }
?>
<!--[if lte IE 10]>
<link rel="shortcut icon" type="image/x-icon" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon.ico'; ?>" />
<![endif]-->
<link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon16x16.png'; ?>" />
<link rel="shortcut icon" type="image/png" href="<?php echo get_stylesheet_directory_uri() . '/images/favicon32x32.png'; ?>" />
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
        'parent_item_colon' => _x( 'Parent Service:', THEME_ID ),
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
        'featured_image'        => _x( 'Staff Image', THEME_ID ),
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