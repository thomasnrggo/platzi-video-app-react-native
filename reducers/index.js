import {
  combineReducers,
} from 'redux';
import navigation from './navigation';
import video from './videos';

const reducer = combineReducers({
  navigation,
  video,
});

export default reducer;
