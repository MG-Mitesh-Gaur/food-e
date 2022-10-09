import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from '../../../components/utilities/SafeViewAndroid';
import navigations from '../../../constants/navigations';
import CustomButton from '../../../components/custom/CustomButton';
import colors from '../../../constants/colors';

const GetStartedScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(()=> {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
	return (
	<>
	<StatusBar style='dark' />
	<SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-white flex-1 justify-between">
		<View>
			<View style={{width: 40, height: 22}}>
				<Image source={require('../../../assets/images/food-e-dark.png')} className="ml-4 mt-4" />
			</View>

			<View className="mx-4 mt-12">
				<Text className="text-4xl font-bold">GET <Text style={{color: colors.primary}}>STARTED</Text></Text>
				<Text className="text-sm mt-2.5" style={{color: colors.dark}}>Get started and enjoy the awesome local food right at your home.</Text>
			</View>
		</View>

		<View className="mx-4 mb-12">
			<CustomButton title={'Login'} primary tapHandler={()=> {navigation.navigate(navigations.Login)}} />

			<CustomButton title={'Register'} importStyle={{ marginBottom: 0 }} primary={false} tapHandler={()=> {navigation.navigate(navigations.Register)}} />
		</View>
	</SafeAreaView>
	</>
	)
}

export default GetStartedScreen