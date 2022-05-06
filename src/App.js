import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map(card =>{
    return(
      <Card
        key = {card.id}
        {...card}
      />
    );
  });
  
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        {cards}
      </section>
      
    </div>
  );
}

export default App;
