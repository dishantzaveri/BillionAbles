import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Card = ({title, navigation,image, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigate)}
      style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width:50,
          height:50,
          borderRadius:30,          
        }}
      />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 30,
    height: 150,
    width: Dimensions.get('screen').width / 2.5,
    marginRight: 20,
    marginVertical: 20,
    alignItems:"center",
    justifyContent:"center"
  },
  cardText:{
    color:"black",
    fontSize:18,
    fontFamily:"sans-serif",
  }
});
