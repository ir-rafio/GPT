import { Card } from "@/components/ui/card";
import { Button } from "./button";
import { FaPlus, FaTrash } from "react-icons/fa6";

function Nicknames({ id }: { id: string | undefined }) {
  // fetch this data from the server
  const nicknames = [
    "Polo",
    "Lili",
    "Mimi",
    "Kiki",
    "Polo",
    "Lili",
    "Mimi",
    "Kiki",
    "Polo",
    "Lili",
    "Mimi",
    "Kiki",
    "Polo",
    "Lili",
    "Mimi",
    "Kiki",
    "Polo",
    "Lili",
    "Mimi",
    "Kiki",
    "বাংলাদেশ"
  ];
  const isMe = window.location.pathname.split("/").at(-1) === "me";

  console.log("Fetching nicknames for user", id);
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
          {nicknames.map((nickname, idx) => (
            <Card key={idx} className="m-2 w-96 p-2">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <div className="justify-start">
                    <code>{nickname}</code>
                  </div>
                  <div className="text-xs text-gray-500">
                    Votes: {0} // TODO: fetch votes
                  </div>
                </div>
                <div>
                  <Button variant="destructive" size="sm" className="mr-2">
                    <FaTrash />
                  </Button>
                  <Button variant="outline" size="sm">
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
