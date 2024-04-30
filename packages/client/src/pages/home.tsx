import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { axiosClient } from "@/config/axios";
import { useEffect, useState } from "react";

interface UserData {
  metadata: {
    name: string;
    studentId: string;
  };
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    axiosClient.get("/user/data").then((res) => {
      setUserData(res.data);
    });
  }, []);

  // <Card>
  //   <CardContent className="flex items-center justify-center p-4">
  //     <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  //       CSE 1
  //     </h3>
  //   </CardContent>
  // </Card>
  return (
    <div className="m-6 flex justify-center">
      {userData ? (
        <div>
          <div className="m-12 mx-auto w-full text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <code>Hello, {userData.metadata.name}</code>
            </h1>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <Carousel className="h-full w-full">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="space-y-4 p-1">
                    <Card>
                      <CardContent className="mt-4 grid grid-cols-5 grid-rows-8 gap-4">
                        {Array.from({ length: 42 }).map((_, index) => (
                          <Card key={index}>
                            <CardHeader className="p-4 pb-1 font-semibold">
                              190041115
                            </CardHeader>
                            <CardContent className="p-4 pt-1">
                              <code>Md. Shahnewaz Siddique</code>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="animate-bounce text-xl">Loading....</div>
      )}
    </div>
  );
}
