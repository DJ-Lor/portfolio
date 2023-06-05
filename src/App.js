import './App.css';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import JokeGenerator from './components/JokeGenerator';
import NavBar from './components/NavBar';
import DevTools from './components/DevTools';
import Accordion from './components/AboutMeAccordion';


function App() {
  return (
    <div className="font-google px-10">

      <Introduction />

      <JokeGenerator />

      <DevTools />

      <Accordion />

    

      <JokeGenerator />

      <Footer />
    
      
    </div>
  );
}

export default App;
