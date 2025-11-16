import { ReactNode } from "react";
import "./button.css";

const ActionButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className="action-btn action-text" onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
