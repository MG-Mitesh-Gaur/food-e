import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import images from '../../../constants/images'
import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from '../../../components/utilities/SafeViewAndroid';
import colors from '../../../constants/colors'
import navigations from '../../../constants/navigations';
import CustomButton from '../../../components/custom/CustomButton';

const GrabDealsScreen = () => {
  const navigation = useNavigation();

	useLayoutEffect(()=> {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
  return (
	<>
	<StatusBar style='light' />
	<ImageBackground source={images.grabDeals_screen} className="w-full h-full">
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="flex-1 justify-between">
			<View style={{width: 40, height: 22}}>
				<Image source={require('../../../assets/images/food-e-light.png')} className="ml-4 mt-4" />
			</View>

			<View className="mx-4 mb-12">
				<View className="mb-12">
					<Text className="uppercase text-4xl w-9/12 font-bold" style={{color: colors.white}}>GRAB THE BEST <Text style={{color: colors.primary}}>DEALS</Text> AROUND</Text>
					<Text className="text-white text-sm mt-2.5">Discover delicious food from the amazing restaurants near you</Text>
				</View>

				{/* button - custom */}
				<CustomButton title={'Get Started'} importStyle={{
					marginBottom: 0
				}} primary tapHandler={()=> {navigation.navigate(navigations.GetStarted)}} />
			</View>
		</SafeAreaView>
	</ImageBackground>
	</>
  )
}

export default GrabDealsScreen