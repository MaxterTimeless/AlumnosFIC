import React, { Fragment } from "react"
import './App.css';

function App() {
  const TopMenu = () => {
    if(document.getElementById("Dropdown-menu").style.display == "block"){
      document.getElementById("Dropdown-menu").style.display = "none";
    } else {
      document.getElementById("Dropdown-menu").style.display = "block";
    }
  };
  return (
    <Fragment>
        <div class="top-bar">
          <div class="wrap">
            <div class="menu-bar">
              <div class="nav-top">
                
                <a href="https://alumnosfic.uai.cl/" class="Titulo">AlumnosFIC</a>
                
              
                <button onClick={TopMenu} class="navicon_js-navicon">
                  <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" class="three_lines"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="Dropdown-menu" class="dropdown-content">
              <a href="#">Información Académica</a>
              <a href="#">Mallas Curriculares</a>
              <a href="#">Pregrado</a>
              <a href="#">Quinto Año</a>
              <a href="#">Prácticas</a>
              <a href="#">Mecanismos de Titulación</a>
              <a href="#">Doble Titulación</a>
              <a href="#">Internacionalzación</a>
              <a href="#">Acreditaciones</a>
              <a href="#">Asuntos Estudiantiles</a>
            </div>
            <div class="top-search">
              <form action="https://ingenieria.uai.cl" method="GET" class="search-form">
                <input type="search" name="s" class="search-form__field" placeholder="Ingresa tu búsqueda" />
                <button type="submit" class="search-form__submit"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
              </form>                        
            </div>
          </div>
        </div>
        <div class="header__wrap" >
          <div class="site-name">
            <a href="https://ingenieria.uai.cl">Facultad de Ingeniería y Ciencias</a>
          </div>
          <div class="logo">
            <a href="https://www.uai.cl" title="Universidad Adolfo Ibáñez" rel="home-uai"></a>
          </div>
        </div>
        
    </Fragment>
  );
}

function ActionLink() {
  function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }
    return (
    <a href="#" onClick={handleClick}>      Click me
    </a>
  );
}

export default App;
