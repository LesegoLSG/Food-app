import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
