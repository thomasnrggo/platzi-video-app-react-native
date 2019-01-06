import {
  combineReducers,
} from 'redux';
import navigation from './navigation';
import video from './videos';
import user from './user'

const reducer = combineReducers({
  navigation,
  video,
  user
});

export default reducer;
