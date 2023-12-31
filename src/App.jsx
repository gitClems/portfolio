import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import './css/App.css'
import Navbar from './components/navbar';
import person from './data/users.json';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Navbar name={person.name} />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer
        name={person.name}
        year={person.year}
        tel={person.tel}
        linkedIn={person.linkedIn}
        gitHub={person.gitHub}
        adress={person.adress}
      >
      </Footer>
    </div>
  );
}

export default App;
