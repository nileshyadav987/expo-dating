import * as React from 'react';
import { Button, Text, View, Dimensions, StyleSheet, Image, TextInput, StatusBar } from 'react-native';
import { connect } from "react-redux";

import commonStyles from '../Styles/style'
import { useNavigation } from '@react-navigation/native';


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
    <View>
      
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      
        <Image
          source={require('../assets/img/logo.png')}
          style={{ width: 200, height: 200 }}
          resizeMode='contain'
        />
      <View style={styles.loginBottom}>
        <View style={styles.loginBottomCurve}></View>
        <View style={styles.child}>
          <View style={{ flexDirection: 'row', padding: 20 }}>
            <Text style={commonStyles.font16}>Not a memeber?</Text>
            {!showSignup ?
              <Text onPress={doSignup} style={[commonStyles.fontGreen16, { marginLeft: 5 }]}>Sign up now</Text>
              :
              <Text onPress={doSignup} style={[commonStyles.fontGreen16, { marginLeft: 5 }]}>Log In</Text>
            }
          </View>
          <View>
            <Button icon="facebook" mode="contained" onPress={() => console.log('Pressed')} style={commonStyles.fbBtn} title="Log in with Facebook" />
            <Button labelStyle={{color: '#E94235'}} icon="google" mode="contained" onPress={() => console.log('Pressed')} style={commonStyles.googleBtn} title="Log in with Google" />
          </View>
          <View style={{ width: width - 160, textAlign: 'center', alignItems: 'center', marginBottom: 10 }}>
            <Text>OR</Text>
          </View>
          {!showSignup ? <View>
            <TextInput
              label="Email"
              value={email}
              onChangeText={v => setEmail(v)}
              style={commonStyles.commonInput}
              underlineColor="transparent"
              placeholder="Username"
            />
            <TextInput
              label="Password"
              placeholder="Password"
              value={password}
              onChangeText={v => setPassword(v)}
              secureTextEntry={true}
              style={commonStyles.commonInput}
              underlineColor="transparent"
            />
            <View style={{ alignItems: 'center' }}>
              <Button onPress={() => doLogin()} title="Log In" />
            </View>
            <View alignItems="flex-end">
              <Button title='Forgot password?'/>
            </View>
          </View> :
            <View>
              <Button labelStyle={{ color: '#18C3C3' }} mode="contained" icon="account" style={commonStyles.googleBtn} onPress={() =>
                navigation.navigate('Sign up')
              } title='Sign up here' />
            </View>}
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
  },
  loginBottomCurve: {
    width: "34%",
    height: 100,
    position: "absolute",
    top: -50,
    left: "64%",
    borderRadius: 100,
    backgroundColor: "#fff",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
  child: {
    position: 'relative',
    bottom: 40
  }

});

export default connect(mapStateToProps)(Login);