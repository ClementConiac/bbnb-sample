import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import stylesCo from './stylesCo';
import Input from '../components/Input'; //Intégration du composants Input
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native'

export default class Login extends Component {
  state = {
    displayPassword: false,
  };

  login = () => {
    const { password, email } = this.state
    return fetch('https://bbnb-booking.now.sh/api/users/signIn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // sauvegarde du token dabs le local storage
        return AsyncStorage
          .setItem('userToken', response.authorization)
          .then(() => {
            this.props.navigation.navigate('ExploreContainer')
          })
      })
  }

  static navigationOptions = ({ navigation }) => ({
    header: props => (
      <View style={stylesCo.containerConnect}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={20} style={stylesCo.iconclose} name="arrow-left"></Icon>
        </TouchableOpacity>
        <Text style={stylesCo.connect}>Mot de passe oublié ?</Text>
      </View>
    ),
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={stylesCo.structGlobal}>
        <Text style={stylesCo.titre}>Connexion</Text>
        <Input title={'Adresse e-mail'} textInputType={'email'} />
        <Input title={'Mot de passe'} textInputType={'password'} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ExploreContainer')}
          style={stylesCo.scrollArrow}>
          <Icon size={35} style={stylesCo.icongo} name="angle-right"></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}
