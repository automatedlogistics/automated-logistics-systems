( function( $ ) {
    
    if ( $( '.wp-list-table .type-als_staff' ).length > 0 ) {

        // we create a copy of the WP inline edit post function
        var $wp_inline_edit = inlineEditPost.edit;

        // and then we overwrite the function with our own code
        inlineEditPost.edit = function( id ) {

            // "call" the original WP edit function
            // we don't want to leave WordPress hanging
            $wp_inline_edit.apply( this, arguments );

            // now we take care of our business

            // get the post ID
            var $post_id = 0;
            if ( typeof( id ) == 'object' ) {
                $post_id = parseInt( this.getId( id ) );
            }

            if ( $post_id > 0 ) {

                // define the edit row
                var $edit_row = $( '#edit-' + $post_id );
                var $post_row = $( '#post-' + $post_id );

                // get the data from the Displayed Column
                var $department = $( '.column-department', $post_row ).text().toLowerCase(); // This works since our Keys and Values are basically identical
                var $position_title = $( '.column-position_title', $post_row ).text();

                // populate the data in the Quick Edit screen
                if ( $( ':input[name="department"][value="' + $department + '"]', $edit_row ).length > 0 ) {
                    $( ':input[name="department"][value="' + $department + '"]', $edit_row ).prop( 'checked', true );
                }
                
                if ( $( ':input[name="position_title"]', $edit_row ).length > 0 ) {
                    $( ':input[name="position_title"]', $edit_row ).val( $position_title );
                }

            }

        };
        
        $( '#bulk_edit' ).live( 'click', function() {
            
            // define the bulk edit row
            var $bulk_row = $( '#bulk-edit' );

            // get the selected post ids that are being edited
            var $post_ids = new Array();
            $bulk_row.find( '#bulk-titles' ).children().each( function() {
                
                $post_ids.push( $( this ).attr( 'id' ).replace( /^(ttle)/i, '' ) );
                
            } );
            
            // get the data
            var $department = $bulk_row.find( 'input[name="department"]' ).val();
            var $position_title = $bulk_row.find( 'input[name="position_title"]' ).val();

            // save the data
            $.ajax( {
                url: ajaxurl, // this is a variable that WordPress has already defined for us
                type: 'POST',
                async: false,
                cache: false,
                data: {
                    action: 'save_bulk_edit_book', // this is the name of our WP AJAX function that we'll set up next
                    post_ids: $post_ids, // and these are the 2 parameters we're passing to our function
                    department: $department,
                    position_title: $position_title
                }

            } );
            
        } );

    }

} )( jQuery );