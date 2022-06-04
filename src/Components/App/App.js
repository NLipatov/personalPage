import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
import useOnScreen from "../../Hooks/useOnScreen";
import About from '../About/About';

const App = () => {

  const ComponentsVisible = useRef({
    isSkillsVisible: false,
    isAboutVisible: false,
  });

  const onSkillsVisible = () => {
    ComponentsVisible.current.isSkillsVisible = true;
  };
  const onSkillsNotVisible = () => {
    ComponentsVisible.current.isSkillsVisible = false;
  };

  const setAboutVisibilityInHome = useRef(()=>{
    return;
  });

  const onAboutVisible = () => {
    ComponentsVisible.current.isAboutVisible = true;
    setAboutVisibilityInHome.current(true);
  };
  const onAboutNotVisible = () => {
    ComponentsVisible.current.isAboutVisible = false;
    setAboutVisibilityInHome.current(false);
  };


  return (
    <div className="App">
      <Header/>
      <Home 
        setAboutVisibility={setAboutVisibilityInHome}/>     
      <About
        aboutVisible={onAboutVisible}
        aboutNotVisible={onAboutNotVisible}/> 
      <Skills 
        skillsVisible={onSkillsVisible}
        skillsNotVisible={onSkillsNotVisible}/>
      <Contacts/>

    </div>
  );
}

export default App;
