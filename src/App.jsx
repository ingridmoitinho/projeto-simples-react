import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from './assets/images/image1.png';  
import article2Img from './assets/images/image2.png';  
import article3Img from './assets/images/image3.png';  
import { Footer } from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />

          <Article    
          title="Vibrant Portraits of 2020"  
          provider="SpaceNews" 
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
          thumbnail={article2Img}
          />
          
       
          <Article 
          title="36 Days of Malayalam type"  
          provider="Spaceflight Now" 
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={article3Img}
          />
          
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
