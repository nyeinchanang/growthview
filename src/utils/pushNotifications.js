function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export async function subscribeToPush(publicKey, token) {
    // console.log(urlBase64ToUint8Array(publicKey));
    navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
            return navigator.serviceWorker.ready;
        })
        .then((registration) => {
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicKey),
            });
        })
        .then(async (subscription) => {
            console.log('Push Subscription:', subscription);
            // send subscription to Laravel backend
            await fetch('http://127.0.0.1:8000/api/save-subscription', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscription),
            });
        })
        .catch((error) => {
            console.error('Push subscription failed:', error);
        });
    // const registration = await navigator.serviceWorker.register('/sw.js');
    // console.log('Service Worker registered:', registration);
    // if (!registration.pushManager) {
    //   console.error('Push manager not available');
    //   return;
    // }

    // const subscription = await registration.pushManager.subscribe({
    //   userVisibleOnly: true,
    //   applicationServerKey: urlBase64ToUint8Array(publicKey),
    // });
    // console.log('Push subscription:', subscription);

    // await fetch('http://127.0.0.1:8000/api/save-subscription', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(subscription),
    // });
}