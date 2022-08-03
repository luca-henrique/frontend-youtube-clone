import {useDispatch} from 'react-redux';
import {List, Image} from 'semantic-ui-react';

import {playerVideo} from '../store/actions/player-video';

const VideoItem = ({video}) => {
  const dispatch = useDispatch();

  return (
    <List.Item onClick={() => dispatch(playerVideo(video))}>
      <Image src={video.snippet.thumbnails.default.url} />
      <List.Content>
        <List.Header>{video.snippet.title}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;
