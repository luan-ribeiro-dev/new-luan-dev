import React, { useEffect } from "react";
import "./styles/styles.scss";
import Section from "./components/Section";
import LoadScreen from "./components/LoadScreen";
import {AboutMe, Awards, Education, Home, Message, Portfolio, Skills} from "./sections"

interface IAppState {
  sections: string[],
  section: number,
  canHandleScroll: boolean,
}

export default class App extends React.Component<{}, IAppState> {
  
  constructor(props:{}){
    super(props)

    // You got me =D
    console.log("Nothing here :D") 

    this.handleScroll = this.handleScroll.bind(this);

    // setTimeout(() => {
    //   window.scrollTo(0, 0)
    //   window.location.hash = "home"
    // }, 100)

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
      // canHandleScroll: false,
      canHandleScroll: true,
    }
  }

  componentDidMount() {
    // if(window.screen.width > 767){
    //   window.addEventListener('wheel', this.handleScroll);
    // }
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
        {/* <LoadScreen callback={() => this.setState({canHandleScroll: true})} /> */}
        
        <Home />
        
        <AboutMe />
        
        <Portfolio />
        
        <Education />
        
        <Skills />
        
        <Awards />
        
        <Message />
        
        <Section id="info">
          <h1 style={{ position: "absolute", left: 0, top: 0 }}>info</h1>
        </Section>
      </div>
    );
  }
};