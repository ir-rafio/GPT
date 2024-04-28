import { Card } from "@/components/ui/card";
import CommentSection from "@/components/ui/comment-section";
import Nicknames from "@/components/ui/nicknames";
import UserDetails from "@/components/ui/user-details";
import { axiosClient } from "@/config/axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function UserPage() {
  const id = window.location.pathname.split("/").at(-1);

  if (id === window.localStorage.getItem("id")) {
    return <Navigate to="/users/me" replace />;
  }

  useEffect(() => {
    axiosClient.get(`/v2/student/me/${id}/get`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <Card>
          <div className="flex justify-between">
            <UserDetails id={id} />
            <Nicknames id={id} />
          </div>
          <CommentSection id={id} />
        </Card>
      </div>
    </>
  );
}

export default UserPage;
