import React from "react";
import { HeaderProps } from "@/types/componentsType";

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <div
      className={`bg-gradient-to-r mb-6 from-primary-900 to-blue-400 text-white text-lg font-semibold px-4 py-2 rounded-lg ${className}`}
    >
      {title}
    </div>
  );
};

export default Header;
