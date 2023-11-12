// Add this section to your React education, for example, in an "Education.jsx" component

import React from 'react';
import { educaationlist } from "./educaationlist";
import image from "../images/edcuation.jpg";
const imageAltText = "books ";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>EDUCATION</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
</div>
<div className="container">
          {educaationlist.map((education) => (
            <div className="box" key={education.title}>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
              </a>
              <p className="small">{education.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
