import './App.css';
import AboutMeAccordion from './components/AboutMeAccordion';
import Footer from './components/Footer';
import Box from './pages/contact';
import MyFolioCard from './pages/home';

function App() {
  return (
    <div className="App">

        <div className='flex row-auto'>
          <MyFolioCard />
       
        </div>

        <AboutMeAccordion />
        <Footer />
    
      
    </div>
  );
}

export default App;
