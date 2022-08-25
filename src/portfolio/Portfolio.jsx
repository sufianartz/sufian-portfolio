import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MITP Poster Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788509",
  },
  {
    id: 2,
    image: IMG2,
    title: "Harmony Poster Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788501",
  },
  {
    id: 3,
    image: IMG3,
    title: "Technology Poster Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://dribbble.com/shots/19103837-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 4,
    image: IMG4,
    title: "ADNEC Flyer Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788499",
  },
  {
    id: 5,
    image: IMG5,
    title: "Diet App UI/UX",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788503",
  },
  {
    id: 6,
    image: IMG6,
    title: "The Hoop Gang logo Design",
    github: "https://www.behance.net/gallery/151039103/Graphic-Design",
    demo: "https://www.behance.net/gallery/151039103/Graphic-Design/modules/852788505",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                 Behance
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
