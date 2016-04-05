jQuery( function( $ ) {
    
    var overlay = document.querySelector( 'div.overlay' ),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };
        s = Snap( overlay.querySelector( 'svg' ) ), 
        path = s.select( 'path' ),
        pathConfig = {
            from : path.attr( 'd' ),
            to : overlay.getAttribute( 'data-path-to' )
        };

    function toggleOverlay() {

        if ( $( overlay ).hasClass( 'open' ) ) {
            $( overlay ).removeClass( 'open' );
            $( overlay ).addClass( 'close' );

            var onEndTransitionFn = function( event ) {
                $( overlay ).hasClass( 'close' );
            };

            path.animate( { 'path' : pathConfig.from }, 400, mina.linear, onEndTransitionFn );
        }
        else {
            $( overlay ).addClass( 'open' );
            $( overlay ).removeClass( 'close' );
            path.animate( { 'path' : pathConfig.to }, 400, mina.linear );
        }

    }
    
    $( 'a#trigger-search-overlay' ).on( 'click', function( event ) {
        event.preventDefault();
        toggleOverlay();
    } );
    
    $( 'div.overlay .overlay-close' ).on( 'click', function( event ) {
        event.preventDefault();
        toggleOverlay();
    } );
    
} );