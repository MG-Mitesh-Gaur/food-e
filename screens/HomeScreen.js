import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import SafeViewAndroid from '../components/utilities/SafeViewAndroid'

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(()=> {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="pt-5 bg-gray-100">
				{/* Header */}
				<View className="flex-row pb-3 items-center mx-4 space-x-2 pt-2">
					<View>
						<Image
							source={{uri: 'https://links.papareact.com/wru'}}
							className="h-7 w-7 bg-gray-300 p-4 rounded-full"
						/>
					</View>
					<View className="flex-1">
						<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
						<View className="items-center flex-row">
						<Text className="font-bold text-xl">Current Location  
						</Text>
						</View>
					</View>
				</View>
		</SafeAreaView>
	)
}

export default HomeScreen