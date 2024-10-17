import React, { Component } from 'react';
import {View , Text, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      nome:'',
      input:'',
    };
      this.entrar = this.entrar.bind(this);
  }

    entrar(){
      if(this.state.input === ''){
        alert('Digite seu nome!');
        this.setState({nome: ''})
        return;
    }
      this.setState({nome: 'Bem Vindo: ' + this.state.input + '!'});
  }
  render(){
    return(
      
      <View style={styles.container}>
        <TextInput 
        style={styles.input} 
        placeholder='Digite seu nome'
        onChangeText={(texto) => this.setState({input: texto}) }
        />

        <Button title='entrar' onPress={this.entrar}/>

        <Text style={styles.texto} >{this.state.nome}</Text>

      </View>    
      
      );
  }
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 30
  },
  input:{
    height:30,
    borderWidth:1,
    borderColor:'#222',
    margin:10,
    fontSize: 10,
    padding: 5,
    borderRadius:5
  },
  texto:{
    textAlign:'center',
    fontSize:30
  },
})