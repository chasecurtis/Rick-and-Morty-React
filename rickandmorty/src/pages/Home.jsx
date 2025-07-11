import React from "react";
import portal from "../assets/rickipedia_portal.gif";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={portal}
        alt="Portal Gif"
        className="h-108 w-auto object-contain"
      />
    </div>
  );
}

export default Home;
