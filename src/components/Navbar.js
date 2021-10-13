import React from "react";
import { MdHome, MdEditCalendar, MdMoney } from "react-icons/md";
import { BsFillBagFill, BsCreditCard2Back } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <MdHome /> Tableau de bord
        </li>
        <li>
          <MdEditCalendar />
          Evénement
        </li>
        <li>
          <MdMoney />
          Finances
        </li>
        <li>
          <AiFillSound style={{ color: "blue" }} />
          Promotion
        </li>
        <li>
          <BsFillBagFill />
          Commandes
        </li>
        <li>
          <BsCreditCard2Back />
          Carte
        </li>
        <li>
          <IoMdPhonePortrait />
          Utilisateurs
        </li>
        <li>
          <FaUserCircle style={{ color: "blue" }} />
          Organisateur
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
