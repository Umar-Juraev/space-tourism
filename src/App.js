
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
