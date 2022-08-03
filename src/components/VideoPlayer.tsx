import {useSelector} from 'react-redux';

import {Advertisement, Embed} from 'semantic-ui-react';
import {video} from '../store/reducers/player-video';

const VideoPlayer = () => {
  const data = useSelector(video);

  return (
    <div className='video-player'>
      {data.id ? (
        <div>
          <Embed id={data.id.videoId} source='youtube' />
          <p>{data.snippet.title}</p>
          <p>{data.snippet.description}</p>
        </div>
      ) : (
        <>
          <Advertisement
            style={{height: '430px'}}
            unit='top banner'
            test='Escolha um video para reproduzir'
          />
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
