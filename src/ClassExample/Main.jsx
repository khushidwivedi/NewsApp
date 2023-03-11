import React from "react";
import "./Main.css"
import "./mystyle.css"
import pic1 from "../images/tenor.gif"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

function Main() {
  return (
    <div classname="main">
      <h1 class="background h1 welcome">Welcome To Newssite</h1>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100 img " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100 img" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100 img" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



    </div>




  )
}
export default Main;