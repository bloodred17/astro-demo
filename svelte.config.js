import { vitePreprocess } from '@astrojs/svelte';

export default {
	emitCss: true,
	compilerOptions: { dev: true, hydratable: true },
	preprocess: vitePreprocess(),
};
