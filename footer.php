<?php
/**
 * The theme's footer file that appears on EVERY page.
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}
?>

<?php // #site-content ?>
</section>

<footer id="site-footer">
    
    <div class="footer-widgets row">

        <?php
        $footer_columns = get_theme_mod( 'als_footer_columns', 4 );
        for ( $index = 0; $index < $footer_columns; $index++ ) {
            ?>

                <div class = "small-12 medium-<?php echo ( 12 / $footer_columns ); ?> columns">
                    <?php dynamic_sidebar( 'footer-' . ( $index + 1 ) ); ?>
                </div>

            <?php
        }
        ?>

    </div>
    
    <div class="row footer-connect text-center">
        
        <div class="small-12 columns">
            
            <?php echo sprintf( __( 'Copyright &copy; %d | All Rights Reserved | %s, inc.', THEME_ID ), date( 'Y' ), get_bloginfo( 'name' ) ); ?>
        
        </div>
        
        <div class="small-12 columns">
        
            <?php 
                $social_accounts = array(
                    'als_facebook' => array( 
                        'label' => 'Facebook',
                        'icon' => 'facebook-square',
                    ),
                    'als_twitter' => array( 
                        'label' => 'Twitter',
                        'icon' => 'twitter-square',
                    ),
                    'als_pinterest' => array( 
                        'label' => 'Pinterest',
                        'icon' => 'pinterest-square',
                    ),
                    'als_linkedin' => array( 
                        'label' => 'LinkedIn',
                        'icon' => 'linkedin-square',
                    ),
                    'als_instagram' => array( 
                        'label' => 'Instagram',
                        'icon' => 'instagram',
                    ),
                );

            foreach ( $social_accounts as $key => $social ) :

                if ( get_theme_mod( $key, '' ) !== '' ) : ?>

                    <a class="social-icon" href="<?php echo get_theme_mod( $key, '' ); ?>" target="_blank" title="<?php echo sprintf( __( 'Connect with us on %s', THEME_ID ), $social['label'] ); ?>">
                        <span class="fa fa-<?php echo $social['icon']; ?>"></span>
                    </a>

                <?php endif;

            endforeach;

            if ( get_theme_mod( 'als_rss_show', false ) === true ) : ?>

                <a class="social-icon" href="<?php bloginfo( 'rss2_url' ); ?>" title="<?php _e( 'Get our RSS Feed', THEME_ID ); ?>">
                    <span class="fa fa-rss-square"></span>
                </a>

            <?php endif; ?>

        </div>
        
    </div>

</footer>

</div>

<?php // #wrapper ?>
</div>

<?php wp_footer(); ?>

</body>
</html>