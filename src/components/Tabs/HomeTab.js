import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Button
} from 'react-native';

import FontAwsIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeTab() {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => { }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <FontAwsIcon.Button
          backgroundColor={'rgba(0,0,0,0)'}
          color="gray"
          size={22}
          name="search"></FontAwsIcon.Button>
        <View style={styles.searchBox}>
          <TextInput placeholderTextColor="#3b3b3b" placeholder="Search..." style={styles.searchInput} />
        </View>
        <AntDesignIcon.Button
          backgroundColor={'rgba(0,0,0,0)'}
          color="gray"
          size={28}
          name="plus"></AntDesignIcon.Button>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 100 }}>
        <ScrollView>
          {[1, 2, 3].map((i) => (
            <View style={{ paddingVertical: 20 }} key={`card-${i}`}>
              <View
                style={{
                  ...styles.cardHeaderItem,
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}>
                <View style={styles.cardHeaderItem}>
                  <View>
                    <Image
                      source={{
                        uri: 'https://res.cloudinary.com/dptwdk7ky/image/upload/v1666036703/talentazo/tutor-8.jpg',
                      }}
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.author}>Daniela</Text>
                  </View>
                  <View>
                    <Entypo.Button
                      size={26}
                      padding={0}
                      backgroundColor={'rgba(0,0,0,0)'}
                      color="gray"
                      name="paper-plane"></Entypo.Button>
                  </View>
                  <View>
                    <FontAwsIcon.Button
                      size={26}
                      padding={0}
                      backgroundColor={'rgba(0,0,0,0)'}
                      color="gray"
                      name="share"></FontAwsIcon.Button>
                  </View>
                </View>
                <View style={styles.cardHeaderItem}>
                  <FontAwsIcon.Button
                    backgroundColor={'rgba(0,0,0,0)'}
                    color="gray"
                    size={25}
                    padding={0}
                    name="thumbs-o-down"></FontAwsIcon.Button>
                  <FontAwsIcon.Button
                    backgroundColor={'rgba(0,0,0,0)'}
                    color="gray"
                    size={25}
                    padding={0}
                    margin={0}
                    name="heart-o"></FontAwsIcon.Button>
                </View>
              </View>

              <ScrollView horizontal style={{ paddingLeft: 20 }}>
                <View style={styles.hCardItem}>
                  <View>
                    <Image
                      style={{
                        width: 0.6 * Dimensions.get('screen').width,
                        height: 0.6 * Dimensions.get('screen').width,
                      }}
                      source={{
                        uri: 'https://res.cloudinary.com/dptwdk7ky/image/upload/v1666038944/talentazo/Business-Cards-Square.webp',
                      }}
                    />
                    <Text style={styles.buyBtn}>Buy</Text>
                    <Text style={styles.textColor}>Tags: #myfood, #IndianFoodFest</Text>
                  </View>
                </View>
                <View style={styles.hCardItem}>
                  <View>
                    <Image
                      style={{
                        width: 0.6 * Dimensions.get('screen').width,
                        height: 0.6 * Dimensions.get('screen').width,
                      }}
                      source={{
                        uri: 'https://res.cloudinary.com/dptwdk7ky/image/upload/v1666038944/talentazo/Business-Cards-Square.webp',
                      }}
                    />
                    <Text style={styles.buyBtn}>Buy</Text>
                    <Text>Tags: #myfood, #IndianFoodFest</Text>
                  </View>
                </View>
              </ScrollView>

              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Entypo.Button
                    padding={0}
                    backgroundColor={'rgba(0,0,0,0)'}
                    color="gray"
                    name="location-pin"></Entypo.Button>
                  <Text style={{ color: '#3b3b3b' }}>Basel City, Switzerland</Text>
                </View>
                <View>
                  <Text style={styles.txtRecommend}>Recommend</Text>
                </View>
              </View>

              <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ color: '#3b3b3b' }}>Cook, artist, baker | German, English, Spanish</Text>
                <Text style={{ color: '#3b3b3b' }}>
                  In case you would like to see how I make magic happen, you are
                  more than welcome to read more about it in here, it all started
                  when I was a little kid. I used to love blueberries from my
                  backyard and could not stop eating them until I decided to bake
                  a cake
                </Text>
              </View>
              <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.likeTxt}>1</Text>
                    <AntDesign.Button
                      padding={0}
                      backgroundColor={'rgba(0,0,0,0)'}
                      color="gray"
                      size={18}
                      name="wechat"></AntDesign.Button>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.likeTxt}>2</Text>
                    <AntDesign.Button
                      padding={0}
                      backgroundColor={'rgba(0,0,0,0)'}
                      color="gray"
                      size={18}
                      name="like1"></AntDesign.Button>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  author: {
    fontSize: 16,
    fontWeight: '900',
    color: '#3b3b3b'
  },
  likeTxt: {
    fontSize: 16,
    paddingRight: 5,
    color: '#3b3b3b'
  },
  txtRecommend: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 15,
    fontWeight: '900',
    borderColor: '#21b1b1',
    color: '#21b1b1',
  },
  cardHeaderItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 10
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    color: '#3b3b3b',
    height: 30,
    padding: 0,
    paddingLeft:5
  },
  searchBox: {
    flexGrow: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  hCardItem: {
    paddingRight: 20,
    position: 'relative',
    paddingVertical: 20,
  },
  buyBtn: {
    position: 'absolute',
    zIndex: 9,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: '900',
    bottom: 40,
    right: 20,
    color: '#3b3b3b'
  },
  textColor: {
    color: '#3b3b3b'
  }
});
export default HomeTab;
