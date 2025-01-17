import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
	padding: 32px;
`;

export const DateHours = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Name = styled.Text`
	font-size: 22px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Content = styled.TouchableOpacity`
	height: 80px;
	border-radius: 8px;
	justify-content: center;
	padding-left: 36px;
`;

export const CarName = styled.Text`
	font-size: 15px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Line = styled.View`
	height: 1px;
	border-width: 0.5px;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
