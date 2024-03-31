<?php
/**
 * Plugin Name:       Design System Scrolling Progress
 * Description:       An interactive block with the Interactivity API
 * Version:           0.1.2
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Ruben Madila
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       design-system-scrolling-progress
 * Github Plugin URI: madila/design-system-scrolling-progress
 * Primary Branch:    main
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function design_system_scrolling_progress_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'design_system_scrolling_progress_block_init' );
