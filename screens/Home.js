import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Visually Imapaired',
      navigation: 'Visually Impaired',
      image: 'https://media.noisyvision.org/2011/04/Ipovisione2-300x271.jpg',
    },
    {
      id: 2,
      title: 'Deaf',
      navigation: 'SpeechToText',
      image:
        'https://cdn.pixabay.com/photo/2012/04/25/00/43/hearing-41428__340.png',
    },
    {
      id: 3,
      title: 'Dumb',
      navigation: 'TextToSpeech',
      image:
        'https://w7.pngwing.com/pngs/319/68/png-transparent-british-sign-language-language-interpretation-american-sign-language-others-english-hand-sign-thumbnail.png',
    },
    {
      id: 4,
      title: 'Counselling',
      navigation: 'EnterScreen',
      image:
        'https://i.pinimg.com/736x/b1/fd/4f/b1fd4f521e136fb90b791903d15cabbf.jpg',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.homeCards}>
        {data.map(card => (
          <Card
            image={card.image}
            key={card.id}
            navigation={navigation}
            title={card.title}
            navigate={card.navigation}
          />
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container:{
    backgroundColor:'white',
    flex:1
  }
});
