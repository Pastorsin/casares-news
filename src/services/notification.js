import Bowser from "bowser";
import api from 'services/index'

export async function postSubscription(subscription) {
    const payload = {
        'browser': browserName().toUpperCase(),
        'p256dh': encrypt(subscription.getKey('p256dh')),
        'auth': encrypt(subscription.getKey('auth')),
        'registration_id': registrationId(subscription)
    };

    const response = await api.post("notification/", payload);

    return response.data;
}

function browserName() {
    const browser = Bowser.getParser(window.navigator.userAgent).getBrowser();
    console.log(browser.name)
    return browser.name
}

function registrationId(subscription) {
    const endpointParts = subscription.endpoint.split('/');
    const registrationId = endpointParts[endpointParts.length - 1];

    return registrationId;
}

function encrypt(value) {
    const uint8 = new Uint8Array(value)
    return btoa(String.fromCharCode.apply(null, uint8))
}

