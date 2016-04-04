<?php
function get_phone_number_link( $phone_number, $link_text = '', $phone_icon = false ) {
    
    $trimmed_phone_number = preg_replace( '/\D/', '', trim( $phone_number ) );
    
    if ( strlen( $trimmed_phone_number ) == 10 ) { // No Country Code
        $trimmed_phone_number = '1' . $trimmed_phone_number;
    }
    else if ( strlen( $trimmed_phone_number ) == 7 ) { // No Country or Area Code
        $trimmed_phone_number = '1517' . $trimmed_phone_number; // We'll assume 517
    }
    
    $tel_link = 'tel:' . $trimmed_phone_number;
    
    if ( $link_text == '' ) $link_text = $phone_number;
    
    if ( $phone_icon ) $phone_icon = '<span class="fa fa-phone"></span> ';
    
    return "<a href='$tel_link' class='phone-number-link'>$phone_icon$link_text</a>";
    
}

/**
 * Loads Templates as buffered HTML so that it can be stored to a variable
 * @param string $template_name      First argument of get_template_part()
 * @param string [$part_name = null] Secondary argument of get_template_part()
 */
function als_load_template_part( $template_name, $part_name = null ) {
    
    ob_start();
    get_template_part( $template_name, $part_name );
    $var = ob_get_contents();
    ob_end_clean();
    return $var;
    
}

/**
 * Forcefully implements the_excerpt on an ACF field
 * @param string $key      ACF Field Name
 */
function acf_get_excerpt( $key ) {
    
    global $post;
    $text = get_field( $key );
    
    if ( $text !== '' ) {
        
        $text = strip_shortcodes( $text );
        $text = apply_filters( 'the_content', $text );
        $text = str_replace( ']]>', ']]>&gt;', $text );
        $excerpt_length = apply_filters( 'excerpt_length', 55 );
        $excerpt_more = apply_filters( 'excerpt_more', '[...]' );
        $text = wp_trim_words( $text, $excerpt_length, $excerpt_more );
        
    }
    
    return apply_filters( 'the_excerpt', $text );
    
}

/**
 * Echos acf_get_excerpt() to mimic some WP Core functionality
 * @param string $key      ACF Field Name
 */
function acf_the_excerpt( $key ) {
    
    echo acf_get_excerpt( $key );
    
}

/**
 * Order posts by the last word in the post_title. 
 * Activated when orderby is 'als_last_word'
 */
add_filter( 'posts_orderby', function( $orderby, \WP_Query $q ) {
    
    if ( 'als_last_word' === $q->get( 'orderby' ) && $get_order =  $q->get( 'order' ) ) {
        
        if( in_array( strtoupper( $get_order ), ['ASC', 'DESC'] ) ) {
            
            global $wpdb;
            $orderby = " RIGHT(post_title, LOCATE(' ', REVERSE(post_title)) - 1) " . $get_order;
            
        }
        
    }
    
    return $orderby;
    
}, PHP_INT_MAX, 2 );