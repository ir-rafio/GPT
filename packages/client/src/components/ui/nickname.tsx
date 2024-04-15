import { Card } from "@/components/ui/card";
import { Button } from "./button";

function Nickname({ id }: { id: string }) {
  // fetch this data from the server
  const nicknames = ["Polo", "Lili", "Mimi", "Kiki"];

  console.log("Fetching nicknames for user", id);
  return (
    <>
      <div>
        {nicknames.map((nickname) => (
          <Card className="w-96 p-2">
            <div className="flex items-center justify-between space-x-2">
              <div className="justify-start">{nickname}</div>
              <div>
                <Button variant="destructive" size="sm" className="mr-2">
                  Delete
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Nickname;
