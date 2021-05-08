import React from 'react'
import { getPokemonDetails } from '../../src/services/pokemonServices';

const SinglePokemon = (props) => {

    const {pokemonDetails} = props

    return (
        <div>
            <p>POKEMON DETAILS</p>
            <p>{JSON.stringify(pokemonDetails)}</p>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const url = `pokemon-species/${query.name}`
    const res = await getPokemonDetails(url);
    return {
      props: { pokemonDetails: res.data }
    };
};

export default SinglePokemon
