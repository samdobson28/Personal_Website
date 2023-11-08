/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
import image2 from "../images/resumescreen2.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "DefFest 2024 Website",
    description:
      "In the works!",
    url: "https://2024.devfestcu.com/",
  },
  {
    title: "Web Animations Project",
    description:
      "In the works!",
    //url: "",
  },
  {
    title: "My Resume",
    description: <a href="https://drive.google.com/file/d/11aSPFE8eezzDEone5OS_9CgzALc_Cvl9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
    <img src={image2} alt="Resume Screenshot" width="250px" height="280" />
  </a>,
    url: "https://drive.google.com/file/d/11aSPFE8eezzDEone5OS_9CgzALc_Cvl9/view?usp=sharing",
  },
  {
    title: "Relevant Coursework",
    description: (
      <div>
        <p>
          Math:
          <br />
          Calc I, Calc III, Discrete Math, Linear Algebra & Probability;
        </p>
        <p>
          Computer Science:
          <br />
          Intro Java, Computing in Context (Python), Advanced Programming, Data Structures and Algorithms, CS Theory;
        </p>
      </div>
    ),
    //url: "",
  },  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
