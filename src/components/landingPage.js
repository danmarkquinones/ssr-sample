import React,{useEffect , useState} from 'react'
import { fetchPokemon, loadMorePokemon } from '../services/pokemonServices'
import {Grid} from "@material-ui/core"
import PokemonCard from './pokemonCard'

export const getServerSideProps = async () => {
    try{
      const res = await fetchPokemon(0,12)
      return {
        props:{
          data:res.data
        }
      }
    }catch(e){
      return {
        props:{
          data:null
        }
      }
    }
  }

const LandingPage = (props) => {

    const {data} = props
    const [pokemons , setPokemons] = useState([])
    const [nextPage , setNextPage] = useState("")

    useEffect(() => {
        if(data){
            setPokemons(data.results)
            setNextPage(data.next)
        }
    }, [])

    

    const loadMore = async () => {
        const res = await loadMorePokemon(nextPage)
        setNextPage(res.data.next)
        setPokemons([...pokemons,...res.data.results])
    }

    return (
        <div style={{padding:"20px"}}>
            POKEMON
            <Grid container spacing={1}>
                {pokemons.map((pokemon,index)=>
                    <Grid item md={3} key={index}>
                        <PokemonCard pokemon={pokemon}/>
                    </Grid>
                )}
            </Grid>
            {/* <button onClick={loadMore}>LOAD MORE</button> */}
        </div>
    )
}

export default LandingPage
