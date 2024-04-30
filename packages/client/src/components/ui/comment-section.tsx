import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { FaPaperPlane, FaTrash } from "react-icons/fa6";
import { axiosClient } from "@/config/axios";

function CommentSection({
  comments,
  setIsLoaded
}: {
  comments: any;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [comment, setComment] = useState("");
  return (
    <div className="m-12">
      <div className="ml-2">Comments</div>
      <div className="flex items-center justify-between">
        <Input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="m-2"
        />
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            if (comment === "") {
              return;
            }
            axiosClient
              .post(`/comment/add`, {
                data: {
                  comment: {
                    text: comment,
                    sender: Number(window.localStorage.getItem("id")),
                    receiver: Number(window.location.pathname.split("/").at(-1))
                  }
                }
              })
              .then((res) => {
                setComment("");
                console.log(res);
                setIsLoaded(false);
              });
          }}
        >
          <FaPaperPlane />
        </Button>
      </div>
      <div className="mt-4 max-h-96 overflow-y-auto">
        {comments.map((comment: any, idx: any) => (
          <div key={idx} className="my-2 rounded-lg bg-cyan-100 p-4">
            <div className="mb-2 font-semibold text-gray-800">
              {comment.sender} said:
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-800">{comment.text}</div>
              <div>
                {comment.sender ===
                  Number(window.localStorage.getItem("id")) && (
                  <Button
                    variant="destructive"
                    className="rounded-full"
                    size="sm"
                    onClick={() => {
                      axiosClient
                        .put(`/comment/delete`, {
                          data: {
                            commentId: comment.id,
                            myId: Number(window.localStorage.getItem("id"))
                          }
                        })
                        .then(() => {
                          setIsLoaded(false);
                        });
                    }}
                  >
                    <FaTrash />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
