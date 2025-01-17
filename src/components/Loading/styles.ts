import styled from 'styled-components/native';

interface LoadingProps {
	background: string;
	color: string;
}

export const Container = styled.ActivityIndicator<LoadingProps>`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ background }) => background};
	color: ${({ color }) => color};
`;
