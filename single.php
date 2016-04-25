<?php
/**
 * Posts template
 *
 * @since 0.1.0
 * @package automated-logistics-systems
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

the_post();
?>

<section id="post-<?php the_ID(); ?>" class="page-content">
    
    <div class="row">
        <div class="small-12 columns">
            <?php als_custom_breadcrumbs(); ?>
        </div>
    </div>
    
    <div class="row">
        <article <?php post_class( array( 'small-12', 'medium-9', 'columns' ) ); ?>>

            <?php if ( has_post_thumbnail() ) : ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <div class="thumbnail post-thumbnail-container alignleft">
                        <?php the_post_thumbnail( 'thumbnail' ); ?>
                    </div>
                </a>
            <?php endif; ?>

            <h1 class="post-title">
                <?php the_title(); ?>
            </h1>

            <div class="post-meta">
                <p><strong>Date: </strong><?php the_date(); ?></p>
            </div>

            <div class="post-copy">
                <?php the_content(); ?>
            </div>
            
            <?php if ( comments_open() ) : ?>
            
                <div class="post-comments">
                    <?php comments_template(); ?>
                </div>
            
            <?php endif; ?>

        </article>

        <div class="small-12 medium-3 columns sidebar">

            <?php dynamic_sidebar( 'main-sidebar' ); ?>

        </div>
    </div>
</section>

<?php
get_footer();