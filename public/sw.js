self.addEventListener('push', function (event) {
    const data = event.data?.json();
    console.log('Push event data:', data);
    // const data = { title: 'Test', body: 'Test body', icon: '/logo192.png' };

    const title = data?.title || 'Notification';
    const options = {
        body: data?.body || 'Hello, world!',
        icon: data?.icon || '/logo192.png',
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});