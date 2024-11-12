import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-violet-400 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image source={images.logos}
            resizeMode="contain"
            className="w-[300px] h-[50px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">Log in to TELECALL</Text>
          <Link href="/home">login</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
