import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View style= {nbStyles.container}>
          <Text style={{fontSize: 20, marginTop:30, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Welcome to Mobile Legend
          </Text>

          <Image
           style={{alignItems: 'center', width: 300, height:150, marginBottom: 30, marginTop:30, }}
            source={{uri: 'https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png'}}
          />

          <Text style={nbStyles.subtitle}>
            Heroes Dictionary
          </Text>
          <Text style={nbStyles.subtitle}>
            Start Exploring/Creating
          </Text>
          <Text style={nbStyles.subtitle}>
            Your Favorite Heroes
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: '#2d2d2d'}}>Start</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfcfd1',
        fontWeight : 'bold',
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingVertical: 5,
        height: 45,
        width: 200,
        alignSelf: 'center',
    },
}