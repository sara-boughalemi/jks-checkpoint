import "./App.css";
import React from "react";
import image1 from "./imageInSrc.jpg";
import video from "./assets/video.mp4";
function App() {
  return (
    <div className="App">
      <div className="contenu">
        <h1 className="title">welcome</h1>
        <br />
        <img
          className="image"
          height={500}
          width={500}
          src={image1}
          alt="imagesrc"
        />{" "}
        <br />
        <img
          className="image2"
          height={500}
          width={853}
          src="/imageInPublic.jpg"
          alt="imageInPublic.jpg"
        />
        <video width="500" height="500" controls>
          <source src={video} type="video/mp4" />
        </video>
        <br/>
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/ApXoWvfEYVU?list=RDaTmdng0fBOE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        
      </div>
    </div>
  );
}
export default App;
