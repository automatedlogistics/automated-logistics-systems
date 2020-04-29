jQuery( function( $ ) {
    
    // Snap SVG doesn't seem to like me defining anything within a function. So we're going to do things nasty.
    var searchOverlay = $( '#search-overlay' )[0],
        videoOverlay = $( '#home-video-overlay' )[0],
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        //transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions },
        searchSVG = Snap( searchOverlay.querySelector( 'svg' ) ),
        searchPath = searchSVG.select( 'path' ),
        searchPathConfig = {
            from : searchPath.attr( 'd' ),
            to : searchOverlay.getAttribute( 'data-path-to' )
        };
    
    // Only exists on the Home Page
    if ( videoOverlay !== undefined ) {
        
        var videoSVG = Snap( videoOverlay.querySelector( 'svg' ) ), 
            videoPath = videoSVG.select( 'path' ),
            videoPathConfig = {
                from : videoPath.attr( 'd' ),
                to : videoOverlay.getAttribute( 'data-path-to' )
            };
        
    }

    function toggleSearchOverlay() {

        if ( $( searchOverlay ).hasClass( 'open' ) ) {
            $( searchOverlay ).removeClass( 'open' );
            $( searchOverlay ).addClass( 'close' );

            var onEndTransitionFn = function( event ) {
                $( searchOverlay ).hasClass( 'close' );
            };

            searchPath.animate( { 'path' : searchPathConfig.from }, 400, mina.linear, onEndTransitionFn );
        }
        else {
            $( searchOverlay ).addClass( 'open' );
            $( searchOverlay ).removeClass( 'close' );
            searchPath.animate( { 'path' : searchPathConfig.to }, 400, mina.linear );
            
            $( searchOverlay ).find( '.search-field' ).focus();
        }

    }
    
    function toggleVideoOverlay() {

        if ( $( videoOverlay ).hasClass( 'open' ) ) {
            $( videoOverlay ).removeClass( 'open' );
            $( videoOverlay ).addClass( 'close' );

            var onEndTransitionFn = function( event ) {
                $( videoOverlay ).hasClass( 'close' );
            };
            
            Foundation.Motion.animateIn( $( '#mini-nav .row' ), 'fade-in' );
            $( '#mini-nav' ).addClass( 'mui-enter-active' );

            videoPath.animate( { 'path' : videoPathConfig.from }, 400, mina.linear, onEndTransitionFn );
        }
        else {
            $( videoOverlay ).addClass( 'open' );
            $( videoOverlay ).removeClass( 'close' );

            $( '#mini-nav' ).css( 'height', $( '#mini-nav' )[0].clientHeight + 'px' );
            Foundation.Motion.animateOut( $( '#mini-nav .row' ), 'fade-out' );
            $( '#mini-nav' ).addClass( 'mui-enter-active' );
            
            videoPath.animate( { 'path' : videoPathConfig.to }, 400, mina.linear );
            
            $( videoOverlay ).find( '.video-field' ).focus();
        }

    }
    
    $( 'a#trigger-search-overlay' ).on( 'click', function( event ) {
        event.preventDefault();
        toggleSearchOverlay();
    } );
    
    $( 'section#home-hero a.button' ).on( 'click', function( event ) {
        event.preventDefault();
        toggleVideoOverlay();
    } );
    
    $( 'div.overlay .overlay-close' ).on( 'click', function( event ) {
        event.preventDefault();
        
        if ( $( searchOverlay ).hasClass( 'open' ) ) {
            toggleSearchOverlay();
        }

        if ( $( videoOverlay ).hasClass( 'open' ) ) {
            toggleVideoOverlay();
        }
        
    } );
    
    $( document ).on( 'keyup', function( event ) {
        if ( event.keyCode == 27 ) { 
            
            if ( $( searchOverlay ).hasClass( 'open' ) ) {
                toggleSearchOverlay();
            }
            
            if ( $( videoOverlay ).hasClass( 'open' ) ) {
                toggleVideoOverlay();
            }
            
        }
    } );
    
} );