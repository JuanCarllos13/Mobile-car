import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
	flex: 1;
	flex-direction: column;
	padding: 32px;
`;

export const Title = styled.Text`
	font-size: 35px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
	margin-top: 100px;
`;

export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 50px;
`;
