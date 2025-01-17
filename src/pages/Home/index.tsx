import React, { useContext, useEffect, useState } from 'react';
import {
	CarName,
	Container,
	Content,
	DateHours,
	Header,
	Line,
	Name,
} from './styles';
import { AuthContext } from 'src/context/auth';
import { IconLogout, IconCar } from '@tabler/icons-react-native';
import { FlatList, TouchableOpacity, View, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components/native';
import axios from 'axios';
import { CarModelsModal } from '@components/Modal';

type CardListProps = {
	nome: string;
	codigo: string;
};

export type CardListMarkProps = {
	anos: CardListProps[];
	modelos: CardListProps[];
};

export function Home() {
	const { user, signOut } = useContext(AuthContext);
	const theme = useTheme();
	const [carList, setCarList] = useState<CardListProps[] | []>([]);
	const [carListMark, setCarListMark] = useState<CardListMarkProps>({
		anos: [],
		modelos: [],
	});

	const [isModalVisible, setIsModalVisible] = useState(false);
	const currentDate = new Date();
	const day = currentDate.getDate().toString().padStart(2, '0');
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
	const year = currentDate.getFullYear();

	const formattedDate = `${day}/${month}/${year}`;

	const fetchCarList = async () => {
		try {
			const { data } = await axios.get(
				'https://parallelum.com.br/fipe/api/v1/carros/marcas'
			);
			setCarList(data);
		} catch (error) {}
	};

	const fetchCarListMark = async (id: string) => {
		try {
			const { data } = await axios.get(
				`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`
			);
			setCarListMark(data);
			setIsModalVisible(true);
		} catch (error) {}
	};

	useEffect(() => {
		fetchCarList();
	}, []);

	return (
		<Container>
			<FlatList
				data={carList}
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={() => fetchCarList()} />
				}
				style={{ backgroundColor: theme.COLORS.BACKGROUND_PRIMARY }}
				ListHeaderComponent={
					<Header>
						<View style={{ flex: 1 }}>
							<DateHours>{formattedDate}</DateHours>
							<Name>{user?.name}</Name>
						</View>
						<TouchableOpacity onPress={() => signOut()}>
							<IconLogout color={theme.COLORS.BUTTON} size={32} />
						</TouchableOpacity>
					</Header>
				}
				renderItem={({ item }) => (
					<Content onPress={() => fetchCarListMark(item.codigo)}>
						<IconCar color={theme.COLORS.BUTTON} />
						<CarName>{item.nome}</CarName>
					</Content>
				)}
				ItemSeparatorComponent={() => <Line />}
			/>
			<CarModelsModal
				isVisible={isModalVisible}
				carListMark={carListMark}
				onClose={() => setIsModalVisible(false)}
			/>
		</Container>
	);
}
