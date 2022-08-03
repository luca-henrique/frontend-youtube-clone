const API_KEY = 'AIzaSyD9gtvaiKJd_bRDVgSPTFsIbSgJlwDzz6w';

import axios from 'axios';

export const baseParams = {
  part: 'snippet',
  maxResults: 10,
  key: API_KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
