import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import HomeTab from '../components/Tabs/HomeTab';
import ProfileTab from '../components/Tabs/ProfileTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {MaterialCommunityIcons} from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function Home(props) {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => { }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          var iconName;
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={Dimensions.get('screen').width <= 500 ? 35 : 40}
              color={'#3b3b3b'}
              style={{
                width: Dimensions.get('screen').width <= 500 ? 36 : 50,
                marginTop: Dimensions.get('screen').width <= 500 ? 0 : 10,
              }}
            />
          );
        },
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 130, height: 50 }}
            source={require('../assets/img/timelyLogo.png')}
            resizeMode='contain'
          />
        ),
      })}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} />
    </Tab.Navigator>
  );
}
export default Home;
