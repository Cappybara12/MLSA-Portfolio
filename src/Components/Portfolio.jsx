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
import image from "../images/portfolio-img.jpg";

const imageAltText = "person standing surrounded by tech ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dynamic Web Solutions with AWS Integration 🚀",
    description: "Crafted a series of websites integrating AWS services for optimal performance and functionality.",
    url: "https://github.com/Cappybara12/",
  },
  {
    title: "Checkout My(AKA DEV_VOYAGER) Portfolio Website 🚀",
    description: "Created my very own portfolio website using my tech stack .",
    url: "https://dev-voyager.netlify.app/",
  },
  {
    title: "Hackathon Expertise 🏆",
    description: "Participated ,mentored,judges and  excelled in multiple hackathons, showcasing my coding prowess and ability to meet tight deadlines.",
    url: "https://www.linkedin.com/in/akshay-kumar-sharma-37aa55256/recent-activity/all/",
  },
  {
    title: "AWS Certified Developer",
    description: "Achieved AWS certifications with 10+ badges, demonstrating expertise in cloud technologies.",
    url: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager/details/certifications/",
  },
  {
    title: "Web Dev for Real-world Applications",
    description: "Created impactful web solutions addressing real-world challenges, merging creativity with technical excellence.",
    url: "https://github.com/Cappybara12/WIEHACK_BVP",
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
