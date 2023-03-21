import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContinentsPage from './components/ContinentsPage';
import Countries from './components/Countries';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

const  App = () => {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<ContinentsPage/>} />
      <Route path="/:name" element={<Countries />} />
      <Route path="/:name/:id" element={<CountryDetails />} />
    </Routes>
    <Footer />
    </div>
  )
}
export default App;
