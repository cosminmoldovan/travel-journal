import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        <Card />
      </section>
      
    </div>
  );
}

export default App;
