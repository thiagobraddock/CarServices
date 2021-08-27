import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
          <Image 
          source={require('../assets/title.png')}
         />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81DC60',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
