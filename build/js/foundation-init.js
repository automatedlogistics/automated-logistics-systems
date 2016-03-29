jQuery( function( $ ) {

    $( document ).foundation(); 
    
    $( document ).ready( function() {
        
        // We're only going one-level deep, so any interior <ul>s are within the Post Content
        $( '#employment-accordion > li' ).each( function( index, item ) {
            
            $( item ).find( 'ul.nested > li > p + ul' )
                .css( 'display', 'block' )
                .attr( 'aria-hidden', 'false' )
                .removeClass( 'submenu is-accordion-submenu' )
                .removeAttr( 'data-submenu' );
            
        } );
        
        // Automatically open the first one
        $( '#employment-accordion' ).foundation( 'down', $( '#employment-accordion > li:first-of-type > :not( a )' ) );
        
    } );

} );