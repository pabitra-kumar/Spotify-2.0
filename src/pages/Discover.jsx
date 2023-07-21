import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopChartsQuery } from "../redux/services/Api";



const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong , isPlaying  } = useSelector((state) => state.player);

    const {data, isFetching , error } = useGetTopChartsQuery();
    console.log(data);
    const genreTitle = "Pop";

    if(isFetching) return <Loader title="Loading songs ..." />;

    if(error) return <Error/> ;


    return (
        <div className="flex flex-col ">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center mt-4 mb-10">
                <h2 className="font-bold text-3xl
                 text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-sm rounded-lg p-3 text-gray-300 outline-0 sm:mt-0 mt-5 ">
                    {genres.map((genre) =>
                        <option key={genre.value} value={genre.title}>
                            {genre.title}
                        </option>
                    )}
                </select>
            </div>
            <div className="flex flex-wrap gap-8 sm:justify-start justify-center">
                {data.tracks.items.map((song, i)=>
                <SongCard 
                key={song.data.uri} 
                song={song} i={i}
                activeSong = {activeSong}
                isPlaying = {isPlaying}
                data = {data.tracks.items}
                />
                )}
            </div>
        </div>
    )
}


export default Discover;
