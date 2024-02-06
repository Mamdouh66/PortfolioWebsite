import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExperinceItem = ({ title, image, description, duration, href, alt }) => {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="border-[0.5px] border-neutral-500 block rounded-2xl my-6 "
      >
        <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
          <Image
            className="max-w-[120px] rounded-2xl mx-auto brightness-90 contrast-125"
            src={image}
            alt={alt}
          />
        </div>
        <div className="p-8 py-10">
          <h1 className="mb-1 text-center text-xl">{title}</h1>
          <h3 className="text-center text-lg text-neutral-500">{duration}</h3>
          <p className="text-neutral-400">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ExperinceItem;
