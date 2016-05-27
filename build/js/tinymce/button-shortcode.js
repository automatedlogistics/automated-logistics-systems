jQuery( function( $ ) {

    $( document ).ready( function() {

        var good = '';

        $( document ).on( 'keyup', '.mce-numbers-only', function( event ) {

            var input = $( this );

            if ( event.which !== 8 ) { // If not backspace
                var matchedPosition = input.val().search( /[a-z@#!$%,-^&*()_+|~=`{}\[\]:";'<>?.\/\\]/i );
                if( matchedPosition === -1 ) {
                    input.val( good );
                }
                else{
                    good = input.val();
                }

            }

            if ( input.val() === '0' ) {
                input.val( '' );
            }

        } );

        $( document ).on( 'keyup', '.mce-letters-only', function( event ) {
            var input = $( this );
            var matchedPosition;

            if ( event.which !== 8 ) { // If not backspace

                if ( input.hasClass( 'mce-no-spaces' ) ) {
                    matchedPosition = input.val().search( /^[a-z]*$/i );
                }
                else{
                    matchedPosition = input.val().search( /^[a-z ]*$/i );
                }

                if( matchedPosition === -1 ) {
                    input.val( good );
                }
                else{
                    good = input.val();
                }

            }

        });

        tinymce.PluginManager.add( 'als_button_shortcode_script', function( editor, url ) {
            editor.addButton( 'als_button_shortcode', {
                text: 'Add Button',
                icon: false,
                onclick: function() {
                    editor.windowManager.open( {
                        title: 'Add Button',
                        body: [
                            {
                                type: 'textbox',
                                name: 'text',
                                label: 'Button Text'
                            },
                            {
                                type: 'textbox',
                                name: 'url',
                                label: 'Button Link URL'
                            },
                            {
                                type: 'listbox',
                                name: 'color',
                                label: 'Color',
                                values: [
                                    { text: 'ALS Blue', value: 'primary' },
                                    { text: 'ALS Yellow', value: 'secondary' },
                                    { text: 'ALS Red', value: 'tertiary' },
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'size',
                                label: 'Size',
                                values: [
                                    { text: 'Tiny', value: 'tiny' },
                                    { text: 'Small', value: 'small' },
                                    { text: 'Medium', value: 'medium' },
                                    { text: 'Large', value: 'large' },
                                ],
                                value: 'small',
                            },
                            {
                                type: 'checkbox',
                                name: 'withArc',
                                label: 'With the "Swoosh"?',
                                checked: true,
                            },
                            {
                                type: 'checkbox',
                                name: 'expand',
                                label: 'Full Width?',
                            },
                            {
                                type: 'checkbox',
                                name: 'newTab',
                                label: 'Open Link in a New Tab?',
                            },
                        ],
                        onsubmit: function( e ) {
                            editor.insertContent( '[als_button' + 
                                                     ( e.data.url !== undefined ? ' url="' + e.data.url + '"' : '' ) + 
                                                     ( e.data.color !== undefined ? ' color="' + e.data.color + '"' : '' ) + 
                                                     ( e.data.size !== undefined ? ' size="' + e.data.size + '"' : '' ) + 
                                                     ( e.data.withArc !== undefined ? ' with_arc="' + e.data.withArc + '"' : '' ) + 
                                                     ( e.data.expand !== undefined ? ' expand="' + e.data.expand + '"' : '' ) + 
                                                     ( e.data.newTab !== undefined ? ' new_tab="' + e.data.newTab + '"' : '' ) + 
                                                 ']' + 
                                                     ( e.data.text !== undefined ? e.data.text : '' ) + 
                                                 '[/als_button]' );
                        }

                    } ); // Editor

                } // onclick

            } ); // addButton

        } ); // Plugin Manager

    } ); // Document Ready

} );