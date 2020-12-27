import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

    
  

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'John Doe 1'},
          {key: 'John Doe 2'},
          {key: 'John Doe 3'},
          {key: 'John Doe 4'},
          {key: 'John Doe 5'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;