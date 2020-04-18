import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/Login';
import LoggedInTabNavigator from '../navigation/LoggedInTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoadingScreen from '../screens/AuthLoading';

// createStackNavigator() crée l'arbre de navigation
// Le premier écran déclaré est l'écran de démarrage par défaut de l'application (ici LoginScreen)
const AuthNavigator = createStackNavigator(
  {
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login }
  }
)
const MainStackNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Auth: AuthNavigator,
    ExploreContainer: { screen: LoggedInTabNavigator },
  },
  {
    headerMode: 'screen', // Ce paramètre spécifie qu'on va définir des "header" (en-tête) pour chaque écran
    // grâce à la variable "navigationOptions"
  },
);
export default createAppContainer(MainStackNavigator);