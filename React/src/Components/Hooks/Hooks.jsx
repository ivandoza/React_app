import { useState } from "react";

export function Hooks({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed((value) => !value);
  };

  return (
    <div className="hooks">
      <div>
        {title}{" "}
        <button onClick={handleCollapsed}>
          {collapsed ? "Show hooks" : "Collapse"}
        </button>
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
}