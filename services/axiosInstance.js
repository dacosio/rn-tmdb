import axios from "axios";

const key = process.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "*/*",
  },
});

export const getMoviesByCategory = async (category) => {
  try {
    const response = await tmdbApi.get(`movie/${category}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    throw error;
  }
};
