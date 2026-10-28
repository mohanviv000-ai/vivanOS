/**
 * register-sw.js
 * Production-ready Ultraviolet Service Worker registration logic optimized for Vercel.
 */

// Intercept execution and check if Ultraviolet configuration objects are loaded into the global scope
if ('serviceWorker' in navigator) {
    // Falls back to standard stock defaults if uv.config.js is lagging during initial window handshake
    const swUrl = '/uv.sw.js'; 
    const swScope = '/uv/';

    // Register the Service Worker mapping it directly to the root fallback routing paths
    navigator.serviceWorker.register(swUrl, {
        scope: __uv$config && __uv$config.prefix ? __uv$config.prefix : swScope
    })
    .then((registration) => {
        console.log('--- Ultraviolet Setup Status ---');
        console.log('Service Worker registered successfully!');
        console.log('Active Operational Scope:', registration.scope);
    })
    .catch((error) => {
        console.error('--- Ultraviolet Setup Error Alert ---');
        console.error('Service Worker registration routine failed:', error);
        console.error('Diagnostic Note: Ensure your vercel.json file rewrite parameters match your file paths.');
    });
} else {
    console.error('Ultraviolet Error: Critical registration failure. This browser engine completely lacks Service Worker support.');
}
