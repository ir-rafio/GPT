import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { axiosClient } from "@/config/axios";
import { cse1, cse2, swe } from "@/data/students";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const bgColor = "bg-sky-300";

  return (
    <div className="m-6 flex justify-center">
      {userData ? (
        <div>
          <div className="m-4 mx-auto w-full text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <code>Hello, {userData.metadata.name}</code>
              <br />
              <code className="text-2xl">
                Time to vote for your fellow classmates' nicknames!
              </code>
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <Carousel className="h-full w-11/12">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="space-y-4 p-1">
                    <Card className={bgColor}>
                      <CardContent className="mt-4 grid grid-cols-5 grid-rows-8 gap-4">
                        {cse1.map((student, index) => (
                          <Card
                            key={index}
                            className="hover:drop-shadow-lg"
                            onClick={() => navigate(`/users/${student.id}`)}
                          >
                            <CardHeader className="p-4 pb-1 font-semibold">
                              {student.id}
                            </CardHeader>
                            <CardContent className="p-4 pt-1">
                              <code>{student.name}</code>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem key={2}>
                  <div className="space-y-4 p-1">
                    <Card className={bgColor}>
                      <CardContent className="mt-4 grid grid-cols-5 grid-rows-8 gap-4">
                        {cse2.map((student, index) => (
                          <Card
                            key={index}
                            className="hover:drop-shadow-lg"
                            onClick={() => navigate(`/users/${student.id}`)}
                          >
                            <CardHeader className="p-4 pb-1 font-semibold">
                              {student.id}
                            </CardHeader>
                            <CardContent className="p-4 pt-1">
                              <code>{student.name}</code>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem key={3}>
                  <div className="space-y-4 p-1">
                    <Card className={bgColor}>
                      <CardContent className="mt-4 grid grid-cols-5 grid-rows-8 gap-4">
                        {swe.map((student, index) => (
                          <Card
                            key={index}
                            className="hover:drop-shadow-lg"
                            onClick={() => navigate(`/users/${student.id}`)}
                          >
                            <CardHeader className="p-4 pb-1 font-semibold">
                              {student.id}
                            </CardHeader>
                            <CardContent className="p-4 pt-1">
                              <code>{student.name}</code>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="h-12 w-12 bg-sky-900 text-white" />
              <CarouselNext className="h-12 w-12 bg-sky-900 text-white" />
            </Carousel>
          </div>
        </div>
      ) : (
        <div className="animate-bounce text-xl">Loading....</div>
      )}
    </div>
  );
}
