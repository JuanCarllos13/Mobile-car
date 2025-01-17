import React, {
	createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Home } from '@pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator initialRouteName="Home">
			<Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
}
