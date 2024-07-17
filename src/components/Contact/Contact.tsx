import React from "react";
import "./contact.css"
import {cn} from "../../utils.ts";
import "bootstrap-icons/font/bootstrap-icons.css";

type ContactProps = {
  className?: string;
  icon: string;
  name: string;
  text: string
};

const Contact: React.FC<ContactProps> = ({className, icon, name, text}) => {
  return (
    <div className={cn("contact", className)}>
      <div className="contact__icon-box">
        <i className={cn(icon, "contact__icon")}/>
      </div>
      <div className="contact__data">
        <div className="contact__name">{name}</div>
        <div className="contact__text">{text}</div>
      </div>
    </div>
  );
}

export default Contact;