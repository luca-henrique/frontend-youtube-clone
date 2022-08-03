import {Input, Segment} from 'semantic-ui-react';

import {searchVideo} from '../store/actions/search-video';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

type SearchVideoProps = {
  keyCode: number;
} & React.ChangeEvent<HTMLInputElement> &
  React.KeyboardEvent<HTMLImageElement>;

const SearchBar = () => {
  const dispatch = useDispatch();

  function searchVideoEvent(event: SearchVideoProps) {
    if (event.keyCode === 13) {
      dispatch(searchVideo(event.target.value));
    }
  }

  useEffect(() => {
    dispatch(searchVideo('ReactJs'));
  }, []);

  return (
    <div className='search-bar'>
      <Segment stacked>
        <Input
          icon='search'
          className='ui input'
          type='text'
          placeholder='Search...'
          onKeyDown={searchVideoEvent}
        />
      </Segment>
    </div>
  );
};

export default SearchBar;
