import { ReactNode } from "react";
import "./button.css";

const ActionButton = ({ children }: { children: ReactNode }) => {
  return <button className="action-btn action-text">{children}</button>;
};

export default ActionButton;
