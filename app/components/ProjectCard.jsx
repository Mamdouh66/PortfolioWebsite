import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ image, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="font-code">
      <div className="h-52 md:h-72 rounded-t-xl relative group bg-black">
        {image ? (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl blur-sm hover:blur-none transition-all duration-500 group-hover:filter-none"
          />
        ) : (
          // Placeholder or styling for when no image is provided
          <div className="absolute inset-0 flex items-center justify-center bg-[#303030] rounded-lg">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#2e2929] bg-opacity-50 hidden group-hover:flex ">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#dfdfdf] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#dfdfdf] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gray-500" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#dfdfdf] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#dfdfdf] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-gray-500" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#252525] py-6 px-4">
        <h5 className="font-lg font-semibold mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
