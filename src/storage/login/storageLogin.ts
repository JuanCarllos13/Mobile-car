import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOGIN } from '@storage/storageConfig';

export async function storageLoginSave(login: string) {
	await AsyncStorage.setItem(LOGIN, JSON.stringify(login));
}

export async function storageLoginGet() {
	const storage = await AsyncStorage.getItem(LOGIN);

	const login = storage ? JSON.parse(storage) : '';

	return login;
}

export async function storageLoginRemove() {
	await AsyncStorage.removeItem(LOGIN);
}
