import { Card } from "@/components/ui/card";
import Nicknames from "@/components/ui/nicknames";
import UserDetails from "@/components/ui/user-details";

function Me() {
  const id = window.localStorage.getItem("id") || undefined;

  return <div>Mepage</div>;

  return (
    <>
      <div>
        <Card>
          <div className="flex justify-between">
            <UserDetails id={id} />
            <Nicknames id={id} />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Me;
