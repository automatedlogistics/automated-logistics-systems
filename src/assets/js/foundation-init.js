import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

//import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

jQuery( function( $ ) {

    $( document ).foundation(); 
    
    $( document ).ready( function() {
        
        $( 'a#trigger-search-overlay' ).on( 'click', function( event ) {
            
            $( '.off-canvas' ).foundation( 'close' ); // Close Off-Canvas to Search
            
        } );
        
        if ( $( '#employment-accordion' ).length > 0 ) {
        
            // We're only going one-level deep, so any interior <ul>s are within the Post Content
            $( '#employment-accordion > li' ).each( function( index, item ) {

                $( item ).find( 'ul.nested > li > p + ul' )
                    .css( 'display', 'block' )
                    .attr( 'aria-hidden', 'false' )
                    .removeClass( 'submenu is-accordion-submenu' )
                    .removeAttr( 'data-submenu' );
                
                $( item ).find( 'ul.nested > li > a' ).unbind( 'click' );

            } );
            
        }
        
    } );

} );