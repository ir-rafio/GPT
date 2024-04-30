import { Card } from "@/components/ui/card";
import { Button } from "./button";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { axiosClient } from "@/config/axios";
import { toast } from "sonner";
import { useState } from "react";

function Nicknames({
  nicknames,
  setIsLoaded
}: {
  nicknames: any;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMe = window.location.pathname.split("/").at(-1) === "me";
  const [nickname, setNickname] = useState("");

  return (
    <>
      <div className="m-2 mr-24 mt-8">
        <div className="ml-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Nicknames
          </h2>
        </div>
        {!isMe && (
          <div className="m-2 ml-4 flex items-center justify-start">
            <input
              type="text"
              placeholder="Add a nickname..."
              value={nickname}
              className="rounded-md border border-gray-200 p-2"
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button
              variant="default"
              size="sm"
              className="ml-2 rounded-lg"
              onClick={() => {
                if (nickname === "") {
                  toast("Nickname cannot be empty", {});
                  return;
                }
                axiosClient
                  .post(`/nickname/create`, {
                    data: {
                      nickname: {
                        name: nickname,
                        sender: Number(window.localStorage.getItem("id")),
                        receiver: Number(
                          window.location.pathname.split("/").at(-1)
                        )
                      }
                    }
                  })
                  .then((res) => {
                    toast("Nickname successfully added", {});
                    setIsLoaded(false);
                  })
                  .catch((error) => {
                    console.error(
                      "Error occurred while adding nickname:",
                      error
                    );
                  });
              }}
            >
              <FaPlus />
            </Button>
          </div>
        )}
        <div className="max-w-160 m-2 max-h-80 overflow-y-auto">
          {nicknames.map((nickname: any, idx: any) => (
            <Card key={idx} className="m-2 w-96 p-2">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <div className="justify-start">
                    <code>{nickname.name}</code>
                  </div>
                  <div className="text-xs text-gray-500">
                    Votes: {nickname.votes.length}
                  </div>
                </div>
                <div>
                  {nickname.votes.length === 0 &&
                    nickname.sender ===
                      Number(window.localStorage.getItem("id")) && (
                      <Button
                        variant="destructive"
                        size="sm"
                        className="mr-2 rounded-full"
                      >
                        <FaTrash />
                      </Button>
                    )}

                  {nickname.votes.some(
                    (vote: any) =>
                      vote.voter === Number(window.localStorage.getItem("id"))
                  ) ? (
                    <Button
                      variant="destructive"
                      className="rounded-full"
                      size="sm"
                      onClick={() => {
                        const data = {
                          vote: {
                            name: nickname.name,
                            voter: Number(window.localStorage.getItem("id")),
                            receiver: nickname.receiver
                          },
                          myId: Number(window.localStorage.getItem("id"))
                        };

                        axiosClient
                          .put(`/vote/delete`, { data })
                          .then((res) => {
                            toast(res.data.message, {});
                            setIsLoaded(false);
                          })
                          .catch((error) => {
                            console.error(
                              "Error occurred while deleting vote:",
                              error
                            );
                          });
                      }}
                    >
                      <FaMinus />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="rounded-full bg-blue-500 text-white"
                      size="sm"
                      onClick={() => {
                        const data = {
                          vote: {
                            name: nickname.name,
                            voter: Number(window.localStorage.getItem("id")),
                            receiver: nickname.receiver
                          },
                          myId: Number(window.localStorage.getItem("id"))
                        };

                        axiosClient
                          .put(`/vote/add`, { data })
                          .then((res) => {
                            toast(res.data.message, {});
                            setIsLoaded(false);
                          })
                          .catch((error) => {
                            console.error(
                              "Error occurred while voting:",
                              error
                            );
                          });
                      }}
                    >
                      <FaPlus />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nicknames;
