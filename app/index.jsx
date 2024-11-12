import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import icons from '../constants/icons';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';






export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-violet-400">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-screen h-[85vh] px-4">
       <Text className="text-4xl font-pbold text-yellow-500 ">TELECALL </Text> 
        <Image source ={images.logos}
        className = "w-full h-[120] mb-10 "
        resizeMode = "contain"
       />
       <View className="relative">
         <Text className="font-preg text-2xl text-center text-white mb-5 "> 
           Telecall is a mobile app that empowers users to experience better communication.
         </Text>
       </View>

      <CustomButton title="Click here"
      handlePress={() => {router.push('/sign-in')}}
      containerStyle= "w-full mt-1"
      >
      </CustomButton>
      
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};




