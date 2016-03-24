jQuery( document ).ready( function( $ ) {
    
    $( 'textarea.text-editor-custom-control' ).each( function( index, element ) {
        
        var controlID = $( element ).attr( 'name' );
        
        $( element ).attr( 'data-customize-setting-link', controlID );
        
        setTimeout( function() {

            var editor2 = tinyMCE.get( controlID );

            if ( editor2 ) {

                editor2.on( 'change', function() {
                    
                    // Update HTML view textarea (that is the one used to send the data to server).
                    editor2.save();

                    $( element ).trigger( 'change' );
                    
                } );

            }

        }, 1000 );
        
    } );
    
} );