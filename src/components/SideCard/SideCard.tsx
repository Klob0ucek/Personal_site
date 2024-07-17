import React from "react";
import "./side_card.css";
import {cn} from "../../utils.ts";
import logo from "../../assets/fish_logo.jpg"
import Contact from "../Contact/Contact.tsx";

type SideCardProps = {
  className?: string;
};

const SideCard: React.FC<SideCardProps> = ({className}) => {
  return (
    <div className={cn("side-card", className)}>
      <img src={logo} alt="Logo" className="side-card__image"/>
      <h1 className="side-card__name">
        Jan Poláček
      </h1>
      <p className="side-card__desc">
        Developer
      </p>
      {/*https://icons.getbootstrap.com/*/}
      <Contact icon="bi-envelope" name="EMAIL" text="janik.polacek@gmail.com"/>
      <Contact icon="bi-telephone" name="PHONE" text="+420 727 940 445"/>
      <Contact icon="bi-github" name="GITHUB" text="github.com/Klob0ucek"/>
    </div>
  );
}

export default SideCard;