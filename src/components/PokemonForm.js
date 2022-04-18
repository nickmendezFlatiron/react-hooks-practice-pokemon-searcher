import { React } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokeDex , pokeDex}) {

  function handleSubmit(e){
    e.preventDefault()
    
    const newPokemon = {
      name : e.target[0].value,
      hp : e.target[1].value ,
      sprites : {front : e.target[2].value , back : e.target[3].value }
    }
    
    fetch('http://localhost:3001/pokemon' , {
      method : "POST" ,
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then (() => setPokeDex([...pokeDex , newPokemon]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
