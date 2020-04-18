import React from 'react';
import {
    AsyncStorage
} from '@react-native-community/async-storage';
export default class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the ExploreContainer screen or Auth screen
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'ExploreContainer' :
            'Login');
    };
    // Render any loading content that you like here
    render() {
        return null
    }
}