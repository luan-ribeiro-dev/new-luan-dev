import React from "react";
import "./styles/styles.scss";
import Section from "./components/Section";
import LoadScreen from "./components/LoadScreen";

interface IAppState {
  sections: string[],
  section: number,
  canHandleScroll: boolean,
}

export default class App extends React.Component<{}, IAppState> {
  
  constructor(props:{}){
    super(props)

    this.handleScroll = this.handleScroll.bind(this);

    setTimeout(() => {
      window.scrollTo(0, 0)
      window.location.hash = "home"
    }, 100)

    const sections = [
      "home",
      "about-me",
      "my-work",
      "education",
      "skills",
      "awards",
      "message",
      "info",
    ]

    this.state = {
      sections,
      section: 0,
      canHandleScroll: false,
    }
  }

  componentDidMount() {
    if(window.screen.width > 767){
      window.addEventListener('wheel', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }
  
  handleScroll(e:WheelEvent){
    let {sections, section, canHandleScroll} = this.state
    
    if(canHandleScroll){
      this.setState({canHandleScroll:false})
      
      if(e.deltaY > 0){ // Scroll down
        section++;
      }else if(e.deltaY < 0){ // Scroll up
        section--;
      }

      if(section < 0) section = 0;
      else if(section > 7) section = 7;

      document.getElementById("app")!.style.transform = `translateY(-${section * 100}vh)`;
      window.location.hash = sections[section]

      setTimeout(() => {
        this.setState({canHandleScroll:true, section})
      }, 500);
    }
  }

  render(): React.ReactNode {

    return (
      <div className="app" id="app">
        <LoadScreen callback={() => this.setState({canHandleScroll: true})} />
        <Section id="home">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>Home</h1>
          <figure id="section-1-green-circle"></figure>

          <div className="row overlay-row h-100">
            <div id="top-bar">
              <span id="logo">&lt;/&gt;</span>
              <i className="fas fa-bars" id="menu-bar-button" title="Open navigation menu"></i>
            </div>
            <div className="col-12 col-sm-6 section-1-side-div">
              <div id="section-1-info-div">
                <h1>Fullstack Developer<figure className="green-square" /></h1>
                <p>
                  Junior web developer with <span className="green-text">+3 years of experience in programming</span>  with companies and teams
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem at dui interdum <span className="green-text">suscipit</span> et sit amet tortor. */}
                </p>
              </div>

              <div id="contact-info">
                <div>
                  <a href="tel: +55 11 9 81389495" className="round-white-icon">
                    <i className="fas fa-phone-alt"></i>
                  </a>
                  <a href="tel: +55 11 9 81389495">
                    <span className="ms-2">+55 11 981389495</span>
                  </a>
                </div>

                <div>
                  <a href="mailto:contact@luan-dev.com" className="round-white-icon">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="mailto:contact@luan-dev.com">
                    <span className="ms-2">contact@luan-dev.com</span>
                  </a>
                </div>

                <span className="mt-3" id="section-1-rights">Luan Dev - All Rights Reserved</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 section-1-side-div position-relative" id="self-div">
              <img id="self-image" src="/assets/img/self2.jpg" alt="Me" />
              <figure className="white-balls-pattern" id="pattern-ball-1"></figure>
              <figure className="white-balls-pattern" id="pattern-ball-2"></figure>
            </div>
          </div>
        </Section>
        <Section id="about-me">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>about-me</h1>
        </Section>
        <Section id="my-work">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>my-work</h1>
        </Section>
        <Section id="education">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>education</h1>
        </Section>
        <Section id="skills">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>skills</h1>
        </Section>
        <Section id="awards">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>awards</h1>
        </Section>
        <Section id="message">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>message</h1>
        </Section>
        <Section id="info">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>info</h1>
        </Section>
      </div>
    );
  }
};