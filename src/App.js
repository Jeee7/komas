import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import Home from './components/Home';
import Isi1 from './components/Isi1';
import Isi2 from './components/Isi2';
import Isi3 from './components/Isi3';
import Isi4 from './components/Isi4';
import Isi5 from './components/Isi5';
import Isi6 from './components/Isi6';
import Isi7 from './components/Isi7';
import Isi8 from './components/Isi8';
import Isi9 from './components/Isi9';
import Isi10 from './components/Isi10';
import Isi11 from './components/Isi11';
import Isi12 from './components/Isi12';
import Isi13 from './components/Isi13';
import Isi14 from './components/Isi14';
import Modul from './components/Modul'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Container fluid style={{padding: '0px'}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Isi1' element={<Isi1 />} />
        <Route path='/Isi2' element={<Isi2 />} />
        <Route path='/Isi3' element={<Isi3 />} />
        <Route path='/Isi4' element={<Isi4 />} />
        <Route path='/Isi5' element={<Isi5 />} />
        <Route path='/Isi6' element={<Isi6 />} />
        <Route path='/Isi7' element={<Isi7 />} />
        <Route path='/Isi8' element={<Isi8 />} />
        <Route path='/Isi9' element={<Isi9 />} /> 
        <Route path='/Isi10' element={<Isi10 />} />
        <Route path='/Isi11' element={<Isi11 />} />
        <Route path='/Isi12' element={<Isi12 />} />
        <Route path='/Isi13' element={<Isi13 />} />
        <Route path='/Isi14' element={<Isi14 />} /> 
        <Route path='/Modul' element={<Modul />} /> 

      </Routes>
    </Container>
  );
}

export default App;
