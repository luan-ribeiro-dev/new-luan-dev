import React, { useEffect, useState } from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const PortfolioBox: React.FC<{id:string, image:string, title:string, onClick: Function, tags?:string[]}> = ({id, image, title, onClick, tags, children}) => {
  return (
    <div className='portfolio-box' id={id} onClick={() => onClick(id)}>
      <div className="image" style={{backgroundImage: `url("${image}")`}} />
      <div className="wrapper">

        <div className='description-div'>
          <div>
            <div className="title-div">
              <h5>{title}</h5>
              <i className="fas fa-external-link-alt ps-2"></i>
            </div>
            <div className="description">
              {children}
            </div>
          </div>
          {tags && (
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={tag+index}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface Iportfolios {
  title: string;
  images: string[];
  description: JSX.Element;
}

const portfolios:{[key: string]: Iportfolios} = {
  skinmedicinals: {
    title: "Skin Medicinals",
    images: [
      "/assets/img/skinmedicinals/1.png",
      "/assets/img/skinmedicinals/2.png",
      "/assets/img/skinmedicinals/3.png",
      "/assets/img/skinmedicinals/4.png",
    ],
    description: (
      <React.Fragment>
        <p>
          Skin Medicinals is a CRM/ERP application for the management of patients prescriptions
        </p>
        <p>
          I worked with a team of developers and my job was to fix bugs and implement
          features following the project leader instructions.
        </p>
        <p>
          It was developed with Laravel, ReactJS and MySQL.
        </p>
        <p>
          The purpuse of this application is to allow doctors to give skin prescriptions for patients
          treatments. The main features includes buy/shipping of the prescription, reminders,
          autoreffils, dep contracts and analytics
        </p>
      </React.Fragment>
    )
  },
  stonealgo: {
    title: "StoneAlgo",
    images: [
      "/assets/img/stonealgo/1.png",
      "/assets/img/stonealgo/2.png",
      "/assets/img/stonealgo/3.png",
      "/assets/img/stonealgo/4.png",
    ],
    description: (
      <React.Fragment>
        <p>
          StoneAlgo is a CRM application, E-Commerce of diamonds
        </p>
        <p>
          I worked with a team of developers and my job was to fix bugs and implement
          features following the project leader instructions.
        </p>
        <p>
          It was developed with Django, Twig and MySQL.
        </p>
        <p>
          The purpuse of this application is to sell jewelry to customers. 
          The main features includes jewelry comparation, filters, alerts and management of 
          appointments and diamonds
        </p>
      </React.Fragment>
    )
  },
  lzfacilities: {
    title: "LZ Facilities",
    images: [
      "/assets/img/lz_prints/1.png",
      "/assets/img/lz_prints/2.png",
      "/assets/img/lz_prints/3.png",
      "/assets/img/lz_prints/4.png",
      "/assets/img/lz_prints/5.png",
      "/assets/img/lz_prints/6.png",
      "/assets/img/lz_prints/7.png",
      "/assets/img/lz_prints/8.png",
      "/assets/img/lz_prints/9.png",
    ],
    description: (
      <React.Fragment>
        <p>
          LZ Facilities is a ERP software for management and automation of
          the routines of a cleaning service provider.
        </p>
        <p>
          I developed this software by my self following the client instructions and feedback. <br/>
        </p>

        <p>  
          It was developed with PHP OOP and MySQL. Since the client requested pure PHP 
          and no framework, I created a <span className="green-text">MVC structure </span>
          similar to the Laravel framework in order to keep the <span className="green-text">readability</span> and organized code.
        </p>  
        
        <p>  
          The main functionality of this software includes the management of contracts, profits, activities,
          tasks, stocks, chat, digital punch in and bus costs.
        </p>
      </React.Fragment>
    )
  },
  afarprodutora: {
    title: "AFAR Produtora",
    images: [
      "/assets/img/afarprodutora_prints/1.png",
      "/assets/img/afarprodutora_prints/2.png",
      "/assets/img/afarprodutora_prints/3.png",
      "/assets/img/afarprodutora_prints/4.png",
      "/assets/img/afarprodutora_prints/5.png",
    ],
    description: (
      <React.Fragment>
        <p>
          AFAR Produtora is a ERP/CRM software, anime event ticket seller.
        </p>
        <p>
          I was hired to fix few bugs and implement features in the admin panel. <br/>
        </p>

        <p>  
          It was developed with Laravel and MySQL. 
        </p>  
        
        <p>  
          The purpuse of this application is to sell tickets and give info about anime events.
          The main feature includes buy/management of tickets and analytical charts.
        </p>
      </React.Fragment>
    )
  }
}

const Modal: React.FC<{portfolioId:string, setPortfolio:Function}> = ({portfolioId, setPortfolio}) => {
  let [imageCounter, setImageCounter] = useState(0)

  if(!portfolios[portfolioId]) {
    return null
  }

  const {title, images, description} = portfolios[portfolioId]

  const nextImage = () => {
    let i = imageCounter + 1
    
    if (i > images.length - 1) {
      i = 0
    }

    setImageCounter(i)
  }
  
  const previousImage = () => {
    let i = imageCounter - 1
    
    if (i < 0) {
      i = images.length - 1
    }

    setImageCounter(i)
  }

  return (
    <div className="modal">
      <div className="column">
        <div className="row">
          <div className="icon">
            <i className="fas fa-arrow-left" onClick={previousImage}></i>
          </div>
          <div className="image-wrapper">
            <header>
              <h1>{title}</h1>
              <i className="fas fa-times" onClick={() => {
                setImageCounter(0)
                setPortfolio("")
              }}></i>
            </header>
            <div className="image-list">
              {images[imageCounter] && (
                <div className="image" style={{backgroundImage: `url("${images[imageCounter]}")`}} />
              )}
            </div>
          </div>
          <div className="icon">
            <i className="fas fa-arrow-right" onClick={nextImage}></i>
          </div>
        </div>
        <div className="points">
          {images.map((image, index) => (
            <i key={`${image}-${index}`} className={`fas fa-circle ${index == imageCounter ? "active" : ""}`}></i>
          ))}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    </div>
  )
}

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState("")

  return (
    <Section id="portfolio" image="/assets/img/notebook2.jpeg">
      <SectionDescription title="Portfolio" id="portfolio-title" />
      <div id="portfolio-wrapper">
        <div className="row">
          {/* Skin Medicinals */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox
              id="skinmedicinals"
              image="/assets/img/skinmedicinals/1.png"
              title="Skin Medicinals"
              tags={["Laravel", "ReactJS", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                CRM/ERP application. <br/>
                Online management of patient prescriptions
              </p>
            </PortfolioBox>
          </div>
          {/* StoneAlgo */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox 
              id="stonealgo"
              image="/assets/img/stonealgo/1.png"
              title="StoneAlgo"
              tags={["Django", "Twig", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                CRM application. <br/>
                E-Commerce Jewelry.
              </p>
            </PortfolioBox>
          </div>
          {/* LZ Facilities */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox 
              id="lzfacilities"
              image="/assets/img/lz_prints/1.png"
              title="LZ Facilities"
              tags={["PHP", "ReactJS", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                ERP application. <br/>
                Cleaning service provider management.
              </p>
            </PortfolioBox>
          </div>
          {/* AFAR Produtora */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <PortfolioBox 
              id="afarprodutora"
              image="/assets/img/afarprodutora_prints/face.jpg"
              title="AFAR Produtora"
              tags={["Laravel", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                CRM/ERP application. <br/>
                Anime event management.
              </p>
            </PortfolioBox>
          </div>
        </div>
      </div>

      <Modal 
        portfolioId={portfolio}
        setPortfolio={setPortfolio}
      />
    </Section>
  )
}

export default Portfolio
