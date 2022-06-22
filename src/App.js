import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Users, Contact } from './pages'
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
