

  function Joke({ joke }) {
    return (
        <li>
            
            <h2>{joke.category}</h2>
            <h2>{joke.type}</h2>
            <h2>{joke.setup}</h2>
            <h2>{joke.delivery}</h2>
            <h2>{joke.flags}</h2>
            <h2>{joke.id}</h2>
            <h2>{joke.safe}</h2>
            <h2>{joke.lang}</h2>
        </li>
    )
}

export default Joke;