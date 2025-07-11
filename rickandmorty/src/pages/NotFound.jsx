import React from "react";
import meeseeks from "../assets/meeseeks.png";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <img src={meeseeks} alt="Mr. Meeseeks" className="h-48 mb-6" />
      <h1 className="text-3xl font-bold mb-2">
        404! -- Ooo! I’m Mr. Meeseeks! I can’t find this page!
      </h1>
      <p className="text-lg mb-4">
        Aw geez, Morty… looks like it jumped into another dimension.
      </p>
      <Nav.Link
        as={NavLink}
        to="/"
        className="mt-4 inline-block px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white"
      >
        Get Schwifty & Go Home
      </Nav.Link>
    </div>
  );
}
export default NotFound;
