import {
  createStackNavigator,
} from 'react-navigation';
import Loading from './sections/components/loading'

const AppNavigator = createStackNavigator(
  {
    Home: Loading
  }
);

export default AppNavigator;
