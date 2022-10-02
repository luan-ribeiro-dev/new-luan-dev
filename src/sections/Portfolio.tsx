import React from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const PortfolioBox: React.FC<{id:string, image:string, title:string}> = ({id, image, title, children}) => {
  console.log(image)
  return (
    <div className='portfolio-box' id={id}>
      <div className="image" style={{backgroundImage: `url("${image}")`}} />
      <div className="wrapper">

        <div className='description-div'>
          <div className="title-div">
            <h5>{title}</h5>
            <i className="fas fa-external-link-alt ps-2"></i>
          </div>
          <div className="description">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" image="/assets/img/notebook2.jpeg">
      <SectionDescription title="Portfolio" id="portfolio-title" />
      <div id="portfolio-wrapper">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox 
              id="lz-facilities"
              image="/assets/img/lz_prints/1.png"
              title="LZ Facilities"
            >
              <p>
                LZ Facilities is a ERP web software for management and automation the routines of a cleaning service provider.
                <br />
                <br />
                It is a big software with many resoucers and functions, the highlights being: Management of Contracts, Contrats Profits, Management of activities and tasks, Management of stock, Chat, Digital Point, Bus costs.
              </p>
            </PortfolioBox>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox 
              id="afarprodutora"
              image="/assets/img/afarprodutora_prints/face.jpg"
              title="AFAR Produtora"
            >
              <p>
                AfarProdutora is a Brazilian Anime event Managment.
                <br />
                <br />
                They hired me to fix bugs and add new funcionalities. It was a great experience. I did things like payment gateway, shipping bug issues, charts, Master Password, Logs and few other things.
              </p>
            </PortfolioBox>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
