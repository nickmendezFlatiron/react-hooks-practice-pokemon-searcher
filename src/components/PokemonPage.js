import {React , useState , useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeDex , setPokeDex] = useState([])
  const [search , setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemon => setPokeDex(pokemon))
  } , [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokeDex={setPokeDex} pokeDex={pokeDex}/>
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokeDex={pokeDex} search={search}/>
    </Container>
  );
}

export default PokemonPage;
