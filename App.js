import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state={nome:"Ola Mundo!!"};
    this.entrar = this.entrar.bind(this);  

  }
  entrar(nome){
    this.setState({nome:nome})

  }

  render(){
    return(
      <View style={{ marginTop: 40 }}>
        <Text>Eu sou Texto 1</Text>
        <Text>Eu sou Texto 2</Text>
        <Text>Eu sou Texto 3</Text>
        <Text>Eu sou Texto 4</Text>
    </View>
    );
  }
}
export default App;