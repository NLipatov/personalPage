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
    isSkillsVisible: false
  });

  const onSkillsVisible = () => {
    console.log('Skills Visible');
    ComponentsVisible.current.isSkillsVisible = true;
  };
  const onSkillsNotVisible = () => {
    console.log('Skills Not Visible');
    ComponentsVisible.current.isSkillsVisible = false;
  };


  return (
    <div className="App">
      <Header/>
      <Home/>     
      <About/> 
      {/* <Skills 
      skillsVisible={onSkillsVisible}
      skillsNotVisible={onSkillsNotVisible}/>
      <Contacts/> */}

    </div>
  );
}

export default App;
