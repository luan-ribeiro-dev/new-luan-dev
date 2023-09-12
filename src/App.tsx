import React from "react";
import "./styles/styles.scss";
import LoadScreen from "./components/LoadScreen";
import Cookies from 'universal-cookie';
import {AboutMe, Awards, Education, Home, Message, Portfolio, Skills} from "./sections"

export default class App extends React.Component {
  
  constructor(props:{}) {
    super(props)

    // You got me =D
    console.log("Nothing here :D") 
  }
  
  render(): React.ReactNode {
    const cookies = new Cookies({ path: '/' });
    const visited = cookies.get('visited') || 1;

    if (!cookies.get('visited')) {
      cookies.set('visited', 1, { path: '/', maxAge: 60 * 1 });
    } else {
      cookies.set('visited', parseInt(cookies.get('visited')) + 1, { path: '/', maxAge: 60 * 1 });
    }

    return (
      <div className="app" id="app">
        {/* {window.location.pathname === "/" && ( !visited || visited <= 1 )  && ( */}
        {/* {window.location.pathname === "/" && (
          <LoadScreen callback={() => {}} />
        )} */}
        
        <Home />
        
        <AboutMe />
        
        <Portfolio />
        
        <Education />
        
        {/* <Skills /> */}
        
        <Awards />
        
        <Message />
      </div>
    );
  }
};