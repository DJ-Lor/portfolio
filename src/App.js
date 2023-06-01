import './App.css';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import JokeGenerator from './components/JokeGenerator';
import NavBar from './components/NavBar';
import DevTools from './components/DevTools';
import Accordion from './components/AboutMeAccordion';




function App() {
  return (
    <div className="App">

      <NavBar />

      <Introduction />

      <JokeGenerator />

      <Accordion />

      <DevTools />

      <JokeGenerator />

      <Footer />
    
      
    </div>
  );
}

export default App;
