import Container from 'react-bootstrap/Container';
import '../components/HomeStyling.css'
import NavbarTop from '../components/NavbarTop'
import Content1 from '../components/Content1'

function Home() {
  return (
   
    <div>
      
        <NavbarTop />
          <Container>
            <h1 className='h1-home'>Rangkuman Tugas Komas Pertemuan 1 - 14</h1>
          <Content1 />
        </Container>

       
    </div>
        
  );
}

export default Home;