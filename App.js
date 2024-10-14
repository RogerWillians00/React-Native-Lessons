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
    <Text style={{fontSize: 24, color: 'red', textAlign: 'center'}}>
      {this.state.nome}
      </Text>
      <Button title="Entrar" onPress={ ()=> this.entrar('erro ao entrar')}/>
    </View>
    );
  }
}
export default App;