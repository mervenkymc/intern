<?php

/**
 * Plugin Name: JotForm
 * Author: Merve
 * Version: 1.0.0
 *
 */

function jotform() {
    wp_enqueue_script(
        'my-super-unique-handle',
        plugin_dir_url(__FILE__) . 'jotform.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'jotform');
?>