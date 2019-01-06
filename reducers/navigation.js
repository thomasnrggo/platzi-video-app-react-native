import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../src/app-navigation';
const navReducer = createNavigationReducer(AppNavigator)

export default navReducer;
