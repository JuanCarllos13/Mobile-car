import React from 'react';
import WelcomeIMage from '@assets/Welcome.png';
import { Container, Footer, Title } from './styles';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
	const navigation = useNavigation();

	function goSignIn() {
		navigation.navigate('SignIn');
	}

	return (
		<Container source={WelcomeIMage}>
			<Title>Vamos Encontrar Seu Carro Ideal!</Title>

			<Footer>
				<Button onPress={goSignIn}>
					<Button.Title>Vamos lá!</Button.Title>
				</Button>
			</Footer>
		</Container>
	);
}
