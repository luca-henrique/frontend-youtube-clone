import {RootState} from '..';

const INITIAL_STATE = {
  video: {},
};

export default function playerVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYER_VIDEO':
      return {
        video: action.video,
      };
    default:
      return state;
  }
}

export const video = (state: RootState) => state.playerVideo.video;
