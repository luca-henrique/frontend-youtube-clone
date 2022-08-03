import {combineReducers} from 'redux';

import search from './search-video.reducer';
import playerVideo from './player-video';

const rootReducer = combineReducers({
  search,
  playerVideo,
});

export default rootReducer;
