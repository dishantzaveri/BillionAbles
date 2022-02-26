import {
    Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import base64 from 'react-native-base64';
import Feather from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale';
import {data, popular} from '../constants/BlogData';
const MentalHeath = props => {
    const {width, height} = Dimensions.get('window');
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          base64.encode(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68',
          ),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then(tokenResponse => {
      axios(
        `https://api.spotify.com/v1/browse/categories/${'wellness'}/playlists?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token,
          },
        },
      ).then(playlistResponse => {
        console.log('playlist', playlistResponse.data.playlists.items);
        setPlaylist(playlistResponse.data.playlists.items);
      });
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TrackList', {
            id: item.id,
            title: item.name,
          });
        }}>
        <View style={styles.track}>
          <View style={styles.trackImage}>
            <Image
              source={{uri: item.images[0].url}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View >
      <ScrollView >
        <View >
          <View style={styles.tracksContainer}>
            <Text style={styles.trackTitle}>Tracks to refresh your mood!</Text>
            <FlatList
              renderItem={renderItem}
              data={playlist}
              horizontal={true}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CreateMeme');
            }}>
            <View style={styles.createMemeContainer}>
              <Text style={styles.createMemeText}>Create a Meme</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.YourDailyRead}>
            <View>
              <Text style={styles.YourDailyReadText}>
                Your Daily Read <Text style={styles.verticalLine}>|</Text>
              </Text>
            </View>
          </View>

          {/* Header End */}

          {/* Your Daily Read */}

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data}
              keyExtractor={item => item.id.toString()}
              style={{paddingHorizontal: 20}}
              renderItem={({item}) => {
                return (
                  <View>
                    <View>
                      <TouchableScale
                        activeScale={0.9}
                        tension={50}
                        friction={7}
                        useNativeDriver
                        onPress={() =>
                          props.navigation.navigate('OpenBlogScreen', {data: item})                          
                        }>
                        <View>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: width - 100,
                              height: height - 500,
                              borderRadius: 14,
                              marginRight: 30,
                            }}
                            resizeMode="cover"
                          />
                        </View>

                        <View
                          style={{
                            width: width - 90,
                            position: 'absolute',
                            bottom: 90,
                            left: 10,
                            paddingHorizontal: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 24,
                              fontWeight: 'bold',
                              lineHeight: 28,
                            }}>
                            {item.title}
                          </Text>
                        </View>

                        <View style={styles.profilePic2}>
                          <View>
                            <Image
                              source={{uri: item.profilePic}}
                              style={styles.profilePicStyle}
                              resizeMode="cover"
                            />
                          </View>

                          <View>
                            <View>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  fontWeight: 'bold',
                                }}>
                                {item.author}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableScale>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* Your Daily Read End */}

          {/* POPULAR START */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingVertical: 15,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: -5}}>
              Popular Stories <Text style={styles.verticalLine}>|</Text>
            </Text>
          </View>

          <FlatList
            data={popular}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={7}
                    useNativeDriver
                    onPress={() =>
                      props.navigation.navigate('OpenBlogScreen', {data: item})
                    }>
                    <View style={styles.popularStories}>
                      <View style={{marginRight: 20}}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.BlogImage}
                        />
                      </View>

                      <View style={{width: '60%', marginTop: -10}}>
                        <Text></Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '600',
                            marginBottom: 4,
                          }}>
                          {item.title}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: 0.4,
                          }}>
                          <View style={{display: 'flex', flexDirection: 'row'}}>
                            <View>
                              <Text style={{fontSize: 12}}>{item.author}</Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 40,
                              }}>
                              <Feather
                                name="thumbs-up"
                                size={14}
                                color="#000"
                              />
                              <Text style={{marginHorizontal: 4, fontSize: 12}}>
                                {item.likes} Likes
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableScale>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MentalHeath;

const styles = StyleSheet.create({
  tracksContainer: {
    marginVertical: 10,
    padding: 10,
    paddingTop: 0,
    paddingLeft: 20,
    position: 'relative',
  },
   container:{
    backgroundColor:'white',
    flex:1
  },
  trackTitle: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  track: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    position: 'relative',
  },
  trackContent: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  trackImage: {
    opacity: 1,
  },
  createMemeContainer: {
    width: 150,
    height: 40,
    backgroundColor: '#46703b',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createMemeText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    marginLeft: 0,
  },
  YourDailyRead: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  YourDailyReadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  profilePicStyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 14,
  },
  profilePic2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  popularStories: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingLeft: 30,
    alignItems: 'center',
    marginTop: 0,
  },
  BlogImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  verticalLine: {
    fontWeight: 'bold',
    color: "#face1b",
    fontSize: 30,
    textShadowRadius: 4,
    textShadowColor: 'grey',
  },
});
