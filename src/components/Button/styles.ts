import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	height: 56px;
	max-height: 56px;
	background-color: ${({ theme }) => theme.COLORS.BUTTON};
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 14px;
`;

export const Text = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.BLACK};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;
