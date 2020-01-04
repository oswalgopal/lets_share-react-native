/**
 * main file for the react stack navigator
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Components/home/home';
import Admin from './Components/Admin/admin';
import user from './Components/user/user';
import PrivacyPolicy from './Components/privacy_policy/privacy_policy';
import Help from './Components/help/help';
import TermsAndCondition from './Components/T&C/terms_and_condition';
import ShowDataUser from './Components/ShowDataUser/ShowDataUser';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Admin: {screen: Admin},
  user: {screen: user},
  terms_and_condition: {screen: TermsAndCondition},
  privacypolicy: {screen: PrivacyPolicy},
  help: {screen: Help},
  ShowDataUser: {screen: ShowDataUser}
});

const App = createAppContainer(MainNavigator);

export default App;
