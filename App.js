import React, { Component } from 'react';
import {View} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex:1, 
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center'
      
      }}>
      
      <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
      <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
      <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
      
      </View>
      
      );
  }
}
export default App;