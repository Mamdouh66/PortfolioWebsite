import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ image, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="font-code">
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl blur-sm"
          />
        </div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-50 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#dfdfdf] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#dfdfdf]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-gray-500" />
            </Link>
          ) : (
            <div
              className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#dfdfdf] hover:border-white group/link"
              title="There is no git URL for this project"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#dfdfdf]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-gray-500" />
            </div>
          )}
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#dfdfdf] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#dfdfdf]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-gray-500" />
          </Link>
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
