import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{marginBottom:200, height: 40,backgroundColor: 'black'}}>
        <Text style={{color:'white', alignSelf: 'center', marginTop: 10}}>My First Project in React Native</Text>
      </View>
      <ScrollView style={{alignSelf:'center'}}>
        <Text style={{fontWeight: 'bold'}}>Hello World!</Text>
      </ScrollView>
      <View style={{height:40, backgroundColor: 'black'}}>
        <Text style={{color: 'white', alignSelf:'center', marginTop: 10}}>Desenvolvido por gabriell-silva </Text>
      </View>
    </View>
  );
}
