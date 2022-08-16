import React from "react";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${"/landing.png"})` }}
    ></div>
  );
};

export default Landing;
