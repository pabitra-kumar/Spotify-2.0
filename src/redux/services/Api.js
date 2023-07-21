import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': import.meta.env.VITE_SPOTIFY_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'spotify-data.p.rapidapi.com'
//   }
// };

// fetch('https://spotify-data.p.rapidapi.com/search/?q=Pop&type=multi', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify-data.p.rapidapi.com/search',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SPOTIFY_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/?q=Dance&type=multi&limit=30'})
  })
})

export const {
  useGetTopChartsQuery
} = spotifyApi;