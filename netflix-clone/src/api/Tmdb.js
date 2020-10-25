const API_KEY = "d3c7f107acf7c1f65719a9e559d18926"
const API_BASE = "https://api.themoviedb.org/3"


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originaux Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recommandé',
                items: await basicFetch(`/trending/all/week?language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Les meilleurs',
                items: await basicFetch(`/movie/top_rated?language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédie',
                items: await basicFetch(`/discover/movie?with_genres=35&language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horreur',
                items: await basicFetch(`/discover/movie?with_genres=27&language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=fr-FR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaires',
                items: await basicFetch(`/discover/movie?with_genres=99&language=fr-FR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=fr-FR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=fr-FR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
};