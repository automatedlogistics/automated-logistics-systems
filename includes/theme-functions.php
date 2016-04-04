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