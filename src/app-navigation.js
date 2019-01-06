import {
  createStackNavigator,
} from 'react-navigation';
import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from './sections/components/header'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Movie: Movie,
    Category,
  },
  {
    defaultNavigationOptions: {
      header: Header,
    }
  }
);

export default AppNavigator;
