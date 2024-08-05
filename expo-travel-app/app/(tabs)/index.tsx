import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Page = () => {
  return (
    <View style={Styles.container}>
      <Text>Page</Text>
    </View>
  );
};

export default Page;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
