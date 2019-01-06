import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from './sections/components/header'
import About from './screens/containers/about'
import Lucky from './screens/containers/lucky'
import Profile from './screens/containers/profile'
import Icon from './sections/components/icon'

const Main = createStackNavigator(
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

const tabNavigator =  createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon=":)" />,
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

export default tabNavigator;
