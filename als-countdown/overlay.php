<div id="countdown-overlay-previous" style="background-color: rgba(0, 87, 144, 0.9);"></div>

<div id="countdown-overlay" class="overlay" data-path-to="m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z">

    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 806" preserveAspectRatio="none">
        <path class="overlay-path" d="m 0,0 1439.999975,0 0,805.99999 0,-805.99999 z"/>
    </svg>

    <div class="overlay-contents">
        
        <div class="row">
        
            <div class="small-12 columns">
                <?php dynamic_sidebar( 'als-countdown-sidebar' ); ?>
            </div>
            
        </div>
        
        <div class="row">
            
            <div class="small-12 medium-6 columns">
                <?php dynamic_sidebar( 'als-countdown-left' ); ?>
            </div>
            
            <div class="small-12 medium-6 columns">
                <?php dynamic_sidebar( 'als-countdown-right' ); ?>
            </div>
        
        </div>

    </div>

</div>