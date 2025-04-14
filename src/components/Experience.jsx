import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="ex-items my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              {/* Left Section: Image and Role */}
              <div
                className="left"
                style={{
                  flex: 0.4,
                  marginRight: "20px",
                  textAlign: "center",
                }}
              >
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt={data.title}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
                <h2 style={{ fontSize: "18px" }}>{data.role}</h2>
                <h4 style={{ fontSize: "12px", fontWeight: "normal" }}>
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} - {data.endDate}{" "}
                  </span>
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h4>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#ddd",
                  marginRight: "20px",
                }}
              />

              {/* Right Section: Job Description */}
              <div
                className="right"
                style={{
                  flex: 0.6,
                  textAlign: "left",
                }}
              >
                {data.experiences.map((item, index) => (
                  <h5
                    key={index}
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "1.5",
                      marginBottom: "10px",
                    }}
                  >
                    • {item}
                  </h5>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
