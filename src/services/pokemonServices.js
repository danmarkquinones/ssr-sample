import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://pokeapi.co/api/v2/',
};

export const fetchPokemon = (offset , limit) => {
    return axios.get(`pokemon?offset=${offset}&limit=${limit}` , axiosConfig)
}

export const loadMorePokemon = (url) => {
    return axios.get(url)
}

export const getPokemonDetails = (url) => {
    return axios.get(url, axiosConfig)
}