import { createStore, applyMiddleware, } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducers/index';
import storage from 'redux-persist/lib/storage';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}


const persistedReducer = persistReducer(
  persistConfig,
  reducer,
  applyMiddleware(middleware),
)


const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };
