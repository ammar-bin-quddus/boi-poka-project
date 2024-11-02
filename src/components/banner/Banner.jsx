import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content w-full flex-col lg:flex-row-reverse lg:justify-between">
        <img
          src="../public/images/books.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
