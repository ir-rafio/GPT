import { Card } from "./card";

function UserDetails({ id }: { id: string | undefined }) {
  const isMe = window.location.pathname.split("/").at(-1) === "me";
  const name = window.localStorage.getItem("name");

  return (
    <>
      <div className="m-2 flex flex-col justify-between">
        <div>
          {isMe ? (
            <h1 className="m-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {name}
            </h1>
          ) : (
            <h1 className="m-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Name Fetch kora lagbe
            </h1>
          )}
          <h2 className=" m-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {id}
          </h2>
          <div className="m-2">tshirt size</div>
        </div>
        <div>
          <Card className="m-2 flex-grow">
            <p className="text-muted-foreground m-4 max-h-40 flex-wrap overflow-y-auto text-xl">
              valo kisu dish vai valo kisu dish vai valo kisu dish vai valo kisu
              dish vai valo kisu dish vai valo kisu dish vai valo kisu dish vai
              valo kisu dish vai valo kisu dish vai valo kisu dish vai valo kisu
              dish vai valo kisu dish vai valo kisu dish vai valo kisu dish vai
              valo kisu dish vai valo kisu dish vai valo kisu dish vai
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
