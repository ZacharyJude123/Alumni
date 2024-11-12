import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

const Signup = () => {
  return (
    <SafeAreaView className="bg-blue-950 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[50px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">Log in to TechFolioHub</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup
