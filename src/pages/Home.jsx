import React from "react";

import AddNote from "../components/AddNote";
const Home = () => {
  return (
    <div className="md:w-full md:h-screen md:flex md:items-center md:justify-center shadow-md px-5">
      <AddNote />
    </div>
  );
};

export default Home;
