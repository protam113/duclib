// src/components/layout/DefaultLayout/index.tsx
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="relative ">
      {/* Thêm lớp relative cho container */}
      <Navbar /> {/* Đặt Navbar với z-index cao */}
      <main>
        {/* Thêm padding-top cho main để không bị che bởi Navbar */}
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default DefaultLayout;
