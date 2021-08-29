import { vapidKey } from './vapid.js';

async function currentSubscription() {
	const serviceWorker = await navigator.serviceWorker.ready;
	const subscription = await serviceWorker.pushManager.getSubscription();

	return subscription;
}

export async function alreadyExist() {
	const existedSuscription = await currentSubscription();
	return existedSuscription !== null;
}

export async function subscribeUser() {
	const serviceWorker = await navigator.serviceWorker.ready;
	const pushManager = serviceWorker.pushManager;

	const payload = {
		applicationServerKey: vapidKey(),
		userVisibleOnly: true,
	}

	const subscription = await pushManager.subscribe(payload);

	return subscription;
}