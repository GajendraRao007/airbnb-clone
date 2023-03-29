import './App.css';
import Navbar from './Navbar';
import Hero from './hero';
import Card from './card';
import data from './data';

export default function App() {
  // <Hero />
const cards = data.map(item => {
return (
  <Card 
  key={item.id}
  item={item}
  />
)
})        

return (
<div>
  <Navbar />
  <Hero />
  <section className="cardslist">
                {cards}
            </section>
</div>
)
}