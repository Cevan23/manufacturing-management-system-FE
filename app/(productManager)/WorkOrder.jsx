import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { getAllWorkOrdersOfPM } from "../../services/WorkOrderServices";
import { getAllMPS } from "../../services/MPSServices";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useGlobalContext } from "../../context/GlobalProvider";
import { Card } from "react-native-paper";
import IconButton from "../../components/IconButton";
import { CustomButton, AppLoader } from "../../components";

const WorkOrder = () => {
	const { token, userId } = useGlobalContext();
	const navigation = useNavigation();
	const [workOrders, setWorkOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([
		{ label: "Pending", value: "pending" },
		{ label: "Processing", value: "processing" },
		{ label: "Finish", value: "PMcheck" },
	]);

	useFocusEffect(
		React.useCallback(() => {
			const fetchData = async () => {
				setLoading(true);
				const data = await getAllWorkOrdersOfPM(token, userId);
				setWorkOrders(data.result);
				setLoading(false);
			};
			fetchData();
		}, [token, userId])
	);

	const handleInsert = () => {
		try {
			navigation.navigate("CreateWorkOrder");
		} catch (error) {
			console.error(error);
		}
	};

	const handleCardPress = (id) => {
		try {
			navigation.navigate("WorkOrderDetail", { id });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView style={styles.backgroundColor}>
			<View>
				<View style={{ padding: 10 }}>
					<FlatList
						data={workOrders.slice().sort((a, b) => a.id - b.id)}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<Card
								style={styles.card}
								onPress={() => handleCardPress(item.id)}
							>
								<Card.Title
									title={"Work Order.No: " + item.id}
									titleStyle={styles.title}
								/>
								<Card.Content>
									<View className="flex-row mb-2">
										<Text className="text-lg font-semibold text-black mr-2">
											Start Date:
										</Text>
										<Text className="text-lg text-black">{item.dateStart}</Text>
									</View>
									<View className="flex-row mb-2">
										<Text className="text-lg font-semibold text-black mr-2">
											End Date:
										</Text>
										<Text className="text-lg text-black">{item.dateEnd}</Text>
									</View>
									<View className="flex-row mb-2">
										<Text className="text-lg font-semibold text-black mr-2">
											Status:
										</Text>
										<Text className="text-lg text-black">
											{items.find((i) => i.value === item.workOrderStatus)
												?.label || item.workOrderStatus}
										</Text>
									</View>
								</Card.Content>
							</Card>
						)}
					/>
				</View>
			</View>
			<CustomButton
				icon={"plus"}
				iconSize={28}
				containerStyles="p-0 absolute bottom-16 self-end right-10 h-12 w-12 rounded-full bg-green-500 items-center justify-center"
				isLoading={false}
				handlePress={handleInsert}
			/>
			{loading ? <AppLoader /> : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	card: {
		margin: 10,
		padding: 10,
		backgroundColor: "white",
		elevation: 5,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	cardContent: {
		fontSize: 16,
	},
	backgroundColor: {
		backgroundColor: "#161622",
		flex: 1,
	},
	title: {
		color: "#FFA500",
		fontSize: 20,
		fontWeight: "bold",
		paddingTop: 10,
	},
});

export default WorkOrder;
