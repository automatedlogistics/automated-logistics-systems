<?php

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

the_post();
?>

<section id="page-<?php the_ID(); ?>" <?php body_class( array( 'page-content', 'home-page' ) ); ?>>
    <div class="row">
        <div class="small-12 columns">

            <div class="page-copy">
                <?php the_content(); ?>
            </div>
            
        </div>

    </div>
</section>

<section id="home-timeline">
        
        <?php if ( have_rows( 'home_timeline' ) ) : 
    
            $index = 0; ?>
    
            <div class="row">
                <div class="timeline-dot"></div>
            </div>
    
            <?php while ( have_rows( 'home_timeline' ) ) : the_row(); ?>
    
                <div class="row">

                    <div class="small-12 medium-6 columns text-right">
                        
                        <?php if ( $index % 2 == 0 ) :
                        
                            if ( get_sub_field( 'image' ) ) :
                        
                                echo wp_get_attachment_image( get_sub_field( 'image' ), 'timeline-image' );
                        
                            endif;
                        
                        else : ?>
                        
                            <h3><?php echo get_sub_field( 'title' ); ?></h3>
                            <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                            <a class="secondary button" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>
                        
                        <?php endif; ?>
                    
                    </div>
                    
                    <div class="timeline-dot"></div>

                    <div class="small-12 medium-6 columns text-left">
                        
                        <?php if ( $index % 2 == 0 ) : ?>
                        
                            <h3><?php echo get_sub_field( 'title' ); ?></h3>
                            <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                            <a class="secondary button" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>
                        
                        <?php else :
                        
                            if ( get_sub_field( 'image' ) ) :
                        
                                echo wp_get_attachment_image( get_sub_field( 'image' ), 'timeline-image' );
                        
                            endif;
                        
                        endif; ?>
                    
                    </div>

                </div>
        
            <?php 
    
            $index++;
    
            endwhile; ?>
    
            <div class="row">
                <div class="timeline-dot"></div>
            </div>
        
        <?php endif; ?>

</section>

<?php
get_footer();