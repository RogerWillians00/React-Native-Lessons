import React, { Component } from 'react';
import {View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome='ThunderZin'
    


    return(
      <View>
    <Text> Ola Mundo!</Text>
   
    <Text>Meu primeiro App</Text>
      <Text style={{color:'#FF0000' ,fontSize: 25, margin: 15}}>loco bem loco</Text>
        <Text style={{color:'#FF0000' ,fontSize: 25, margin: 15}}>{nome}</Text>
        <Guts Largura={180} Altura={300} fulano="Guts!"/>
        </View>
    );
  }
}

export default App;

class Guts extends Component{
  render(){
    let img = 'https://i.pinimg.com/564x/50/40/1a/50401a8d0e62343c5830858d6c3722d0.jpg';
  return(
    <View>
    <Image
    source={{uri: img}}
    style={{width:this.props.Largura, height:this.props.Altura}}
    />
    <Text>{this.props.fulano}</Text>
    </View>
  );
  }
}

