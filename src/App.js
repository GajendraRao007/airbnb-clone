import './App.css';
import Navbar from './Navbar';
import Hero from './hero';
import Card from './card';

function App() {
  // <Hero />
  return (
   <div>
      <Navbar />
      <Card 
       img="katie-zaferes.png"
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life Lessons with Katie Zaferes"
       price={136}
      />
   </div>
  )
}

export default App;
