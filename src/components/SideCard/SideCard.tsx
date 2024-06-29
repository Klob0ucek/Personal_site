import React from "react";
import "./side_card.css";
import {cn} from "../../utils.ts";

type SideCardProps = {
  className?: string;
};

const SideCard: React.FC<SideCardProps> = ({className}) => {
  return (
    <div className={cn("side-card", className)}>
      <p className="side-card__text">
        This is a side card component.
      </p>
    </div>
  );
}

export default SideCard;