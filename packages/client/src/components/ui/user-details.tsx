import { axiosClient } from "@/config/axios";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { Textarea } from "./textarea";

enum Mode {
  VIEW,
  EDITSHIRT,
  EDITNOTE
}

function UserDetails({ id }: { id: string | undefined }) {
  const isMe = window.location.pathname.split("/").at(-1) === "me";
  const [name, setName] = useState(window.localStorage.getItem("name"));
  const [mode, setMode] = useState(Mode.VIEW);
  const [note, setNote] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axiosClient.get(`/student/me/${id}/get`).then((res) => {
      setName(res.data.student.name);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <div className="m-6 ml-20 flex flex-col justify-between">
        <div>
          {isMe && isLoaded ? (
            <h1 className="m-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {name}
            </h1>
          ) : (
            <h1 className="m-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {name}
            </h1>
          )}
          <h2 className=" m-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {id}
          </h2>
          {mode === Mode.EDITSHIRT ? (
            <div className="m-2">edit tshirt size</div>
          ) : (
            <div className="m-2">view tshirt size</div>
          )}
          // TODO: make tshirt editable
        </div>
        <div className="flex">
          {mode === Mode.EDITNOTE ? (
            <div className="flex flex-row">
              <Textarea
                className="m-4 max-h-40 max-w-5xl flex-wrap overflow-y-auto text-xl"
                placeholder="Edit note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <div className="m-4 flex flex-col justify-end">
                <Button variant="default" onClick={() => setMode(Mode.VIEW)}>
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <Card
              className="m-2 max-h-40 max-w-5xl overflow-x-auto text-xl"
              onClick={() => {
                setMode(Mode.EDITNOTE);
              }}
            >
              <p className="text-muted-foreground m-4">
                {note == "" ? "Add note" : note}
              </p>
              // TODO: make it more good // TODO: connectto backendo
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
