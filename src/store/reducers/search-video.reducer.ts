const INITIAL_STATE = {
  videos: [],
  loading: false,
  erro: false,
};

export default function searchVideo(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case 'START_SEARCH_VIDEO':
      return {
        loading: true,
        videos: [],
        erro: false,
      };

    case 'REQUEST_VIDEO_SUCCESS':
      return {
        loading: false,
        videos: action.videos,
        erro: false,
      };

    case 'REQUEST_VIDEO_ERROR':
      return {
        loading: false,
        videos: [],
        erro: true,
      };

    default:
      return state;
  }
}
