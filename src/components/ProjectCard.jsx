import React, { useState } from "react";

const ProjectCard = ({ data }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
      <div
        className="card bg-dark text-light"
        style={{
          width: "18rem",
          height: "32rem", // Ensures consistent card height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid yellow",
          boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
        }}
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        <div className="img d-flex justify-content-center align-content-center p-3">
          <img
            src={`/assets/${data.imageSrc}`}
            className="card-img-top"
            alt={data.title}
            style={{
              width: "250px",
              height: "200px",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          className="card-body text-center"
          style={{
            flexGrow: 1,
            overflow: "auto", // Enables scroll for overflowing content
          }}
        >
          <h5 className="card-title">{data.title}</h5>
          <p
            className="card-text"
            style={{
              display: "inline-block",
              maxHeight: "100px", // Limits height for description text
              overflow: showFullDescription ? "auto" : "hidden",
            }}
          >
            {showFullDescription
              ? data.description
              : `${data.description.substring(0, 100)}`}
            {!showFullDescription && (
              <>
                ...{" "}
                <button
                  onClick={toggleDescription}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  See More
                </button>
              </>
            )}
          </p>
          {showFullDescription && (
            <button
              onClick={toggleDescription}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
                display: "block",
              }}
            >
              See Less
            </button>
          )}
        </div>
        <div className="d-flex justify-content-center mb-2">
          <a
            href={data.demo}
            className="btn btn-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={data.source}
            className="btn btn-warning mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
