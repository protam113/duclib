"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeSlash } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { message } from "antd";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Chỉnh sửa tên biến để đồng nhất
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="relative bg-blue-900 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_1px,_transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Login
          </h1>
        </div>
      </section>
      <div className="min-h-full flex items-center justify-center pt-10 mb-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2"
              >
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"} // Sử dụng showPassword để quyết định type
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Nhập mật khẩu của bạn"
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-2 top-10"
              >
                {showPassword ? (
                  <PiEyeSlash className="h-5 w-5 text-gray-600" />
                ) : (
                  <RxEyeOpen className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an acount?{" "}
              <Link
                href="/register"
                className=" text-indigo-500 hover:underline"
              >
                register now
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              <Link
                href={"/forgot_password"}
                className="text-indigo-500 hover:underline"
              >
                Forgot password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
