/**
 * WordPress dependencies
 */
import { store, getContext, getElement, withScope } from '@wordpress/interactivity';

const { state, actions, callbacks } = store( 'create-block', {
	state: {
		timer: null
	},
	actions: {
		reset: () => {
			const context = getContext();
			const { ref } = getElement();
			const { requestAnimationFrame } = window;

			const header = document.querySelector(context.offsetSelector);
			if(header) {
				context.offsetHeight = `${header.getBoundingClientRect().height}px`;
				context.offsetTop = header.getBoundingClientRect().height;
			}

			ref.dataset.ready = true;

			requestAnimationFrame(withScope(() => {
				context.max = ref.getBoundingClientRect().height - context.offsetTop;
				context.stopAt = ref.getBoundingClientRect().height + context.offsetTop
				callbacks.bodyScrolled();
			}));

		}
	},
	callbacks: {
		resize: (event) => {
			if(state.timer) clearTimeout(state.timer);
			state.timer = setTimeout(withScope(() => {
				actions.reset();
			}),30, event);
		},
		bodyScrolled: () => {

			const { scrollY } = window;
			const context = getContext();

			if(scrollY > context.stopAt) return;

			context.value = scrollY < context.offsetTop ? 0 : scrollY - context.offsetTop;

			const scrollProgress = (context.value * 100 / context.max).toFixed();
			context.progress = scrollProgress < 100 ? scrollProgress : 100;
			context.label = `${context.progress}%`;

		}
	},
} );
