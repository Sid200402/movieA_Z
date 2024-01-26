import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGYwYTYwZDZmZjdmNzU5MzUzMDdhNWRmY2E0YWU2MiIsInN1YiI6IjY1YjExMDMwYTMxNDQwMDEzODVhN2ViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cF5aIgVifFfmRzbBaPvUPwTUbsyVsQClQE4giMWRJE";
const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGYwYTYwZDZmZjdmNzU5MzUzMDdhNWRmY2E0YWU2MiIsInN1YiI6IjY1YjExMDMwYTMxNDQwMDEzODVhN2ViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cF5aIgVifFfmRzbBaPvUPwTUbsyVsQClQE4giMWRJE'
};
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};