import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome='ThunderZin'
    let img='https://i.pinimg.com/564x/50/40/1a/50401a8d0e62343c5830858d6c3722d0.jpg'


    return(
      <View>
    <Text>Ola Porra!</Text>
   
    <Text>Meu primeiro App</Text>
      <Text style={{color:'#FF0000' ,fontSize: 25, margin: 15}}>loco bem loco</Text>
        <Image 
          source={{uri:img}}
          style={{width:310, height:400 }}
        />
        <Text style={{color:'#FF0000' ,fontSize: 25, margin: 15}}>{nome}</Text>
        </View>
    );
  }
}
export default App;

