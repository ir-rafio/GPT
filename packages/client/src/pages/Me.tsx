import { Card } from "@/components/ui/card";

function Me() {
  const id = window.localStorage.getItem("id") || undefined;
  const name = window.localStorage.getItem("name") || undefined;

  return (
    <Card>
      <div className="flex justify-between">
        <div className="m-6 ml-20 flex flex-col justify-between">
          <div>
            <h1 className="m-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {name}
            </h1>
            <h2 className=" m-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {id}
            </h2>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Me;
