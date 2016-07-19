<?php
/**
 * Post archive page.
 *
 * @since 0.1.0
 * @package automated-logistics-systems
 *
 * @global WP_Query $wp_query
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

global $wp_query;
$term = $wp_query->get_queried_object();

?>

<section id="post-index" class="page-content">
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">

        <?php
        if ( have_posts() ) : ?>
        
            <div class="small-12 medium-9 columns">
                <?php
        
                if ( is_tax() || is_category() ) : ?>

                    <h1><?php echo get_post_type_object( get_post_type() )->labels->name; ?> in the <?php echo $term->name; ?> Category</h1>

                <?php 
                endif;

                while ( have_posts() ) :
                    the_post();
                    ?>
                    <article <?php post_class(); ?>>

                        <?php get_template_part( 'partials/post', 'loop-single' ); ?>

                    </article>
                    <?php
                endwhile;
                ?>
                
                <div class="pagination">
                    <?php echo paginate_links( array( 
                        'current' => get_query_var( 'paged' ),
                    ) ); ?>
                </div>
                
            </div>
        <?php
        else:
        ?>

        <div class="small-12 medium-9 columns">
            Nothing found.
        </div>

        <?php endif; ?>
        
        <div class="small-12 medium-3 columns sidebar">
            
            <?php dynamic_sidebar( 'main-sidebar' ); ?>
            
        </div>
        
    </div>
</section>

<?php
get_footer();