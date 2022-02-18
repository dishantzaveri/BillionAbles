import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileThumb = ({ item }) => {
  return (
    <View style={styles.profileThumb}>
      <>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w342${item?.profile_path}`,
          }}
          style={styles.crewImages}
        />
      </>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          paddingVertical: 10,
        }}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );
};

export default ProfileThumb;

const styles = StyleSheet.create({
  crewImages: {
    width: 200,
    height: '100%',
    borderColor: 'black',
  },

  profileThumb: {
    height: '100%',
    flexDirection: 'column',
    width: 200,
    backgroundColor: '#212121',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 10,
    overflow: 'hidden',
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});