import { ThemeProvider } from 'styled-components';

import theme from '@styles/index';
import React from 'react';

import {
	useFonts,
	Rubik_600SemiBold,
	Rubik_400Regular,
	Rubik_500Medium,
	Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { AuthProvider } from 'src/context/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [fontsLoading] = useFonts({
		Rubik_600SemiBold,
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_700Bold,
	});

	if (!fontsLoading) {
		return <Loading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider
				style={{ backgroundColor: theme.COLORS.BACKGROUND_PRIMARY }}
			>
				<StatusBar style="light" />
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
