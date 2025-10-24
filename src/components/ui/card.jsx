import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white border rounded-xl shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default Card;

