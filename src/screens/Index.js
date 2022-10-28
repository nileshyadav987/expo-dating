import * as React from 'react';
import { Text, View } from 'react-native';
import Home from "./Home";
import Login from "./Login";
import { connect } from "react-redux";
import commonStyles from '../Styles/style'

function Index(props) {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    if (props.isLoggedIn) {
      setToken("test");
    }
  }, [props.isLoggedIn]);

  React.useEffect(() => {

  }, []);
  return (token ? <View style={commonStyles.loginContainer}><Home /></View> : <View style={commonStyles.loginContainer}><Login /></View>);
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(Index);