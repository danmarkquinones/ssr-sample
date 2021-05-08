import Link from 'next/link'
import React, {useState , useEffect} from 'react'
import { getPokemonDetails, } from '../src/services/pokemonServices'
import { useRouter } from 'next/router'


export const getServerSideProps = async ({query}) => {
    try{
        const url = `pokemon-species/${query.keyword}`
        const res = await getPokemonDetails(url)
        return {
            props: { pokemonDetails: res.data}
        };
    }catch(e){
        return {
            props: { pokemonDetails: null}
        };
    }
    
}

const Search = (props) => {

    const {pokemonDetails}=props
    const router = useRouter()

    const handleClick = () =>{
        // router.push(`/search?offset=10&limit=10`)
        var query = router.asPath + `&page=1`
        router.push(query)
    }

    return (
        <div>
            <p>SEARCH RESULT</p>
            <button onClick={handleClick}>GENERATE POKEMON</button>
            {pokemonDetails?
                <p>{JSON.stringify(pokemonDetails)}</p>
            :<p>NO RESULT</p>}
        </div>
    )
}

export default Search

