import GameCard from "./GameCard";

const gamesList = [
  {
    id: 0,
    name: "Scythe", 
    rating: null, 
    category: "Fun"
  }, 
  {
    id: 0,
    name: "Machi Koro", 
    rating: null, 
    category: "Deck Building"
  }, 
  {
    id: 0,
    name: "Galaxy Trucker", 
    rating: null, 
    category: "Fun"
  }
]

function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      {gamesList.map( game => <GameCard game={game}/>)}
    </div>
  );
}

export default App;
