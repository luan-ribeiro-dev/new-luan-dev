import React, { useEffect, useState } from 'react';
import Section from "../components/Section";
import SectionDescription from '../components/SectionDescription';

const PortfolioBox: React.FC<{id:string, image:string, title:string, url:string, onClick: Function, tags?:string[], children?: JSX.Element | JSX.Element[]}> = ({id, image, title, url, onClick, tags, children}) => {
  return (
    <div className='portfolio-box' id={id}>
      <div className="image" style={{backgroundImage: `url("${image}")`}} onClick={() => onClick(id)} />
      <div className="wrapper">

        <div className='description-div'>
          <div>
            <div className="title-div">
              <div className="d-flex flex-column justify-content-center">
                <h5>
                  <span onClick={() => onClick(id)}>{title}</span>
                  <a href={url} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt ps-2"></i>
                  </a>
                </h5>
                <a href={url} target="_blank" rel="noreferrer">
                  <sup style={{fontSize: "10px"}}>
                    {url}
                  </sup>
                </a>
              </div>
            </div>
            <div className="description" onClick={() => onClick(id)}>
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
          Skin Medicinals é uma aplicação CRM/ERP para o gerenciamento de prescrições online
        </p>
        <p>
          O projeto é desenvolvido em Laravel/ReactJS e trabalhei como fullstack com um time de desenvolvedores.
          Meu trabalho foi resolver bugs, gerenciar o banco de dados e implementar novas funcionalidade ao projeto.
        </p>
        <p>
          O proposito dessa aplicação é permitir que médicos possam dar prescrições de tratamentos para pacientes.
          As principais funcionalidades incluem compra/envio de medicações, lembretes, renovações automáticas, contratos e analises
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
          Stonealgo é uma aplicação CRM, E-Commerce de joias e diamantes
        </p>
        <p>
          Eu trabalhei com um time de desenvolvedores e meu trabalho foi resolver bugs e implementar
          novas funcionalidades seguindo as instruções do líder do projeto.
        </p>
        <p>
          Foi desenvolvido com Django, Twig e MySQL.
        </p>
        <p>
          O proposito dessa aplicação é vender joias para clientes.
          As principais funcionalidades incluem comparação de joias, filtros, alertas e gerenciamento de
          agendamentos e diamantes.
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
          LZ Facilities é uma aplicação ERP desenvolvido com PHP/MySQL para o gerenciamento e automação de rotinas de uma empresa de limpeza.
        </p>
        <p>
          100% desse projeto foi desenvolvido por mim seguindo as instruções e feedback do cliente. <br/>
        </p>

        <p>  
          As funcionalidades desse projeto incluem o gerenciamento de contratos, lucros,
          atividades, tarefas, estoque, chat, ponto digital e custos de ônibus.
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
          AFAR Produtora é uma aplicação CRM/ERP, foi desenvolvido com Laravel/MySQL, é um
          E-commerce de ingressos de shows de anime.
        </p>
        <p>
          Fui contratado para resolver bugs e implementar funcionalidades no painel administrativo. <br/>
        </p>

        <p>  
          O proposito desse projeto é vender ingressos e dar informações sobre de shows de anime.
          Umas das outras funcionalidades incluem muitos gráficos e relatórios.
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
      <div className="modal-dialog modal-lg">
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
    </div>
  )
}

const Portfolio: React.FC = () => {
  const path = window.location.pathname.substring(1)
  const [portfolio, setPortfolio] = useState(path)
  
  useEffect(() => {
    document.getElementById(path)?.scrollIntoView({
      block: 'end'
    });
  }, [path])
  
  useEffect(() => {
    if (portfolio != "") {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "overlay"
    }
    window.history.pushState({}, '', `/${portfolio}`);
  }, [portfolio])

  return (
    <Section id="portfolio" image="/assets/img/reactjs.jpg">
      <div className="section-description" id="portfolio-title">
        <h1> meus<span className="green-text">trabalhos</span> <figure className="white-square" /></h1>
      </div>
      <div id="portfolio-wrapper">
        <p>
          Ao longo da minha trajetória, desenvolvi <span className="green-text">ERPs, CMR, E-Commerce, APIs, Integrações com apps de terceiros, Chats, Helpdesk</span> e <span className="green-text">Dashboards</span> que otimizaram processos, melhoraram o desempenho de sistemas e facilitaram a gestão interna de diversas empresas.
        </p>

        <p>
          Atuando como desenvolvedor fullstack, fui <span className="green-text">responsável por toda a construção das aplicações</span>, desde a implementação do <span className="green-text">design</span> até o desenvolvimento de <span className="green-text">funcionalidades robustas</span>, garantindo integração eficiente entre backend e frontend.
        </p>

        <p>
          Meu foco sempre foi criar soluções que não apenas atendam às necessidades dos clientes, mas que tragam <span className="green-text">melhorias reais</span>, como automação de tarefas, otimização de recursos e sistemas mais ágeis e escaláveis. Cada projeto que desenvolvo visa <span className="green-text">simplificar a gestão</span> e impulsionar a <span className="green-text">eficiência operacional</span>.
        </p>
        <div className="row">
          {/* Skin Medicinals */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <PortfolioBox
              id="skinmedicinals"
              image="/assets/img/skinmedicinals/1.png"
              title="Skin Medicinals"
              url="https://www.skinmedicinals.com/"
              tags={["Laravel", "ReactJS", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                Aplicação CRM/ERP. <br/>
                Gerenciamento de prescrições médicas online.
              </p>
            </PortfolioBox>
          </div>
          {/* StoneAlgo */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <PortfolioBox 
              id="stonealgo"
              image="/assets/img/stonealgo/1.png"
              title="StoneAlgo"
              url="https://www.stonealgo.com/"
              tags={["Django", "Twig", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                Aplicação CRM. <br/>
                E-Commerce de joias.
              </p>
            </PortfolioBox>
          </div>
          {/* LZ Facilities */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <PortfolioBox 
              id="lzfacilities"
              image="/assets/img/lz_prints/1.png"
              title="LZ Facilities"
              url="http://lzfacilities.limpezacomzelo.com.br/"
              tags={["PHP", "ReactJS", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                Aplicação ERP<br/>
                Gerenciamento de prestação de serviços de limpeza.
              </p>
            </PortfolioBox>
          </div>
          {/* AFAR Produtora */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <PortfolioBox 
              id="afarprodutora"
              image="/assets/img/afarprodutora_prints/face.jpg"
              title="AFAR Produtora"
              url="https://www.afarprodutora.com.br/"
              tags={["Laravel", "MySQL"]}
              onClick={(id:string) => setPortfolio(id)}
            >
              <p>
                Aplicação CRM/ERP. <br/>
                Gerenciamento de eventos e ingressos de shows de anime.
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
