import React from "react";
import heroImg from './assets/man.svg'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
          A Content Management System (CMS) is a software application or platform that allows users to create, manage, and publish digital content on the internet without requiring advanced technical knowledge. CMSs are widely used for websites, blogs, and online applications to streamline the content creation and publication process.The choice of a CMS depends on factors such as the specific requirements of your project, your technical expertise, and your budget. Each CMS has its strengths and weaknesses, so it's essential to evaluate your options carefully before making a choice.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and browser" />
        </div>
      </div>
    </section>
  );
}
