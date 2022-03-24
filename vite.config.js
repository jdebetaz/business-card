import { resolve } from 'path'

const config = {
    emitManifest: true,
    cors: true,
    root: './src',
    build: {
        polyfillDynamicImport: false,
        assetsDir: '',
        manifest: true,
        outDir: '../dist/',
        emptyOutDir: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            },
            input: {
                "app": resolve(__dirname, 'src/js/app.js'),
            }
        },
    }
}

module.exports = config