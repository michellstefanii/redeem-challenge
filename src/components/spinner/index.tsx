import React from "react";
import "./spiner.styles.css";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = "#3498db",
}) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
  );
};

