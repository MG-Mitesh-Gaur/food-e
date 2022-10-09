import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const CustomButton = ({title, primary, tapHandler, importStyle}) => {
  return (
    <TouchableOpacity className="py-2.5 items-center" onPress={()=>tapHandler()} style={[Styles.buttonStyle, importStyle, {
        backgroundColor: !!primary ? colors.primary : colors.white,
        borderWidth: 2,
        borderColor: colors.primary
    }]}>
		<Text className="font-bold uppercase" style={{
            color: !!primary ? colors.white : colors.primary,
        }}>{title}</Text>
	</TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 20,
        marginBottom: 30,
    }
})

export default CustomButton