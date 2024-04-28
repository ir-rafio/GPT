import { axiosClient } from "@/config/axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface UserData {
  metadata: {
    name: string;
    studentId: string;
  };
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    axiosClient.get("/user/data").then((res) => {
      setUserData(res.data);
    });
  }, []);

  if (userData) {
    window.localStorage.setItem("id", userData.metadata.studentId);
    window.localStorage.setItem("name", userData.metadata.name);
    return <Navigate to="/users/me" replace />;
  }
  return (
    <div className="m-6 mt-12 flex justify-center">
      {userData ? (
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <code>Hello, {userData.metadata.name}</code>
          </h1>
        </div>
      ) : (
        <div className="animate-pulse">Loading....</div>
      )}
    </div>
  );
}
