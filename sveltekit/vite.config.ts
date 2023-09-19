import {
	sveltekit
} from '@sveltejs/kit/vite';
import {
	defineConfig
} from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: ['C:/Users/milto/Projects/node_modules/pdfjs-dist/build/pdf.worker.js']
		}
	}
});