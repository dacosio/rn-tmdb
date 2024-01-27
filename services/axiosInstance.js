import axios from "axios";

const key = process.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "*/*",
  },
});

export const getMovies = async (category) => {
  try {
    const response = await tmdbApi.get(`movie/${category}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    throw error;
  }
};

export const getMoviesBySearch = async (movieType, qs) => {
  try {
    const response = await tmdbApi.get(`search/${movieType}`, {
      params: {
        api_key: key,
        query: qs,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${movie} movies:`, error);
    throw error;
  }
};

export const getTvShows = async (category) => {
  try {
    const response = await tmdbApi.get(`tv/${category}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    throw error;
  }
};

export const getDetail = async (id) => {
  try {
    const response = await tmdbApi.get(`list/${id}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    throw error;
  }
};

export const getPerson = async (personId) => {
  try {
    const response = await tmdbApi.get(`person/${personId}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} person:`, error);
    throw error;
  }
};
