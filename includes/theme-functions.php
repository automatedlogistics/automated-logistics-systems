<?php
function get_phone_number_link( $phone_number, $extension = false, $link_text = '', $phone_icon = false ) {
    
    $trimmed_phone_number = preg_replace( '/\D/', '', trim( $phone_number ) );
    
    if ( strlen( $trimmed_phone_number ) == 10 ) { // No Country Code
        $trimmed_phone_number = '1' . $trimmed_phone_number;
    }
    else if ( strlen( $trimmed_phone_number ) == 7 ) { // No Country or Area Code
        $trimmed_phone_number = '1616' . $trimmed_phone_number; // We'll assume 616
    }
    
    $tel_link = 'tel:' . $trimmed_phone_number;
    
    if ( $link_text == '' ) {
        
        $link_text = $phone_number;
        
        if ( ( $extension !== false ) && ( $extension !== '' ) ) {
            $link_text = $link_text . __( ' x ', THEME_ID ) . $extension;
        }
        
    }
    
    if ( ( $extension !== false ) && ( $extension !== '' ) ) {
        $tel_link = $tel_link . ',' . $extension;
    }
    
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
        $excerpt_more = apply_filters( 'excerpt_more', '...' );
        $text = wp_trim_words( $text, $excerpt_length ); // Always show $excerpt_more
        $text = $text . $excerpt_more;
        $text = apply_filters( 'the_content', $text );
        
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

/**
 * usort Function to put Pages before all other WP_Query Results
 * @param  WP_POST $a WP Post Type Object
 * @param  WP_POST $b WP Post Type Object
 * @return bool Success/Failure
 */
function als_pages_first( $a, $b ) {
    
    if ( $a->post_type == 'page' ) :
        return -1;
    endif;
    
    if ( $b->post_type == 'page' ) :
        return 1;
    endif;
    
    return strcmp( str_replace( 'als_', '', $a->post_type ), str_replace( 'als_', '', $b->post_type ) );
    
}

/**
 * usort To Separate Products/Services into Sub-Sections
 * @param  WP_POST $a WP Post Type Object
 * @param  WP_POST $b WP Post Type Object
 * @return bool Success/Failure
 */
function als_services_sort( $a, $b ) {
    
    $a_terms = wp_get_post_terms( $a->ID, 'als_service_type' );
    $b_terms = wp_get_post_terms( $b->ID, 'als_service_type' );
    
    foreach ( $a_terms as $term ) :
        if ( $term->slug == 'services' || $term->slug == 'products' ) continue;
        $a_term = $term->slug;
    endforeach;
    
    foreach ( $b_terms as $term ) :
        if ( $term->slug == 'services' || $term->slug == 'products' ) continue;
        $b_term = $term->slug;
    endforeach;
    
    return strcmp( $a_term, $b_term );
    
}

/**
 * usort Executives first ahead of everyone else
 * @param  WP_POST $a WP Post Type Object
 * @param  WP_POST $b WP Post Type Object
 * @return bool Success/Failure
 */
function als_execs_first( $a, $b ) {
     
    // Even though everything is in alphabetical order by last name already, we still need to return something for usort() in special cases
    $a_last = explode( ' ', $a->post_title );
    $a_last = $a_last[ count( $a_last ) - 1 ];
    
    $b_last = explode( ' ', $b->post_title );
    $b_last = $b_last[ count( $b_last ) - 1 ];
    
    if ( ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'president' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'vice' ) === false ) )
    &&
        ( ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'president' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'vice' ) === false ) ) ) : 
        return strcmp( $a_last, $b_last );
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'president' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'vice' ) === false ) ) : 
        return -1;
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'president' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'vice' ) === false ) ) : 
        return 1;
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'vice' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'vice' ) !== false ) ) : 
        return strcmp( $a_last, $b_last );
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'vice' ) !== false ) : 
        return -1;
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'vice' ) !== false ) : 
        return 1;
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'director' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'director' ) !== false ) ) : 
        return strcmp( $a_last, $b_last );
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'director' ) !== false ) : 
        return -1;
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'director' ) !== false ) : 
        return 1;
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'lead' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'lead' ) !== false ) ) : 
        return strcmp( $a_last, $b_last );
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'lead' ) !== false ) : 
        return -1;
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'lead' ) !== false ) : 
        return 1;
    endif;
    
    if ( ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'intern' ) !== false ) 
        && ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'intern' ) !== false ) ) : 
        return strcmp( $a_last, $b_last );
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $a->ID ) ), 'intern' ) !== false ) : 
        return 1;
    endif;
    
    if ( strpos( strtolower( get_field( 'staff_position_title', $b->ID ) ), 'intern' ) !== false ) : 
        return -1;
    endif;
    
    return strcmp( $a_last, $b_last );
    
}

/**
 * Sometimes it is nice to allow some HTML through the_excerpt(), WordPress
 * 
 */
remove_filter( 'get_the_excerpt', 'wp_trim_excerpt' );
add_filter( 'get_the_excerpt', 'als_excerpt_with_html' );

function als_excerpt_with_html( $text = '' ) {
    
	$raw_excerpt = $text;
    
	if ( '' == $text ) {
        
		$text = get_the_content( '' );
		$text = strip_shortcodes( $text );
		$text = str_replace( ']]>', ']]&gt;', $text );
		$excerpt_length = apply_filters( 'excerpt_length', 55 );
		$excerpt_more = apply_filters( 'excerpt_more', '...' );
		$text = html_trim_words( $text, $excerpt_length, $excerpt_more );
		$text = apply_filters( 'the_content', $text );
        
	}
    
	return apply_filters('wp_trim_excerpt', $text, $raw_excerpt);
    
}

function html_trim_words( $text, $num_words = 55, $more = null ) {
    
	if ( null === $more )
		$more = __( '&hellip;' );
	$original_text = $text;
    
    $text = preg_replace( '/\<(\/)?h[1-6]\>+/i', '', $text );
    
	/**
	 * Remove space characters between html
	 * tags to avoid not matching the pattern
	 */
	$text = preg_replace( '/(?<=>)[\s]*(?=<)/', '', $text );
    
	/**
	 * It doesn't catch any nested elements or Headers,
	 * only their parents as a whole
	 */
	$token_re = "/<[^>]+?\/>|<([a-z]+)[^>]*>.*?(?!<\\1)<\/\\1>|[^><\s]+/iu";
	preg_match_all($token_re, $text, $words);
	$words_array = $words[0];
    
	/**
	 * Need to count the number of real
	 * words so we get result as accurate
	 * as possible
	 */
	$count_array = array();
	$wordcount = 0;
    
	foreach ( $words[0] as $key => $value ) {
        
		$value = wp_strip_all_tags( $value );
		$words = preg_split('/[\s]/', $value, -1, PREG_SPLIT_NO_EMPTY);
		$wordcount += $count_array[$key] = count($words);
        
	}
    
	if ( $wordcount > $num_words ) {
        
		while ( $wordcount > $num_words ) {
			array_pop( $words_array );
			$wordcount -= array_pop( $count_array );
		}
        
		$text = implode( ' ', $words_array );
		$text = $text . $more;
        
	}
    else {
		$text = implode( ' ', $words_array );
	}
    
	return apply_filters( 'wp_trim_words', $text, $num_words, $more, $original_text );
    
}

function als_custom_breadcrumbs() {
 
    $delimiter = __( ' &raquo; ', THEME_ID ); // delimiter between miscellaneous things
    $home = __( 'Home', THEME_ID ); // text for the 'Home' link
    $show_current = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
    $before_current = '<li><span class="show-for-sr">Current: </span>'; // tag before the current crumb
    $before = '<li>'; // tag before every crumb
    $after = '</li>'; // tag after the current crumb

    if ( is_front_page() ) return false;

    global $post;
    $home_link = get_bloginfo( 'url' ); ?>
 
    <nav aria-label="You are here:" role="navigation">
        <ul class="breadcrumbs">
            <li><a href="<?php echo $home_link; ?>"><?php echo $home; ?></a></li>

            <?php

            if ( is_category() ) {
                
                $this_cat = get_category( get_query_var( 'cat' ), false );

                if ( $this_cat->parent != 0 ) echo get_category_parents( $this_cat->parent, TRUE, $delimiter );

                echo $before_current . sprintf( __( 'Archive by category "%s"', THEME_ID ), single_cat_title( '', false ) ) . $after;

            }
            elseif ( is_search() ) {

                echo $before_current . sprintf( __( 'Search results for "%s"', THEME_ID ), get_search_query() ) . $after;

            }
            elseif ( is_day() ) {

                echo $before . '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a>' . $after;
                echo $before . '<a href="' . get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) . '">' . get_the_time( 'F' ) . '</a>' . $after;
                echo $before_current . get_the_time( 'd' ) . $after;

            }
            elseif ( is_month() ) {

                echo $before . '<a href="' . get_year_link( get_the_time( 'Y' ) ) . '">' . get_the_time( 'Y' ) . '</a>' . $after;
                echo $before_current . get_the_time( 'F' ) . $after;

            }
            elseif ( is_year() ) {

                echo $before_current . get_the_time( 'Y' ) . $after;

            }
            elseif ( is_single() && ! is_attachment() ) {

                // Since we used Page Templates for most Archives (To allow a Content Editor), we need to make our own Breadcrumbs for each
                
                if ( get_post_type() == 'als_service' ) {
                    
                    $post_type = get_post_type_object( get_post_type() );
                    echo $before . '<a href="' . $home_link . '/customers/">Customers</a>' . $after;

                    if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;
                    
                }
                else if ( get_post_type() == 'als_staff' ) {
                    
                    $post_type = get_post_type_object( get_post_type() );
                    echo $before . '<a href="' . $home_link . '/staff/">' . $post_type->labels->name . '</a>' . $after;

                    if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;
                    
                }
                else if ( get_post_type() != 'post' ) {

                    $post_type = get_post_type_object( get_post_type() );
                    $slug = $post_type->rewrite;
                    echo $before . '<a href="' . $home_link . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>' . $after;

                    if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;

                }
                else {

                    $cat = get_the_category(); $cat = $cat[0];
                    $cats = get_category_parents( $cat, TRUE, $delimiter );

                    if ( $show_current == 0 ) $cats = preg_replace( "#^(.+)\s$delimiter\s$#", "$1", $cats );

                    echo $cats;

                    if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;

                }

            } 
            elseif ( ! is_single() && ! is_page() && get_post_type() != 'post' && ! is_404() ) {

                $post_type = get_post_type_object( get_post_type() );
                echo $before_current . $post_type->labels->singular_name . $after;

            }
            elseif ( is_attachment() ) {

                $parent = get_post( $post->post_parent );
                $cat = get_the_category( $parent->ID ); $cat = $cat[0];
                
                echo $before . get_category_parents( $cat, TRUE, $delimiter );
                echo '<a href="' . get_permalink( $parent ) . '">' . $parent->post_title . '</a>' . $after;

                if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;

            }
            elseif ( is_page() && ! $post->post_parent ) {

                if ( $show_current == 1) echo $before_current . get_the_title() . $after;

            }
            elseif ( is_page() && $post->post_parent ) {

                $parent_id  = $post->post_parent;
                $breadcrumbs = array();

                while ( $parent_id ) {
                    $page = get_page( $parent_id );
                    $breadcrumbs[] = $before . '<a href="' . get_permalink( $page->ID ) . '">' . get_the_title( $page->ID ) . '</a>' . $after;
                    $parent_id  = $page->post_parent;
                }
                $breadcrumbs = array_reverse( $breadcrumbs );

                for ( $i = 0; $i < count( $breadcrumbs ); $i++ ) {

                    echo $breadcrumbs[$i];
                    
                }

                if ( $show_current == 1 ) echo $before_current . get_the_title() . $after;

            }
            elseif ( is_tag() ) {
                echo $before_current . sprintf( __( 'Posts tagged "%s"', THEME_ID ), single_tag_title( '', false ) ) . $after;

            }
            elseif ( is_author() ) {

                global $author;
                $userdata = get_userdata( $author );
                echo $before_current . sprintf( __( 'Articles posted by %s', THEME_ID ), $userdata->display_name ) . $after;

            }
            elseif ( is_404() ) {
                echo $before_current . __( 'Error 404', THEME_ID ) . $after;
            }

            if ( get_query_var( 'paged' ) ) {
                
                echo $before;

                if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';

                echo sprintf( __( 'Page %d', THEME_ID ), get_query_var( 'paged' ) );

                if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
                
                echo $after;

            }

            ?>

        </ul>
</nav>

<?php
}