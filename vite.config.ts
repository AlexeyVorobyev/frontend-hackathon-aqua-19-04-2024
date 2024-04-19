import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                clientsClaim: true,
                skipWaiting: true,
                globPatterns: ['**/*.{js,jsx,ts,tsx,css,html,ico,png,svg}'],
                disableDevLogs: true
            },
            injectRegister: 'auto',
            includeAssets: ['vite.svg', 'apple-touch-icon.png'],
            manifest: {
                name: 'Анапа 360',
                short_name: 'Анапа 360',
                description: 'Лучшее приложение для гостя Анапы!',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'apple-touch-icon.png',
                        sizes: '180x180',
                        type: 'image/png'
                    },
                ]
            }
        }),
    ],
    server: {
        port: 3000,
    },
    base: '/',
    optimizeDeps: {
        exclude: ['@changey/react-leaflet-markercluster'],
    },
})
