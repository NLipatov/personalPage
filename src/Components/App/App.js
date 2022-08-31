import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
import useOnScreen from "../../Hooks/useOnScreen";
import About from '../About/About';
import Experience from '../Experience/Experience';
import Service from '../MyService/Service';
import Portfolio from '../Portfolio/Portfolio';

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

  const scrollPosition = useRef(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    scrollPosition.current = position;

    nodeList = document.querySelectorAll(".visual_component");
    nodes = Array.prototype.slice.call(nodeList, 0);

    let offsetToHome = getScrolledOffsetFoLinkHeader("home");
    let offsetToAbout = getScrolledOffsetFoLinkHeader("about") - 400;
    let offsetToSkills = getScrolledOffsetFoLinkHeader("skills");
    let offsetToExperience = getScrolledOffsetFoLinkHeader("experience") + 300;
    let offsetToPortfolio = getScrolledOffsetFoLinkHeader("portfolio") + 700;
    let offsetToContact = getScrolledOffsetFoLinkHeader("contact") + 500;


    if(position >= offsetToHome && position < offsetToAbout) {
      document.getElementById("NavBarHomeLink").style.color = "#5b94ff";

      document.getElementById("NavBarAboutLink").style.color = "white";
      document.getElementById("NavBarExperienceLink").style.color = "white";
      document.getElementById("NavBarContactLink").style.color = "white";
      document.getElementById("NavBarPortfolioLink").style.color = "white";
    }
    else{
      if(position >= offsetToAbout && position < offsetToExperience) {
        document.getElementById("NavBarAboutLink").style.color = "#5b94ff";

        document.getElementById("NavBarHomeLink").style.color = "white";
        document.getElementById("NavBarExperienceLink").style.color = "white";
        document.getElementById("NavBarContactLink").style.color = "white";
        document.getElementById("NavBarPortfolioLink").style.color = "white";
      }
      if(position >= offsetToExperience && position < offsetToPortfolio){

        document.getElementById("NavBarHomeLink").style.color = "white";
        document.getElementById("NavBarAboutLink").style.color = "white";
        document.getElementById("NavBarExperienceLink").style.color = "#5b94ff";
        document.getElementById("NavBarContactLink").style.color = "white";
        document.getElementById("NavBarPortfolioLink").style.color = "white";
      }
      if(position >= offsetToPortfolio && position < offsetToContact){

        document.getElementById("NavBarHomeLink").style.color = "white";
        document.getElementById("NavBarAboutLink").style.color = "white";
        document.getElementById("NavBarExperienceLink").style.color = "white";
        document.getElementById("NavBarContactLink").style.color = "white";
        document.getElementById("NavBarPortfolioLink").style.color = "#5b94ff";
      }
      if(position >= offsetToContact){

        document.getElementById("NavBarHomeLink").style.color = "white";
        document.getElementById("NavBarAboutLink").style.color = "white";
        document.getElementById("NavBarExperienceLink").style.color = "white";
        document.getElementById("NavBarContactLink").style.color = "#5b94ff";
        document.getElementById("NavBarPortfolioLink").style.color = "white";
      }
    }
  };

  useEffect(() => {

    if(window.pageYOffset === 0){
      document.getElementById("NavBarHomeLink").style.color = "#5b94ff";
    }
    window.addEventListener("scroll", handleScroll);
    
    return () => {
    window.removeEventListener("scroll", handleScroll);
    }}, []);

  let nodeList = document.querySelectorAll(".visual_component");
  let nodes = Array.prototype.slice.call(nodeList, 0);

  const getScrolledOffsetFoLinkHeader = (linkId) => {
    let offsetValue = 0;
    for (let i = 0; i < nodes.length; i++) {
      if(nodes[i].id !== linkId){
        offsetValue += nodes[i].offsetHeight;
      }
      else{
        return offsetValue;
      }
    }
  }


  return (
    <div className="App">
      <Header/>
      <Home/>     
      <About onAboutVisible={onAboutVisible} onAboutNotVisible={onAboutNotVisible}/> 
      <Skills 
        skillsVisible={onSkillsVisible}
        skillsNotVisible={onSkillsNotVisible}/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contacts/>
    </div>
  );
}

export default App;
