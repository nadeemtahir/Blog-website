import React from "react";
import Image from "next/image";

function AuthorCard() {
  return (
    <div className="bg-neutral-200 shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          src={"/images/author.jpeg"}
          alt={"author"}
          width={150}
          height={150}
          className="rounded-full mr-4 object-cover border-2 border-red-500"
        />
        <div>
          <h3 className="text-xl font-bold">Manahil Nadeeem</h3>
          <p className="text-slate-500">Frontend Developer</p>
        </div>
      </div>
      <p className="mt-4 text-slate-600">
        Passionate about crafting elegant, responsive user interfaces and bringing designs to life with clean, efficient code.
      </p>
      <div className="flex mt-6 space-x-4">
        <a
          href="https://github.com/yourgithubusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedinprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default AuthorCard;
