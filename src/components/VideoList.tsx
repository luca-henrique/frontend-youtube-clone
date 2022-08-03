import {useSelector} from 'react-redux';

import {List, Dimmer, Loader} from 'semantic-ui-react';

import VideoItem from './ItemVideo';

const VideoList = () => {
  const {videos, loading, erro} = useSelector((state) => state.search);

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader size='medium'>Carregando...</Loader>
      </Dimmer>
    );
  }
  return (
    <div className='video-list'>
      <List animated verticalAlign='middle'>
        {videos.map((video) => {
          return <VideoItem video={video} key={video.etag} />;
        })}
      </List>
    </div>
  );
};

export default VideoList;
