import axios from "axios";
import qs from "qs";

const key = process.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "*/*",
  },
});

export const getMovies = async (category, page = 1) => {
  try {
    const response = await tmdbApi.get(`movie/${category}`, {
      params: { api_key: key, page },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    throw error;
  }
};

export const getMoviesBySearch = async (movieType, query, page = 1) => {
  try {
    const response = await tmdbApi.get(`search/${movieType}`, {
      params: {
        api_key: key,
        query: query,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching ${movieType} movies:`, error);
    throw error;
  }
};

export const getTvShows = async (category, page = 1) => {
  try {
    const response = await tmdbApi.get(`tv/${category}`, {
      params: { api_key: key, page },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} TV shows:`, error);
    throw error;
  }
};
