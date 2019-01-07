import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Search from './screens/containers/search'
import Header from './sections/components/header'
import About from './screens/containers/about'
import Lucky from './screens/containers/lucky'
import Profile from './screens/containers/profile'
import Icon from './sections/components/icon'
import Login from './screens/containers/login'
import Loading from './screens/containers/loading'

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie,
    Category,
    Search,
  },
  {
    defaultNavigationOptions: {
      header: Header,
    }
  }
);

const tabNavigator =  createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="X" />,
      }
    },
    About: {
      screen: About,
    },
    Lucky: {
      screen: Lucky,
    },
    Profile: {
      screen: Profile,
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721',
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: tabNavigator,
    Login: Login,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default SwitchNavigator;
