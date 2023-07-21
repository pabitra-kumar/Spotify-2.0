import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.data.albumOfTrack.coverArt.sources[0].url} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.data.name ? activeSong?.data.name : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.data?.artists?.items[0] ? activeSong?.data?.artists?.items[0]?.profile?.name : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
