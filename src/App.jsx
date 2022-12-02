
import './App.scss';


import Joke from './Components/Joke.jsx';


function App() {
    
fetch('https://in3.dev/knygos/')




return (
    <div className="App">
        <div className="App-header">
            </div> 
            
            <ul>
                {
                    Joke?.map(b => <li key={b.id}>
                        <img src={b.img} alt="book"></img>
                        <h2>{b.title}</h2>
                        <h2>{b.price}</h2>
                    </li>)
                  
                }
            </ul>
        </div>
)
};
export default App;
