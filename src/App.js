import './App.css';
import Leaderboard from './pages/Leaderboard';
function App() {
  //this is an array of obejcts, we will use it to dynamically render users and their points to the screen
  const competitors = [
    {
      name: "asa",
      points: 10,
    },
    {
      name: "meli",
      points: 15,
    },
    {
      name: "alexiana",
      points: 34,
    },
    {
      name: "eyerusalem",
      points: 24,
    },
    {
      name: "dipin",
      points: 4,
    },
  ];
  return (
    <div className="App">
       { /*this is where the props is being called. notice the name is competitors */}
      <Leaderboard competitors={competitors} />
    </div>
  );
}

export default App;
