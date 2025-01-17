import React, { forwardRef, useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { IconEye, IconEyeClosed } from '@tabler/icons-react-native';

import { Container, ContainerInput, Text, InputText } from './styles';

type InputProps = TextInputProps & {
	title: string;
	width?: 'LG' | 'SM';
	height?: 'LG' | 'SM';
	secure?: boolean;
};

const Input = forwardRef<TextInput, InputProps>(
	({ title, width, height, secure = false, ...rest }, ref) => {
		const [secureText, setSecureText] = useState(true);
		const { COLORS } = useTheme();

		return (
			<Container width={width} height={height}>
				<Text>{title}</Text>
				<ContainerInput>
					<InputText
						width={width}
						height={height}
						style={{ textAlignVertical: 'top' }}
						placeholderTextColor={COLORS.WHITE}
						{...rest}
						secureTextEntry={secure ? secureText : false}
						ref={ref}
					/>
					{secure && (
						<TouchableOpacity onPress={() => setSecureText(!secureText)}>
							{secureText ? (
								<IconEyeClosed color={COLORS.WHITE} />
							) : (
								<IconEye color={COLORS.WHITE} />
							)}
						</TouchableOpacity>
					)}
				</ContainerInput>
			</Container>
		);
	}
);

Input.displayName = 'Input';

export { Input };
