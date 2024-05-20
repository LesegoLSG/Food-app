import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';
import Footer from './Components/Footer';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeadlineCards />
      <About />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
