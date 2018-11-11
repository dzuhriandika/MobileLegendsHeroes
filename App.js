import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NativeBaseAnatomy from './components/NativeBaseAnatomy';

class index extends Component {
  render() {
    return(
      <View style={styles.container}>
        <NativeBaseAnatomy/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: "green"
  },
  footer: {
    flex:3,
    backgroundColor: "red",
    justifyContent: "center"
  },
  footerText: {
    alignSelf: "center",
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default index;

/* state = {
    number: 0,
    text: ""
  }

  // cara lain menulis state
  constructor(){
    super();
    this.state={
      number: 0,
      text: ""
    }
  }

  componentDidMount(){
    /*setInterval(()=>{
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)
  }

  handleClick(myName){
    this.setState({
      number: this.state.number + 1,
      text: "Hello React Native"
    })
  }
  const myName = 'Rayhan Rafiud Darojat';
  for <View> :
  <Text>Please click the button bellow</Text>
  <Text>{this.state.text}</Text>
  <TouchableOpacity onPress={()=>this.handleClick(myName)}>
    <Text>click</Text>
  </TouchableOpacity>
*/
