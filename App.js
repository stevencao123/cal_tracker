import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },

  body: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 10,
    marginLeft:10, 
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#34b6cb',
  },
});
