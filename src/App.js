import './App.css';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import JokeGenerator from './components/JokeGenerator';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import MyFolioCard from './pages/home';




function App() {
  return (
    <div className="App">

      <NavBar />

      <Introduction />

      <JokeGenerator />

      <Skills />

      <MyFolioCard />

      <Footer />
    
      
    </div>
  );
}

export default App;
