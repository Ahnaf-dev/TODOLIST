import header from "../components/UI/header";
import logo from "./../components/UI/logo";
import link from "../components/UI/link";
import tagLine from "../components/UI/tagline";
import logo from "./../components/UI/logo";

const homePage = function() {

  const app = document.querySelector('#app')

  const theHeader = document.createElement('header')
  theHeader.classList.add("home-header")
  const brandLogo = logo()
  const brandTag = tagLine("Get Your Noble Deeds Done With Our To-Do List!","tag")
  const h1 = header("PURIFY YOUR DAY1","brandHeading")
  const todoApp = link('To Do App','/todoapp','home-btn')
  
  theHeader.append(brandLogo)
  theHeader.append(h1)
  theHeader.append(brandTag)
  theHeader.append(todoApp)

  return theHeader
  
}

export default homePage