import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

const  App = () => {
  return <main className="main-container">
  <Routes>
  <Route exact path="/" element={<Header />}></Route>
  </Routes>
  </main>;
}
export default App;
