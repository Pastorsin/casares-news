self.addEventListener('push', event => {
	const data = event.data.json();
	const options = {
		body: "Haga click para leer la noticia.",
		data: data
	}

	event.waitUntil(self.registration.showNotification(data.title, options));
})

self.addEventListener('notificationclick', event => {
	let url = event.notification.data.url;

	clients.openWindow(url);
})