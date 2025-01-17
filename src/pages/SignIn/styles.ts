import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	padding: 28px;
`;

export const Header = styled.View`
	margin-top: 17px;
	width: 100%;
`;
export const Title = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: 18px;
	text-align: center;
	margin-top: 60px;
	margin-bottom: 16px;
`;

export const Description = styled.Text`
	font-size: 16px;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BoxLogo = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const ButtonLogo = styled.TouchableOpacity`
	width: 48px;
	height: 48px;
	border-radius: 24px;
	border-width: 1px;
	justify-content: center;
	align-items: center;
	border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const RowLine = styled.View`
	width: 100%;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
`;

export const TextOr = styled.Text`
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Line = styled.View`
	width: 132px;
	height: 1px;
	border-width: 0.5px;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 37px;
`;
