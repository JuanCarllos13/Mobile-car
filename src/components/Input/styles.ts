import styled from 'styled-components/native';

interface TextInputProps {
	width?: 'LG' | 'SM';
	height?: 'LG' | 'SM';
}

export const Container = styled.View<TextInputProps>`
	margin-top: 30px;
	margin-bottom: 30px;
	width: ${({ width }) => (width === 'SM' ? '153px' : '100%')};
	height: ${({ height }) => (height === 'LG' ? '120px' : '48px')};
`;

export const ContainerInput = styled.View<TextInputProps>`
	flex-direction: row;
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.COLORS.GRAY_600};
	border-radius: 6px;
	width: ${({ width }) => (width === 'SM' ? '153px' : '100%')};
	height: ${({ height }) => (height === 'LG' ? '120px' : '48px')};
	justify-content: space-between;
	align-items: center;
	padding-right: 15px;
`;

export const InputText = styled.TextInput<TextInputProps>`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 16px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	width: ${({ width }) => (width === 'SM' ? '153px' : '90%')};
	padding-left: 4px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.COLORS.BUTTON};
	font-size: 14px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
