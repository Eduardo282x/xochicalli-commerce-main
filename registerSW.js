if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/xochicalli-commerce-main/sw.js', { scope: '/xochicalli-commerce-main/' })})}