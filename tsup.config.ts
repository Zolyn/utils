import { defineConfig } from 'tsup';

const isProd = process.env['NODE_ENV'] === 'production';

export default defineConfig({
    minify: true,
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    clean: true,
    dts: isProd,
    watch: !isProd && 'src',
});
