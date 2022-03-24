import { resolve } from 'path'

const config = {
    emitManifest: true,
    cors: true,
    root: './src',
    build: {
        polyfillDynamicImport: false,
        assetsDir: '',
        manifest: false,
        outDir: '../dist/',
        rollupOptions: {
            output: {
                manualChunks: undefined, // Désactive la séparation du vendor
                assetFileNames: "[name].[ext]",
                entryFileNames: "[name].js"
            },
            input: {
                app: resolve(__dirname, 'src/js/app.js'),
            }
        },
    }
}

module.exports = config