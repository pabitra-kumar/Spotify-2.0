import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from "../redux/features/playerSlice";


const SongCard = ({ song, activeSong , isPlaying , i, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song , data , i}));
    dispatch(playPause(true));
  }

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 rounded-lg bg-opacity-80 cursor-pointer backdrop-blur-sm animate-slideup">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
        ${activeSong?.data?.name == song.data.name
          ? 'flex bg-black bg-opacity-70'
          : 'hidden'}`}>

        <PlayPause 
        activeSong  = {activeSong}
        isPlaying = {isPlaying}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        />
      </div>
      <img src={song.data.albumOfTrack.coverArt.sources[0].url} alt="song_img" />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="truncate font-semibold text-white text-lg">
        <Link to={`/songs/${song?.data?.id}`}>
        {song.data.name}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={song.data.artists ? `/artists/${song?.data?.artists?.items[0]?.uri}` : '/top-artists'}>
        {song.data.artists.items[0].profile.name}
        </Link>
      </p>
    </div>
  </div>
  );
};

export default SongCard;
