import GoogleLogo from '@assets/google.svg';
import FacebookLogo from '@assets/facebook.svg';
import ApplyLogo from '@assets/apply.svg';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	BoxLogo,
	ButtonLogo,
	Container,
	Description,
	Footer,
	Header,
	Line,
	RowLine,
	TextOr,
	Title,
} from './styles';
import { AuthContext } from 'src/context/auth';

const signInSchema = z.object({
	email: z.string(),
	password: z.string().nonempty('A senha é obrigatória'),
});

type SignInFormData = z.infer<typeof signInSchema>;

export function SignIn() {
	const { COLORS } = useTheme();
	const navigate = useNavigation();
	const { SignIn } = useContext(AuthContext);
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
	});

	async function handleLogin(data: SignInFormData) {
		await SignIn({ email: data.email, password: data.password });
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsHorizontalScrollIndicator={false}
		>
			<Container>
				<Header>
					<TouchableOpacity onPress={() => navigate.goBack()}>
						<IconArrowLeft color={COLORS.BUTTON} />
					</TouchableOpacity>
				</Header>

				<Title>
					Bem-vindo! Faça login usando sua conta social ou e-mail para continuar
				</Title>

				<Description>
					Encontre o carro ideal de forma rápida e fácil com nosso app de
					listagem!
				</Description>

				<BoxLogo>
					<ButtonLogo>
						<FacebookLogo width={24} height={24} />
					</ButtonLogo>
					<ButtonLogo>
						<GoogleLogo width={24} height={24} />
					</ButtonLogo>
					<ButtonLogo>
						<ApplyLogo width={24} height={24} />
					</ButtonLogo>
				</BoxLogo>

				<RowLine>
					<Line />
					<TextOr>OR</TextOr>
					<Line />
				</RowLine>

				<Controller
					name="email"
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							title="usuário de acesso"
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
							returnKeyType="next"
						/>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							title="Sua senha"
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
							secure
						/>
					)}
				/>

				<Footer>
					<Button isLoading={isSubmitting} onPress={handleSubmit(handleLogin)}>
						<Button.Title>Acessar</Button.Title>
					</Button>
				</Footer>
			</Container>
		</ScrollView>
	);
}
