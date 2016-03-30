<?php
/**
 * Shows a single Testimonial within a Page Template
 *
 * @since   0.1.0
 * @package automated-logistics-systems
 *
 * @global WP_Query $wp_query
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {

    die;

}

?>

<div class="als-testimonial">
    
    <?php if ( has_post_thumbnail() ) : ?>
    <div class="page-image">
        <?php the_post_thumbnail( 'full' ); ?>
    </div>
    <?php endif; ?>

    <div class="testimonial-content">
        
        <?php // Wrap quote in quotation marks. There's pretty much no better way to do this.
        
        $quote = get_the_content();
        $quote = '"' . $quote . '"';
        $quote = apply_filters( 'the_content', $quote );
        
        ?>

        <blockquote class="testimonial-quote"><?php echo $quote; ?></blockquote>

        <strong class="testimonial-name"><?php the_title();?></strong><br/>
        
        <?php if ( get_field( 'employee_testimonial' ) !== '' ) : 
            $hired_date = new DateTime( get_field( 'employee_hired_date' ) );
            $hired_date = $hired_date->format( 'F, Y' );
        ?>
            <span class="testimonial-title"><?php the_field( 'employee_title' ); ?></span><br/ >
            <span class="testimonial-hired-date"><?php echo sprintf( __( 'Hired: %s', THEME_ID ), $hired_date ); ?></span>
        <?php else : ?>
            <span class="testimonial-company"><?php the_field( 'company_and_title' ); ?></span><br/ >
            <span class="testimonial-location"><?php the_field( 'company_location' ); ?></span>
        <?php endif; ?>

    </div>

</div>