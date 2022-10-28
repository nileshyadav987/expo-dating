import * as React from 'react';
import { Button, Text, View, Dimensions, StyleSheet, Image, TextInput, StatusBar } from 'react-native';
import { connect } from "react-redux";

import commonStyles from '../Styles/style'


const { width } = Dimensions.get('window')

function SignupForm(props) {
    const [email, setEmail] = React.useState("");

    return (
        <View style={commonStyles.container}>
            <TextInput
                label="Username"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="Username"
            />
            <TextInput
                label="First Name"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="First Name"
            />
            <TextInput
                label="Last Name"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="Last Name"
            />
            <TextInput
                label="Email Address"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="Email Address"
            />
            <TextInput
                label="Password"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="Password"
            />
            <TextInput
                label="Repeat Password"
                value={email}
                onChangeText={v => setEmail(v)}
                style={commonStyles.commonInput}
                underlineColor="transparent"
                placeholder="Repeat Password"
            />
            <Button onPress={() => doLogin()} title='Done' />
        </View>
    )
}
export default (SignupForm);