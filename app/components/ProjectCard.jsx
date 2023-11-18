import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl bg-[#303030] py-6 px-4">
        <h5 className="font-lg font-semibold mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
