import React from "react";
import heroImg from './assets/man.svg'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Literally authentic you probably haven't heard of them woke,
            gorpcore fanny pack unicorn yr tbh enamel pin before they sold out
            vaporware hot chicken. Blue bottle craft beer 90's photo booth,
            direct trade Brooklyn chambray vegan sus tofu pok pok normcore
            shoreditch brunch butcher. Live-edge hoodie single-origin coffee
            offal pitchfork disrupt. Hell of yes plz four loko four dollar
            toast. Live-edge shaman typewriter gochujang prism bespoke
            gluten-free lomo sus.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and browser" />
        </div>
      </div>
    </section>
  );
}
