import { Card } from "@/components/ui/card";
import CommentSection from "@/components/ui/comment-section";
import Nicknames from "@/components/ui/nicknames";
import UserDetails from "@/components/ui/user-details";
import { axiosClient } from "@/config/axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function UserPage() {
  const id = window.location.pathname.split("/").at(-1);

  if (id === window.localStorage.getItem("id")) {
    return <Navigate to="/users/me" replace />;
  }

  const [student, setStudent] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axiosClient.get(`/student/classmate/${id}/get`).then((res) => {
      console.log("res", res.data);
      const { student } = res.data;
      setStudent(student);
      setIsLoaded(true);
    });
  }, [isLoaded]);

  return (
    <>
      <div>
        {isLoaded && (
          <Card>
            <div className="flex justify-between">
              <UserDetails id={id} student={student} />
              <Nicknames
                setIsLoaded={setIsLoaded}
                nicknames={student.nicknames}
              />
            </div>
            <CommentSection id={id} />
          </Card>
        )}
      </div>
    </>
  );
}

export default UserPage;
