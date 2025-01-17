import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
	width: 80%;
	height: 80%;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	border-radius: 10px;
	padding: 20px;
`;

export const ModalTitle = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 18px;
	margin-bottom: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
	margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 16px;
	text-align: center;
`;
