import React from 'react';
import { Container } from './styles';
import Theme from '@styles/index';

export function Loading() {
	return (
		<Container
			color={Theme.COLORS.WHITE}
			background={Theme.COLORS.BACKGROUND_PRIMARY}
		/>
	);
}
