import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
import useOnScreen from "../../Hooks/useOnScreen";
import About from '../About/About';
import Service from '../MyService/Service';

const App = () => {

  const ComponentsVisible = useRef({
    isHomeVisible: false,
    isSkillsVisible: false,
    isAboutVisible: false,
  });

  const onSkillsVisible = () => {
    ComponentsVisible.current.isSkillsVisible = true;
  };
  const onSkillsNotVisible = () => {
    ComponentsVisible.current.isSkillsVisible = false;
  };

  const onAboutVisible = () => {
    const downArrow = document.querySelector(".downArrowsDiv");
    if(downArrow){
      downArrow.style.display = "none";
    }
  };
  const onAboutNotVisible = () => {
    const downArrow = document.querySelector(".downArrowsDiv");
    if(downArrow){
      downArrow.style.display = "";
    }
  };


  return (
    <div className="App">
      <Header/>
      <Home/>     
      <About
        aboutVisible={onAboutVisible}
        aboutNotVisible={onAboutNotVisible}/> 
      <Skills 
        skillsVisible={onSkillsVisible}
        skillsNotVisible={onSkillsNotVisible}/>
      <Service/>
      <Contacts/>

    </div>
  );
}

export default App;
