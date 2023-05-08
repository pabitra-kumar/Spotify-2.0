import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '4bc7008148msh4978285e0f30787p145ec2jsn4d4aa051c0a3',
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
      headers.set('X-RapidAPI-Key', '4bc7008148msh4978285e0f30787p145ec2jsn4d4aa051c0a3');
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