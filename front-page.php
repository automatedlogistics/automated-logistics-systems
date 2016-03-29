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

    <section id="home-hero" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
        <div class="row collapse">
            <div class="small-12 medium-6 medium-offset-6 columns text-center">
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
                
                <div class="small-12 medium-4 columns text-center">
                    <a href="/shippers">
                        <span class="fa-stack fa-4x">
                            <span class="fa fa-stack-2x fa-circle"></span>
                            <span class="fa fa-stack fa-inverse fa-cube"></span>
                        </span><br />
                        <h6>Shippers</h6>
                    </a>
                </div>
                
                <div class="small-12 medium-4 columns text-center">
                    <a href="/carriers">
                        <span class="fa-stack fa-4x">
                            <span class="fa fa-stack-2x fa-circle"></span>
                            <span class="fa fa-stack fa-inverse fa-circle-o"></span>
                        </span><br />
                        <h6>Carriers</h6>
                    </a>
                </div>
                
                <div class="small-12 medium-4 columns text-center">
                    <a href="/careers">
                        <span class="fa-stack fa-4x">
                            <span class="fa fa-stack-2x fa-circle"></span>
                            <span class="fa fa-stack fa-inverse fa-suitcase"></span>
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

                    <div class="row">

                        <div class="small-12 medium-6 columns text-right">

                            <?php if ( $index % 2 == 0 ) :

                                if ( get_sub_field( 'image' ) ) :

                                    echo wp_get_attachment_image( get_sub_field( 'image' ), 'timeline-image' );

                                endif;

                            else : ?>

                                <h3><?php echo get_sub_field( 'title' ); ?></h3>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                                <a class="secondary button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>

                            <?php endif; ?>

                        </div>

                        <div class="timeline-dot"></div>

                        <div class="small-12 medium-6 columns text-left">

                            <?php if ( $index % 2 == 0 ) : ?>

                                <h3><?php echo get_sub_field( 'title' ); ?></h3>
                                <?php echo apply_filters( 'the_content', get_sub_field( 'main_text' ) ); ?>
                                <a class="secondary button with-arc" href="<?php echo get_sub_field( 'button_link' ); ?>"><?php echo get_sub_field( 'button_text' ); ?></a>

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

<?php if ( get_field( 'home_footer_hero_image' ) ) :
    $hero_image = wp_get_attachment_image_src( get_field( 'home_footer_hero_image' ), 'hero-image' );
?>

    <section id="home-footer-hero" style="background-image: url( '<?php echo $hero_image[0];?>' ); height: <?php echo $hero_image[2]; ?>px;">
        <div class="row collapse">
            <div class="small-12 medium-6 columns text-center">
                <div class="hero-copy">
                    <?php echo apply_filters( 'the_content', get_field( 'home_footer_hero_text' ) ); ?>
                </div>
                <a class="secondary large button with-arc" href="<?php the_field( 'home_footer_hero_button_link' ); ?>"><?php echo html_entity_decode( get_field( 'home_footer_hero_button_text' ) ); ?></a>
            </div>
        </div>
    </section>

<?php endif; ?>

<?php
get_footer();