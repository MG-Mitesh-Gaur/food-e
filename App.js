import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigations from './constants/navigations';
import AwesomeScreen from './screens/auth/get-started/AwesomeScreen';
import DoorStepScreen from './screens/auth/get-started/DoorStepScreen';
import GrabDealsScreen from './screens/auth/get-started/GrabDealsScreen';
import GetStartedScreen from './screens/auth/get-started/GetStartedScreen';
// import * as SplashScreen from 'expo-splash-screen';
// import { Provider } from 'react-redux';
// import { store } from './store';

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 1000);

const RootStack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Provider store={store}> */}
				<RootStack.Navigator>
					{/* Screens */}
					<RootStack.Screen name={navigations.Home} component={AwesomeScreen} />
					<RootStack.Screen name={navigations.DoorStep} component={DoorStepScreen} />
					<RootStack.Screen name={navigations.GrabDeals} component={GrabDealsScreen} />
					<RootStack.Screen name={navigations.GetStarted} component={GetStartedScreen} />
				</RootStack.Navigator>
			{/* </Provider> */}
		</NavigationContainer>
	);
}