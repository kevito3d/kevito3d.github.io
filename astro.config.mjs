import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://kevito3d.github.io',
    images: {
        service: passthroughImageService(),
 },
});
