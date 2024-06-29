import React from "react";
import SideCard from "../components/SideCard/SideCard.tsx";
import "./main_layout.css";

const MainLayout: React.FC = () => {
  return (
    <>
      <main className="main-layout">
        <SideCard className="main-layout__side"/>
        <p className="main-layout__page">
          This is the main layout component. It is a simple component that
          displays some text.
        </p>
      </main>
    </>
  );
}

export default MainLayout;