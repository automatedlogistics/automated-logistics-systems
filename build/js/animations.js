jQuery( function( $ ) {

    $( document ).ready( function() {
        
        var wow = new WOW( {
            
            boxClass: 'wow',
            animateClass: 'is-animating',
            callback: function( box ) {
            
                // If we want to use WOW.js with Motion-UI Transitions, we need to apply the Enter/Leave Class to the element itself
                if ( $( box ).hasClass( 'mui-enter' ) ) {
                    $( box ).removeClass( 'is-animating' ).addClass( 'mui-enter-active' );
                }
                else if ( $( box ).hasClass( 'mui-leave' ) ) {
                    $( box ).removeClass( 'is-animating' ).addClass( 'mui-leave-active' );
                }
                
            
            }
            
        } );

        wow.init();

    } );

} );