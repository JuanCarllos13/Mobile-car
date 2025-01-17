import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { AuthContext } from 'src/context/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export function Routes() {
	const insets = useSafeAreaInsets();
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			{user?.id ? <AppRoutes /> : <AuthRoutes />}
			<Toast
				topOffset={insets.top}
				config={{
					Toast,
				}}
			/>
		</NavigationContainer>
	);
}
