import React from "react";
import image from "../beach.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="beach"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white-800 font-bold cursive leading-none lg:leading-snug home-name">
          Hello. I'm Bryan.
        </h1>
      </section>
    </main>
  );
}