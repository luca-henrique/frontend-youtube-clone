import {RootState} from '..';
import youtubeService, {baseParams} from '../../../service';

export function searchVideo(search: any) {
  return (dispatch: any) => {
    dispatch(startSearchVideo());
    youtubeService('/search', {params: {...baseParams, q: search}})
      .then((data: any) => dispatch(requestSuccessVideo(data.data.items)))
      .catch(() => dispatch(requestVideoError()));
  };
}

export function startSearchVideo() {
  return {
    type: 'START_SEARCH_VIDEO',
    loading: true,
    erro: false,
  };
}

export function requestSuccessVideo(videos: any[]) {
  return {
    type: 'REQUEST_VIDEO_SUCCESS',
    videos,
    loading: false,
    erro: false,
  };
}

export function requestVideoError() {
  return {
    type: 'REQUEST_VIDEO_ERROR',
    loading: false,
    erro: true,
  };
}

export const {loading, data, erro} = (state: RootState) => state.search;
