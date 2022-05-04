import './App.css';
import Header from './componets/Header';
import { Route, Routes } from 'react-router-dom';
import Feed from './componets/Feed';
import Book from './componets/Book';
import Home from './componets/Home';


function App() {
  return (
    <>
     <Header/>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/feed" element={<Feed />} />

      </Routes>
    </>
  );
}

export default App;
