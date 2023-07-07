import React from 'react';
import NavbarTop from '../components/NavbarTop'
import pdf from '../Img/pertemuan1.pdf'
import { Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Isi1 = () => {
  return (
    <div>
        <NavbarTop />
        <Container>
        <embed src={pdf} style={{paddingTop: '50px', paddingBottom: '50px'}} type="application/pdf" width="100%" height="500px" />
        <Button style={{marginBottom: '50px'}} as={Link} to='/' variant="primary">Menu Utama</Button>
        <Button style={{marginBottom: '50px', marginLeft: '50px'}} as={Link} to='/Isi2' variant="primary">Pertemuan 2</Button>
        </Container>
    </div>
  );
};

export default Isi1;
