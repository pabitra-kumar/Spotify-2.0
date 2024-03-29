import {FaPauseCircle , FaPlayCircle} from 'react-icons/fa'


const PlayPause = ({isPlaying , activeSong , song , handlePlay , handlePause}) => (
  isPlaying && activeSong?.title === song.data.name ? (
    <FaPauseCircle
    size = {35}
    className=' text-gray-300'
    onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
    size={35}
    className='text-gray-300'
    onClick={handlePlay}
    />
  )
);

export default PlayPause;
