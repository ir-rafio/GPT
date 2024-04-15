import { axiosClient } from "@/config/axios";
import { useEffect, useState } from "react";

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
  console.log(userData);

  if (userData) {
    console.log("Setting local storage");
    window.localStorage.setItem("id", userData.metadata.studentId);
    window.localStorage.setItem("name", userData.metadata.name);
  }
  return (
    <div>
      {userData ? (
        <div>
          Hello {userData.metadata.name}. ID: {userData.metadata.studentId}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
