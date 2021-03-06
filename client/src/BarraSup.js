import React, { Fragment } from "react"
import './BarraSup.css';

function BarraSup() {
  const Menu = (dis) => {
      if(document.getElementById(dis).style.display == "block"){
        document.getElementById(dis).style.display = "none";
      } else {
        document.getElementById(dis).style.display = "block";
      }
  };
  return (
    <Fragment>
      <div class="top-bar">
        <div class="wrap">
          <div class="menu-bar">
            <div class="nav-top">
              
              <a href="http://localhost:3001/" class="Titulo">AlumnosFIC</a>
              
              <button onClick={()=>Menu("Dropdown-menu")} class="navicon_js-navicon">
                <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" class="three_lines"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
            </div>
          </div>
          <div id="Dropdown-menu" class="dropdown-content">
            <div class="dropdown-content-1">
              <a href="#">Información Académica</a>
              <a href="http://localhost:3000/?gtm_debug=1656972864503">Mallas Curriculares</a>
              <a href="#">Pregrado</a>
              <a href="#">Quinto Año</a>
              <a href="#">Prácticas</a>
              <a href="#">Mecanismos de Titulación</a>
              <a href="#">Doble Titulación</a>
              <a href="#">Internacionalzación</a>
              <a href="#">Acreditaciones</a>
              <a href="#">Asuntos Estudiantiles</a>
            </div> 
            <div class="dropdown-content-2">
              <a href="https://ingenieria.uai.cl/">Facultad de Ingeniería y Ciencias</a>
              <a href="https://bibliotecas.uai.cl/">Biblioteca</a>
              <div class="Centros">
                Centros
                <button onClick={()=>Menu("Dropdown-centros")} class="downArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" transform="rotate(90)">
                    <path fill="#dcdcdc" d="M6.4,19.3l7.3-7.3L6.4,4.7l2.3-2.3l9.6,9.6l-9.6,9.6L6.4,19.3z"></path>
                  </svg>
                </button>
              </div>
              
            </div>
            <div id="Dropdown-centros" class="dropdown-content-centros">
              <a href="https://ingenieria.uai.cl/centros/bio/">iUAI Bio Center</a>
              <a href="https://ingenieria.uai.cl/centros/built/">iUAI Built Center</a>
              <a href="https://ingenieria.uai.cl/centros/complexity/">iUAI Complexity Center</a>
              <a href="https://ingenieria.uai.cl/centros/dec/">iUAI Design Engineering Center</a>
              <a href="https://ingenieria.uai.cl/centros/earth/">iUAI Earth Center</a>
              <a href="https://ingenieria.uai.cl/centros/mining/">iUAI Mining Center</a>
              <a href="https://ingenieria.uai.cl/centros/systems/">iUAI Systems Center</a>
              {/* Nota: No se ha encontrado el link para Tech Center | <a href="#">iUAI Tech Center</a> */}
            </div> 
            <div class="top-search">
              <form action="https://ingenieria.uai.cl" method="GET" class="search-form">
                <input type="search" name="s" class="search-form__field" placeholder="Ingresa tu búsqueda" />
                <button type="submit" class="search-form-s"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
              </form>                        
            </div>
          </div>   
        </div>
      </div>
    </Fragment>
  );
}

export default BarraSup;