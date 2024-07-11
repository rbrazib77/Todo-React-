import React from "react";
import Container from "./Container";
import NavItem from "./NavItem";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#2f1793] py-5 md:px-0 px-5 ">
      <Container>
        <div className="flex justify-between items-center ">
          <div>
            <Link to="/">
              <span className="text-white text-xl md:text-4xl font-roboto font-bold">
                /ToDo/
              </span>
            </Link>
          </div>
          <div className="">
            <NavItem className="flex gap-x-2 md:gap-x-6 text-white ">
              <ListItem
                className="font-roboto font-normal text-lg"
                listName="Home"
                href="/"
              />
              <ListItem
                className="font-roboto font-normal text-lg"
                listName="TaskView"
                href="/taskview"
              />
              <ListItem
                className="font-roboto font-normal text-lg"
                listName="Contact"
              />
            </NavItem>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
