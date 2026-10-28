/**
 * register-sw.js
 * Production-ready Ultraviolet Service Worker registration logic optimized for Vercel.
 */

// Global function window mapping to fix the ReferenceError crash across stock repositories
window.registerSW = async function() {
    if ('serviceWorker' in navigator) {
        const swUrl = '/uv.sw.js'; 
        const swScope = '/uv/';

        try {
            const registration = await navigator.serviceWorker.register(swUrl, {
                scope: __uv$config && __uv$config.prefix ? __uv$config.prefix : swScope
            });
            console.log('--- Ultraviolet Setup Status ---');
            console.log('Service Worker registered successfully via root proxy window hook!');
            console.log('Active Operational Scope:', registration.scope);
            return registration;
        } catch (error) {
            console.error('--- Ultraviolet Setup Error Alert ---');
            console.error('Service Worker registration routine failed:', error);
            throw error;
        }
    } else {
        console.error('Ultraviolet Error: Service Worker support is missing in this browser context.');
    }
};

// Automatically fire registration logic globally on startup thread to establish proxy channels
if ('serviceWorker' in navigator) {
    window.registerSW();
}
