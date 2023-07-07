import React from 'react';
import NavbarTop from './NavbarTop'
import pdf from '../Img/pertemuan14.pdf'
import { Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Isi14 = () => {
  return (
    <div>
        <NavbarTop />
        <Container>
        <embed src={pdf} style={{paddingTop: '50px', paddingBottom: '50px'}} type="application/pdf" width="100%" height="500px" />
        <Button style={{marginBottom: '50px'}} as={Link} to='/Isi13' variant="primary">Pertemuan 13</Button>
        <Button style={{marginBottom: '50px', marginLeft: '50px'}} as={Link} to='/' variant="primary">Halaman Utama</Button>
        </Container>
    </div>
  );
};

export default Isi14;
