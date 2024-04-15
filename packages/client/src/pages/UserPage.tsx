import { Card } from "@/components/ui/card";
import Nickname from "@/components/ui/nickname";

function UserPage() {
  const id = window.location.pathname.split("/").at(-1);

  return (
    <>
      <div>
        <Card>
          <h1>Nicknames</h1>
          <Nickname id={id} />
        </Card>
      </div>
    </>
  );
}

export default UserPage;
