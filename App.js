/**
 * main file for the react stack navigator
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Components/home';
import Admin from './Components/Admin/admin';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Admin: {screen: Admin}
});


const App = createAppContainer(MainNavigator);

export default App;
