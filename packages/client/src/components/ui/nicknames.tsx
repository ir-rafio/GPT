import { Card } from "@/components/ui/card";
import { Button } from "./button";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { axiosClient } from "@/config/axios";
import { toast } from "sonner";

function Nicknames({
  nicknames,
  setIsLoaded
}: {
  nicknames: any;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMe = window.location.pathname.split("/").at(-1) === "me";

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
              className="rounded-md border border-gray-200 p-2"
            />
            <Button variant="default" size="sm" className="ml-2">
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
                  <Button variant="destructive" size="sm" className="mr-2">
                    <FaTrash />
                  </Button>
                  <Button
                    variant="outline"
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

                      console.log("data", data);
                      axiosClient
                        .put(`/vote/add`, { data })
                        .then((res) => {
                          console.log("asdasd", res);
                          toast(res.data.message, {});
                          setIsLoaded(false);
                        })
                        .catch((error) => {
                          console.error("Error occurred while voting:", error);
                        });
                    }}
                  >
                    Vote
                  </Button>
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
