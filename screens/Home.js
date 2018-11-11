import React from 'react';
import {Container, Content, Text, Thumbnail, Button} from 'native-base';

export default Home = (props) => (
  <Container style={forstyle.container}>
    <Content>
      <Thumbnail
        square
        source={{uri: 'http://mobilelegends-pc.com/wp-content/uploads/2017/07/mobile_legends3.png'}}
        style={forstyle.logo}
      />
      <Text style={forstyle.title}>Welcome To Mobile Legends</Text>
      <Text style={forstyle.title}>Heroes Dictionary</Text>
      <Button
          block
        style={forstyle.button}
        onPress={()=> props.navigator.switchToTab({
          tabIndex: 1
        })}
      >
        <Text>Get Started</Text>
      </Button>
    </Content>
  </Container>
)

const forstyle = {
  container: {
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    margin: 50,
    marginTop: 80,
    marginBottom: 60,
    width: 250,
    height: 130
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#acd2fa',
    fontSize: 20
  },
  button: {
    margin: 40,
    marginTop: 80
  }
}
