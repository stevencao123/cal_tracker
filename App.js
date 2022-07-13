import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

export default function App() {

  const [foodList, setFoodList] = useState([]);

  const [food, setFood] = useState('');

  const [totalCal, setTotalCal] = useState(0);

  const foodHandler = useCallback(() => {

    console.log(food);
    setFoodList(oldList => [...oldList, {key: food}]);
    console.log(foodList);
  }, [food]);

  const clearEntries = () => {

    setFood('');
    setFoodList([]);
    setTotalCal(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.navbar}>

        <Image source={require("./assets/logo.png")} resizeMode='cover' style={{width:50, height:50}}/>
        <Text style={{marginRight: 100, fontFamily:'roboto', fontWeight: 'bold', fontSize:30, color: '#34b6cb'}}>Cal Track</Text>

        <TouchableOpacity style={styles.button}>
          <Text>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={text=> setFood(text)}
          value={food}
          placeholder="Food Name"
          onSubmitEditing={foodHandler}
        />

        <FlatList
          data={foodList}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>

      <View style={styles.footer}>
      <Text>{`Total Calories: ${totalCal}`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbar: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },

  body: {
    flex: 0.7,
    paddingTop: 20,
  },

  footer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 10,
    marginLeft:10, 
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#34b6cb',
  },

  input: {
    borderWidth: 1,
    borderRadius: 16,
    textAlign: 'center',
  }
});
