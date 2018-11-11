import React from 'react';
import {ListItem, Text, Thumbnail, Left, Body} from 'native-base';

export default Hero = ({hero}) => (
  <ListItem>
    <Thumbnail
      square
      size={80}
      source={{uri: hero.imageUri}}
    />
    <Body>
      <Text>{hero.name}</Text>
      <Text note>{hero.title}</Text>
    </Body>
  </ListItem>
)
