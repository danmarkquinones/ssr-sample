import React , {useEffect , useState} from 'react'
import { getPokemonDetails } from '../services/pokemonServices'
import Link from 'next/link'

const PokemonCard = (props) => {

    const {pokemon} = props
    const [details , setDetails] = useState()

    const getDetails = async () => {
        // const url = `pokemon-species/${pokemon.name}`
        const res = await getPokemonDetails(pokemon.url)
        setDetails(res.data)
    }

    useEffect(() => {
        if(pokemon){
            getDetails()
        }
    }, [pokemon])

    console.log(details)

    return (
        <div style={{border:"1px solid black"}}>
            {details?
                <div style={{display:"flex"}}>
                    <img src={details.sprites.other.["official-artwork"].front_default} height="100px"  width="100px"/>

                    <Link
                        href={`/pokemon/${pokemon.name}`}
                    >
                        <p>{details.name}</p>
                    </Link>
                </div>
            :<p>LOADING...</p>}
        </div>
    )
}

export default PokemonCard
