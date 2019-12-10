/**
 * main file for the react stack navigator
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Components/home/home';
import Admin from './Components/Admin/admin';
import user from './Components/user/user';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Admin: {screen: Admin},
  user: {screen: user},
});

const App = createAppContainer(MainNavigator);

export default App;
