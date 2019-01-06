import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppNavigator from './src/app-navigation';
import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import Loading from './src/sections/components/loading';
import AppLayout from './src/app';

const AppRoot = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.navigation,
});
const AppWithNavigationState = connect(mapStateToProps)(AppRoot);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}
