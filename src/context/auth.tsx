/* eslint-disable no-console */
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import {
	storageLoginGet,
	storageLoginRemove,
	storageLoginSave,
} from '@storage/login/storageLogin';
import Toast from 'react-native-toast-message';
import * as LocalAuthentication from 'expo-local-authentication';

interface AuthContextData {
	user: UserProps | null;
	SignIn: (credentials: SignInProps) => Promise<void>;
	signOut: () => void;
}

interface SignInProps {
	email: string;
	password: string;
}

interface UserProps {
	id: string;
	name: string;
	token: string;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
	children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserProps | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function SignIn({ email, password }: SignInProps) {
		setIsLoading(true);
		try {
			const response = await axios.post(
				'https://test-api-y04b.onrender.com/signIn',
				{
					user: email.toLowerCase(),
					password,
				}
			);

			setUser(response.data.user);
			storageLoginSave(response.data.user);
			console.log(response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					const errorMessage =
						error.response.data?.message ?? 'Erro desconhecido';

					Toast.show({
						type: 'error',
						text1: errorMessage,
					});
				} else {
					Toast.show({
						type: 'error',
						text1:
							'Erro de conexão. Verifique sua internet ou tente novamente mais tarde.',
					});
				}
			} else {
				Toast.show({
					type: 'error',
					text1: 'Ocorreu um erro desconhecido.',
				});
			}
		} finally {
			setIsLoading(false);
		}
	}

	async function signOut() {
		setUser(null);
		await storageLoginRemove();
	}

	async function biometria() {
		const compatible = await LocalAuthentication.hasHardwareAsync();
		const user = await storageLoginGet();

		if (compatible && user) {
			const biometriaRecord = await LocalAuthentication.isEnrolledAsync();

			if (!biometriaRecord) {
				return;
			} else {
				if (user) {
					const result = await LocalAuthentication.authenticateAsync();
					if (result.success) {
						setUser(user);
					} else {
						setUser(null);
						await storageLoginRemove();
					}
				} else {
					return;
				}
			}
		}
	}

	useEffect(() => {
		if (!user) {
			biometria();
		}
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				SignIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider };
