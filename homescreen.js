import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

export default class homescreen extends React.Component {
  static navigationOptions = {
    title: 'React Application',
  };

  constructor(props) {
    super(props);

    
    this.state = {
      listData: [
        
       {name: 'Press this --> Increase count' },
      ],
    };
  }

  onItemPressed(_item) {
    
    this.props.navigation.navigate('Count', {
      
    });
  }

  render() {
    let { listData } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, padding: 16, fontWeight: 'bold' }}>
         Home
        </Text>
        <FlatList
          style={{ padding: 100}}
          data={listData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', paddingBottom: 100 }}
                onPress={this.onItemPressed.bind(this, item)}>
                
                <Text style={{ width: '10%' }}>{item.key}</Text>
                <Text style={{ width: '100%' }}>{item.name}</Text>
              </TouchableOpacity>
              
            );
          }}
        />
        <View>
          <Text>
            Poga nospiesta { this.state.count } reizes
          </Text>
        </View>
        <Button
          title="Go to list"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        
      </View>
    );
  }
}
