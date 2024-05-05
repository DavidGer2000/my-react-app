import './App.css';
import { Route, Routes, BrowserRouter } from
  'react-router-dom';
  
import AppHome from './pages/appHome';
import Abaout from './pages/abaout';
import Gallery from './pages/gallery';
import Contect from './pages/contect';
import FaQ from './pages/faq';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path='' element={<AppHome />} />
        <Route path='/abaout' element={<Abaout />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/conect' element={<Contect />} />
        <Route path='/faq' element={<FaQ />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
