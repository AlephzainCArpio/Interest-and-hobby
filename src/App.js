import React from 'react';  
import { Layout, Typography, Card, Row, Col, Carousel } from 'antd';  
import 'antd/dist/reset.css';  
import './App.css';  
  
import chickenAdobo from './chicken-adobo.jpg';  
import kareKare from './Kare-Kare.jpg';  
import pancitBato from './Pancit-bato.jpeg';  
import guiltyCrown from './Guilty_Crown.jpg';  
import charlotte from './Charlotte.png';  
import youjoSenki from './Youjo_Senki.jpg';  
import ml from './ML.jpg';  
import wildRift from './WildRift.jpg';  
import genshin from './Genshin.jpg';  
  
const { Content, Footer } = Layout;  
const { Title, Paragraph } = Typography;  
  
const interests = [  
  {  
   title: 'Eating',  
   description: 'I enjoy eating different types of food and trying new dishes.',  
   images: [  
    chickenAdobo,  
    kareKare,  
    pancitBato,  
   ],  
  },  
  {  
   title: 'Watching Anime',  
   description: 'Anime is my favorite pastime.',  
   images: [  
    guiltyCrown,  
    charlotte,  
    youjoSenki,  
   ],  
  },  
  {  
   title: 'Gaming',  
   description: 'Playing adventure and strategy games during free time.',  
   images: [  
    ml,  
    wildRift,  
    genshin,  
   ],  
  },  
];  
  
function App() {  
  return (  
   <Layout className="layout">  
    <Content style={{ padding: '50px', backgroundColor: '#f0f0f0' }}>  
      <Title level={2} className="main-title" style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>  
       Welcome to My World!  
      </Title>  
      <Paragraph className="main-description" style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px', color: '#666' }}>  
       Here are some of my favorite interests and hobbies that make life exciting:  
      </Paragraph>  
      <Row gutter={[24, 24]}>  
       {interests.map((interest, index) => (  
        <Col xs={24} sm={12} md={8} key={index}>  
          <Card  
           className="custom-card"  
           bordered={false}  
           style={{  
            borderRadius: '10px',  
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',  
            padding: '20px',  
            height: '100%',  
            display: 'flex',  
            flexDirection: 'column',  
           }}  
          >  
           <Carousel autoplay className="image-carousel" style={{ flex: 1, marginBottom: '20px' }}>  
            {interest.images.map((image, idx) => (  
              <img  
               key={idx}  
               src={image}  
               alt={`$${interest.title}$$ {idx + 1}`}  
               className="carousel-image"  
               style={{  
                width: '100%',  
                height: '100%',  
                objectFit: 'contain',  
                borderRadius: '10px',  
               }}  
              />  
            ))}  
           </Carousel>  
           <Title level={4} className="card-title" style={{ marginTop: 'auto', fontWeight: 'bold', color: '#333' }}>  
            {interest.title}  
           </Title>  
           <Paragraph className="card-description" style={{ fontSize: '16px', color: '#666' }}>  
            {interest.description}  
           </Paragraph>  
          </Card>  
        </Col>  
       ))}  
      </Row>  
    </Content>  
    <Footer  
      style={{  
       textAlign: 'center',  
       padding: '20px',  
       backgroundColor: '#333',  
       color: '#fff',  
      }}  
      className="custom-footer"  
    >  
      Created For Lab Activity  
    </Footer>  
   </Layout>  
  );  
}  
  
export default App;
