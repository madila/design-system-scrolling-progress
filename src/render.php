<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>

<section
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( array( 'progress' => 0, 'stopAt' => 99999, 'value' => 0, 'max' => 0 , 'offsetHeight' => 0, 'offsetTop' => 0, 'offsetSelector' => '.is-position-sticky:has(header)') ); ?>
    data-wp-init--start="actions.reset"
    data-wp-style----top="context.offsetHeight"
    data-wp-on-document--scroll="callbacks.bodyScrolled"
    data-wp-on-document--scrollend="callbacks.lock"
    data-wp-on-window--resize="callbacks.resize"
    data-wp-on--force-resize="actions.reset"
>
	<progress
		data-wp-on--click="actions.toggle"
        data-wp-bind--value="context.value"
        data-wp-bind--max="context.max"
	>
	</progress>
    <label for="#<?php echo $block->id; ?>">
        <span class="progress__label">Reading progress: <span class="progress__value" data-wp-text="context.label"></span></span>
    </label>
    <?php echo $content; ?>
</section>
