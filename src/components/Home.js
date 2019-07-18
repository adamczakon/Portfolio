import React from "react";
import AppNavbar from "./AppNavbar";

export default function Home() {
  return (
    <div className='home' id='home'>
      <div className='home__background'>
        <AppNavbar />
        <div className='home__header'>
          <h1 className='item'>Adam Czakon</h1>
          <h2 className='item'>Web developer</h2>
          <a className='button' href='#projects'>
            Check My Projects
          </a>
        </div>
      </div>
      <div className='home__introduction'>
        <h1 className='heading'>My Portfolio</h1>
        <p className='introduction__text'>
          Below you can see projects I've been working on.
          <br /> I've listed technologies that I used to create each project.
        </p>
      </div>
    </div>
  );
}
