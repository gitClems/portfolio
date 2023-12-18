// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';

function App() {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      {/* <Navbar></Navbar> */}
       <BrowserRouter>
        <Routes>
          <Route  path='/' index element={<Home />} />
          <Route  path='/work' element={<Work />} />
          <Route  path='/about' element={<About />} />
        </Routes>
      </BrowserRouter> 
     </div>
  );
}

export default App;
