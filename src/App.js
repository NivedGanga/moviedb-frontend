import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Layout from './components/Layout';
import FavouritesPage from './pages/Favourites';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourites' element={<FavouritesPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
