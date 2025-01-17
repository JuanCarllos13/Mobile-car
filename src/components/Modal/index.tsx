import React from 'react';
import { Modal, FlatList } from 'react-native';
import {
	ModalButton,
	ModalButtonText,
	ModalContainer,
	ModalContent,
	ModalTitle,
} from './styles';
import { IconCar } from '@tabler/icons-react-native';
import { useTheme } from 'styled-components/native';
import { Content, CarName } from '@pages/Home/styles';
import { Line } from 'react-native-svg';
import { CardListMarkProps } from '@pages/Home';

type CarModelsModalProps = {
	isVisible: boolean;
	carListMark: CardListMarkProps;
	onClose: () => void;
};

export function CarModelsModal({
	isVisible,
	carListMark,
	onClose,
}: CarModelsModalProps) {
	const theme = useTheme();

	return (
		<Modal
			visible={isVisible}
			animationType="fade"
			onRequestClose={onClose}
			transparent={true}
		>
			<ModalContainer>
				<ModalContent>
					<ModalTitle>Modelos de Carros</ModalTitle>

					<FlatList
						data={carListMark?.modelos}
						renderItem={({ item }) => (
							<Content>
								<IconCar color={theme.COLORS.BUTTON} />
								<CarName>{item.nome}</CarName>
							</Content>
						)}
						keyExtractor={(item) => item.codigo} // Adiciona keyExtractor
						ItemSeparatorComponent={() => <Line />}
					/>
					<ModalButton onPress={onClose}>
						<ModalButtonText>Fechar</ModalButtonText>
					</ModalButton>
				</ModalContent>
			</ModalContainer>
		</Modal>
	);
}
