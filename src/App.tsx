import React from "react";
import "./styles/styles.scss";
import LoadScreen from "./components/LoadScreen";
import {AboutMe, Awards, Education, Home, Message, Portfolio, Skills} from "./sections"

export default class App extends React.Component {
  
  constructor(props:{}) {
    super(props)

    // You got me =D
    console.log("Nothing here :D") 
  }
  
  render(): React.ReactNode {
    return (
      <div className="app" id="app">
        {window.location.pathname === "/" && (
          <LoadScreen callback={() => {}} />
        )}
        
        <Home />
        
        <AboutMe />
        
        <Portfolio />
        
        <Education />
        
        <Skills />
        
        <Awards />
        
        <Message />
      </div>
    );
  }
};