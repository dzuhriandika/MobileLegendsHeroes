import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Heroes
          </Text>

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 5, marginTop:10, }}
            source={{uri: 'https://assets.jalantikus.com/assets/cache/516/290/userfiles/2018/05/17/karina-d741d.jpeg'}}
          />

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 5, marginTop:5, }}
            source={{uri: 'https://cdn0-production-images-kly.akamaized.net/rivOmQOTNXDcWw26y3vY3V5ZAO8=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1744586/original/012123600_1508404324-Cyclops.jpg'}}
          />

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 30, marginTop:5, }}
            source={{uri: 'https://img.okezone.com/content/2017/11/15/326/1814549/muncul-hero-baru-hylos-di-mobile-legends-apa-kekuatannya-M6SQ7aAXLb.jpg'}}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#cfcfd1',

    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
  }