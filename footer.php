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
    
    <div class = "row">

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

</footer>

</div>

<?php // #wrapper ?>
</div>

<?php wp_footer(); ?>

</body>
</html>