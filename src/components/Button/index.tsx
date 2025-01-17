import React from 'react';
import {
	TouchableOpacityProps,
	TextProps,
	ActivityIndicator,
} from 'react-native';
import { Container, Text } from './styles';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
	return (
		<Container style={[style]} disabled={isLoading} {...rest}>
			{isLoading ? <ActivityIndicator size="small" /> : children}
		</Container>
	);
}

function Title({ children }: TextProps) {
	return <Text>{children}</Text>;
}

type IconProps = TablerIconProps & {
	icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
