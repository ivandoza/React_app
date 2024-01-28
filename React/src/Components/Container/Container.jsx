import React from "react";
import "./Container.scss";
import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed((value) => !value);
  };

  return (
    <div className="app-container">
      <div className="app-title">
        {title}{" "}
        <button onClick={handleCollapsed}>
          {collapsed ? "Show" : "Collapse"}
        </button>
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
}
