import * as React from 'react';
import { Button, Text, View, Dimensions, StyleSheet, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import commonStyles from '../Styles/style'
import { useNavigation } from '@react-navigation/native';
import CountryDropdown from '../components/CountryDropdown';


const { width } = Dimensions.get('window')
function Login(props) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showSignup, setShowSignup] = React.useState(false);
  
  const navigation = useNavigation();

  const doLogin = () => {
    props.dispatch({ type: "USER_LOGGED", payload: true });
  }
  const doSignup = () => {
    setShowSignup(!showSignup)
  }
  return (
    <View style={{flex: 1}}>
      
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.loginBottom}>
        <View style={{paddingTop: 200}}>
          <Image
            source={require('../assets/img/instagram.png')}
            style={{ width: 100, height: 100 }}
            resizeMode='contain'
          />
        </View>
        <View style={{paddingBottom: 200, width: '100%'}}>
          
          <CountryDropdown />
          <View style={{marginTop: 30}}>
            <TextInput placeholderTextColor="#000" placeholder='Mobile number*' style={{fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', height: 50}} />
          </View>
          <TouchableOpacity style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', backgroundColor: '#DB4437', justifyContent: 'center', alignItems: 'center', paddingVertical: 15, borderRadius: 20}}>
              <Text style={{color: '#fff', fontSize: 20}}>Submit</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

const styles = StyleSheet.create({
  loginTop: {
    height: 310,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBottom: {
    justifyContent: 'center',
    paddingLeft: 80,
    paddingRight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  
  child: {
    position: 'relative',
    bottom: 40
  }

});

export default connect(mapStateToProps)(Login);