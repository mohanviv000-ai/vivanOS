/**
 * register-sw.js
 * Optimized Ultraviolet Service Worker registration logic.
 */

// Global function window mapping to fix the ReferenceError crash across stock repositories
window.registerSW = async function() {
    if ('serviceWorker' in navigator) {
        const swUrl = '/uv.sw.js'; 
        const swScope = '/uv/';

        // Check if the configuration object has fully initialized in memory yet
        const activeScope = (typeof __uv$config !== 'undefined' && __uv$config.prefix) 
            ? __uv$config.prefix 
            : swScope;

        try {
            const registration = await navigator.serviceWorker.register(swUrl, {
                scope: activeScope
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

// Fire registration safety loop check
if ('serviceWorker' in navigator) {
    // If the config isn't ready yet, wait for the window to load completely before running
    if (typeof __uv$config === 'undefined') {
        window.addEventListener('load', () => {
            window.registerSW();
        });
    } else {
        window.registerSW();
    }
}
