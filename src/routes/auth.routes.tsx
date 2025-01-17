import React, {
	createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Welcome } from '@pages/Welcome';
import { SignIn } from '@pages/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
	return (
		<Navigator initialRouteName="Welcome">
			<Screen
				name="Welcome"
				component={Welcome}
				options={{
					headerShown: false,
				}}
			/>

			<Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>

			<Screen
				name="Home"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
}
