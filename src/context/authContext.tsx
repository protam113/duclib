// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { apiHandle, endpoints } from "@/api/api";
import { toast } from "sonner";

// Define proper types for user data
interface UserRole {
  id: string;
  title: string;
  slug: string;
}

interface UserData {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  name: string;
  email: string;
  dob: string;
  position: string;
  phone_number: string;
  contact: string;
  is_active: boolean;
  role: UserRole;
}

// Define the complete auth context type
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  userInfo: UserData | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  fetchUserInfo: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// API key from environment variables
const getApiKey = () => process.env.NEXT_PUBLIC_API_KEY || "";

// Common headers for API requests
const getHeaders = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("api-key", getApiKey());
  return headers;
};

// Utility functions for managing cookies
const setCookie = (
  name: string,
  value: string,
  options: {
    expires?: number;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
  } = {}
) => {
  let cookieString = `${name}=${encodeURIComponent(value)}`;

  if (options.expires) {
    const date = new Date();
    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }

  cookieString += "; path=/";
  if (options.secure && process.env.NODE_ENV === "production")
    cookieString += "; Secure";
  if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;

  document.cookie = cookieString;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ${
    process.env.NODE_ENV === "production" ? "Secure;" : ""
  } SameSite=Lax;`;
};

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  // Initial load - check authentication status
  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      setLoading(false);
    };

    initAuth();
  }, []);

  // Login function with specific error handling
  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${apiHandle}${endpoints.login}`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 400) {
          throw new Error(
            "Incorrect login information, please check your account and password"
          );
        }
        const { message } = await response.json();
        throw new Error(message || "Login failed");
      }

      const { status, message } = await response.json();

      if (status === "success") {
        setCookie("isAuthenticated", "true", {
          expires: 7,
          secure: true,
          sameSite: "Lax",
        });

        // Only call checkAuth when login is successful (status 200)
        await checkAuth();
        setIsAuthenticated(true);
        setLoading(false);
        toast.success("Login successful! Redirecting to home page..");
        return true;
      } else {
        throw new Error(message || "Login failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setIsAuthenticated(false);
      setUserInfo(null);
      setLoading(false);
      setError(errorMessage);
      deleteCookie("isAuthenticated");
      localStorage.removeItem("auth-data");
      toast.error(errorMessage);
      return false;
    }
  };

  // Fetch user information
  const fetchUserInfo = async () => {
    if (!isAuthenticated) return;

    try {
      setLoading(true);

      const response = await fetch(`${apiHandle}${endpoints.currentUser}`, {
        method: "GET",
        headers: getHeaders(),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      const { status, data } = await response.json();

      if (status === "success" && data) {
        setUserInfo(data);
        setLoading(false);
      } else {
        throw new Error("Invalid user data received");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to fetch user information";
      setLoading(false);
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${apiHandle}${endpoints.logout}`, {
        method: "POST",
        headers: getHeaders(),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to logout on server");
      }

      const { status, message } = await response.json();
      if (status !== "success") {
        throw new Error(message || "Logout failed");
      }

      // Clear cookies and state
      deleteCookie("isAuthenticated");
      setIsAuthenticated(false);
      setUserInfo(null);
      setLoading(false);
      setError(null);
      localStorage.removeItem("auth-data");

      toast.success("Log out successfully!");

      // Redirect immediately
      window.location.href = "/login";
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Error during logout:", errorMessage);

      // Clear cookies and state
      deleteCookie("isAuthenticated");
      setIsAuthenticated(false);
      setUserInfo(null);
      setLoading(false);
      setError(errorMessage);
      localStorage.removeItem("auth-data");

      // Redirect immediately
      window.location.href = "/login";
    }
  };

  // Check authentication status
  const checkAuth = async () => {
    // Check cookie before calling API
    const isAuthenticatedCookie = document.cookie.includes(
      "isAuthenticated=true"
    );
    if (!isAuthenticatedCookie) {
      setIsAuthenticated(false);
      setUserInfo(null);
      setLoading(false);
      localStorage.removeItem("auth-data");
      return;
    }

    try {
      const response = await fetch(`${apiHandle}${endpoints.currentUser}`, {
        method: "GET",
        headers: getHeaders(),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const { status, data } = await response.json();

      if (status === "success" && data) {
        const userRole = data.role?.title;
        console.log("User role:", userRole);

        const allowedRoles = ["employee", "admin", "manager"];

        if (!allowedRoles.includes(userRole)) {
          console.warn(`Unauthorized role: ${userRole}. Logging out...`);
          toast.error("You do not have access. Logging out...");
          deleteCookie("isAuthenticated");
          localStorage.removeItem("auth-data");
          await logout();
          return;
        }

        setCookie("isAuthenticated", "true", {
          expires: 7,
          secure: true,
          sameSite: "Lax",
        });
        setIsAuthenticated(true);
        setUserInfo(data);
        setLoading(false);

        // Save minimal user data to localStorage
        localStorage.setItem(
          "auth-data",
          JSON.stringify({
            isAuthenticated: true,
            userInfo: { id: data.id, role: data.role },
          })
        );
      } else {
        throw new Error("Invalid user data received");
      }
    } catch (error) {
      console.error("checkAuth error:", error);
      deleteCookie("isAuthenticated");
      localStorage.removeItem("auth-data");
      await logout();
    }
  };

  // Load persisted data from localStorage on initial render
  useEffect(() => {
    const persistedData = localStorage.getItem("auth-data");
    if (persistedData) {
      try {
        const { isAuthenticated: savedAuth } = JSON.parse(persistedData);
        if (savedAuth && !isAuthenticated) {
          checkAuth();
        }
      } catch (error) {
        console.error("Error parsing persisted auth data:", error);
        localStorage.removeItem("auth-data");
      }
    }
  }, []);

  // Create a handler for authenticated fetch requests
  const handleFetchWithAuth = async (
    url: string,
    options: RequestInit = {}
  ) => {
    const headers = {
      ...getHeaders(),
      ...((options.headers as Record<string, string>) || {}),
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        credentials: "include",
      });

      if (response.status === 401) {
        await logout();
        return null;
      }

      return response;
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  };

  const value = {
    isAuthenticated,
    loading,
    error,
    userInfo,
    login,
    logout,
    fetchUserInfo,
    checkAuth,
    fetchWithAuth: handleFetchWithAuth, // Add the fetch utility to the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Create a separate fetchWithAuth utility that won't use hooks directly
// This version uses the redirect approach for unauthorized calls
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const headers = {
    ...getHeaders(),
    ...((options.headers as Record<string, string>) || {}),
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "include",
    });

    if (response.status === 401) {
      // Instead of calling useAuth hook, handle unauthorized directly
      deleteCookie("isAuthenticated");
      localStorage.removeItem("auth-data");
      window.location.href = "/login";
      return null;
    }

    return response;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
