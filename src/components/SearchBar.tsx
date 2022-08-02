import {Input, Segment} from 'semantic-ui-react';

type SearchVideoProps = {
  keyCode: number;
} & React.ChangeEvent<HTMLInputElement> &
  React.KeyboardEvent<HTMLImageElement>;

const SearchBar = () => {
  function searchVideo(event: SearchVideoProps) {
    console.log(event);
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  }

  return (
    <div className='search-bar'>
      <Segment stacked>
        <Input
          icon='search'
          className='ui input'
          type='text'
          placeholder='Search...'
          onKeyDown={searchVideo}
        />
      </Segment>
    </div>
  );
};

export default SearchBar;
