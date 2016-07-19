( function( $ ) {
    
    if ( ( $( '.video-popover-container' ).length > 0 ) && ( $( '.video-popover' ).length > 0 ) ) {
        
        $( '.video-popover-container' ).on( 'click', function () {
            
            $( '.video-popover' ).foundation( 'open' );
            
        } );
        
    }
    
} )( jQuery );