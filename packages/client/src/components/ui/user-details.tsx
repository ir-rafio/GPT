import { useState } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { Textarea } from "./textarea";

enum Mode {
  VIEW,
  EDITSHIRT,
  EDITNOTE
}

function UserDetails({
  id,
  student
}: {
  id: string | undefined;
  student: any;
}) {
  const isMe = window.location.pathname.split("/").at(-1) === "me";
  const [mode, setMode] = useState(Mode.VIEW);
  const { name, tshirtSize, note } = student;
  const [displayNote, setDisplayNote] = useState(note);

  return (
    <>
      <div className="m-6 ml-20 flex flex-col justify-between">
        <div>
          {isMe ? (
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
        </div>
      </div>
    </>
  );
}

export default UserDetails;
