<?php

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
    die;
}

get_header();

the_post();

if ( get_field( 'home_hero_image' ) ) :
    $hero_image = wp_get_attachment_image_src( get_field( 'home_hero_image' ), 'hero-image' );
?>

    <section id="home-hero" class="hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
        <div class="row collapse">
            <div class="small-12 medium-6 medium-offset-6 columns text-center wow slide-in-right mui-enter">
                <div class="hero-copy">
                    <h1><?php the_field( 'home_hero_header' ); ?></h1>
                </div>
                <a class="secondary large button with-arc" href="<?php the_field( 'home_hero_button_link' ); ?>"><?php the_field( 'home_hero_button_text' ); ?></a>
            </div>
        </div>
    </section>

<?php endif; ?>

<section id="mini-nav">
    
    <div class="row">
        
        <div class="small-12 medium-6 medium-centered columns">
            <div class="row">
                
                <div class="small-12 medium-4 columns text-center wow scale-in-up mui-enter">
                    <a href="/shippers">
                        <span class="als-icon-stack als-icon-4x">
                            <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                            <span class="als-icon als-icon-stack als-icon-inverse als-icon-shippers"></span>
                        </span><br />
                        <h6>Shippers</h6>
                    </a>
                </div>
                
                <div class="small-12 medium-4 columns text-center wow scale-in-up mui-enter">
                    <a href="/carriers">
                        <span class="als-icon-stack als-icon-4x">
                            <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                            <span class="als-icon als-icon-stack als-icon-inverse als-icon-carriers"></span>
                        </span><br />
                        <h6>Carriers</h6>
                    </a>
                </div>
                
                <div class="small-12 medium-4 columns text-center wow scale-in-up mui-enter">
                    <a href="/careers">
                        <span class="als-icon-stack als-icon-4x">
                            <span class="als-icon als-icon-stack-2x als-icon-circle"></span>
                            <span class="als-icon als-icon-stack als-icon-inverse als-icon-careers"></span>
                        </span><br />
                        <h6>Careers</h6>
                    </a>
                </div>
                
            </div>
        </div>
        
    </div>
    
</section>

<section id="home-timeline">
        
        <?php if ( have_rows( 'home_timeline' ) ) : 
    
            $index = 0; ?>
    
            <div class="container">
    
                <div class="row">
                    <div class="timeline-dot"></div>
                </div>

                <?php while ( have_rows( 'home_timeline' ) ) : the_row(); ?>

                    <?php // If we want to use WOW.js with Motion-UI Transitions, we need to apply the Enter/Leave Class to the element itself ?>
                    <div class="row wow fade-in mui-enter">

                        <div class="small-12 medium-6 columns text-right">

                            <?php if ( $index % 2 == 0 ) :

                                if ( get_sub_field( 'image' ) ) :

                                    echo wp_get_attachment_image( get_sub_field( 'image' ), 'timeline-image' );

                                endif;

                            else : ?>

                                <h3><?php echo get_sub_field( 'title' ); ?></h3>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                                <a class="secondary tiny button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>

                            <?php endif; ?>

                        </div>

                        <div class="timeline-dot"></div>

                        <div class="small-12 medium-6 columns text-left">

                            <?php if ( $index % 2 == 0 ) : ?>

                                <h3><?php echo get_sub_field( 'title' ); ?></h3>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                                <a class="secondary tiny button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>

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
                
            </div>
        
        <?php endif; ?>

</section>

<?php if ( have_rows( 'home_row_sections' ) ) : 
    
    $index = 0;

    // Create styles dynamically
    $styles = '';
    
    while ( have_rows( 'home_row_sections' ) ) : the_row();

        // Don't show sections without Hero Images.
        if ( ( get_sub_field( 'hero_image' ) && ( get_sub_field( 'hero_image' ) !== '' ) ) ) :
            $hero_image = wp_get_attachment_image_src( get_sub_field( 'hero_image' ), 'hero-image' );

            $button_size = get_sub_field( 'button_size' );
            if ( $button_size == 'default' ) $button_size = '';

            $styles .= "#home-footer-hero-$index { color:";
            $styles .= get_sub_field( 'text_color' ) . '; }';

            $styles .= "#home-footer-hero-$index h1, #home-footer-hero-$index h2, #home-footer-hero-$index h3, #home-footer-hero-$index h4, #home-footer-hero-$index h5, #home-footer-hero-$index h6 { color:";
            $styles .= get_sub_field( 'header_color' ) . '; }';

        ?>

            <section id="home-footer-hero-<?php echo $index; ?>" class="home-footer-hero hero-image" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
                <div class="row collapse">
                    <div class="small-12 medium-6 <?php echo ( ( $index % 2 == 1 ) ? 'medium-offset-6 wow slide-in-right mui-enter ' : 'wow slide-in-left mui-enter ' ); ?>columns text-center">
                        <div class="hero-copy">
                            <?php echo apply_filters( 'the_content', get_sub_field( 'hero_text' ) ); ?>
                        </div>
                        <a class="secondary <?php echo ( ( $button_size !== '' ) ? $button_size . ' ' : '' ); ?>button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo html_entity_decode( get_sub_field( 'button_text' ) ); ?></a>
                    </div>
                </div>
            </section>

        <?php 
          
        // Only increment if the section was shown
        $index++;
            
        endif;

    endwhile; ?>

    <style type="text/css">
        <?php echo $styles; ?>
    </style>

<?php endif;
            
get_footer();