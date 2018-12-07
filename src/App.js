import React, { Component } from 'react';
import './App.css';
import Content from "./Content";

class App extends Component {
  
  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 25.612677, lng: 85.158875},
      zoom: 13
    });
    window.mapObject = map;
  }


  loadScript() {
    let scriptElement = this.createMapScript();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    script.parentNode.insertBefore(scriptElement, script);
    window.initMap = this.initMap;
  }


  createMapScript() {
    try {
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyD9u_SI27qB4diG8o-gRMaUOiA_PGTJKnI";
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;

    return mapScript;
    } catch (error) {
      alert("Error loading page...")
    }
  }

  

  render() {
    this.loadScript();

    return (
      <div className="App">
        <Content />
      <footer tabIndex="0"><p>Made with <a href="https://developer.foursquare.com/">Foursquare</a> APIs</p></footer>
      </div>

      
    );
  }
}


export default App;
