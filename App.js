/**
 * main file for the react stack navigator
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Components/home';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
});

const App = createAppContainer(MainNavigator);

export default App;
