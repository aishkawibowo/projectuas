import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import image1 from './assets/images/website-perusahaan-company-profile-web-javawebmedia1.jpg';
import image2 from './assets/images/instagram-kursus-statistik-javawebmedia.png';
import image3 from './assets/images/web-development-javawebmedia11.png';
import image4 from './assets/images/logo-persegi-panjang.png';
import image5 from './assets/images/Kursus_Desain_Grafis.jpg';
import image6 from './assets/images/web-application-pendaftaran-online-javawebmedia.jpg';
import image7 from './assets/images/web-development-javawebmedia1.png';

const images = {
  'website-perusahaan-company-profile-web-javawebmedia1.jpg': image1,
  'instagram-kursus-statistik-javawebmedia.png': image2,
  'web-development-javawebmedia11.png': image3,
  'logo-persegi-panjang.png': image4,
  'Kursus_Desain_Grafis.jpg': image5,
  'web-application-pendaftaran-online-javawebmedia.jpg': image6,
  'web-development-javawebmedia1.png': image7,
};

const Item = ({ item }) => {
  const imageUrl = images[item.gambar];

  return (
    <Card className="Card" style={{ width: '18rem', marginBottom: '20px' }}>
      {imageUrl && <Card.Img variant="top" src={imageUrl} alt={item.judul_berita} />}
      <Card.Body className="Card-Body">
        <div className="Card-Content">
          <Card.Title className="Card-Title">{item.judul_berita}</Card.Title>
          <Card.Text className="Card-Text">
            <strong>Category:</strong> {item.jenis_berita}
          </Card.Text>
          <Card.Text className="Card-Text">
            <strong>Summary:</strong> {item.ringkasan}
          </Card.Text>
          <Card.Text className="Card-Text">
            <strong>Keywords:</strong> {item.keywords}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
