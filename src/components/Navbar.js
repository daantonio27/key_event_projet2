import React from "react";
import { MdHome, MdEditCalendar, MdMoney } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <MdHome /> Tableau de bord
        </li>
        <li>
          <MdEditCalendar style={{ color: "blue" }} />
          Evénement
        </li>
        <li>
          <MdMoney />
          Finances
        </li>
        <li>
          <AiFillSound />
          Promotion
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
